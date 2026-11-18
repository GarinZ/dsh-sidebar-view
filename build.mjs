/**
 * Bundle the plugin's client half into the single file the web shell loads.
 *
 * The shell's module table provides react, react-dom, the JSX runtime and the
 * platform packages (@deepseek-ai/*), so all of those stay external and resolve
 * through the factory's `require`. CSS is compiled with the local-css loader
 * (class names hashed and rewritten in the emitted stylesheet), then inlined
 * into the bundle and injected once at load time.
 */
import { build } from 'esbuild'
import { readFile, rename, writeFile } from 'node:fs/promises'
import path from 'node:path'
import vm from 'node:vm'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(await readFile(path.join(here, 'package.json'), 'utf8'))
const ID = pkg.name

const result = await build({
  entryPoints: [path.join(here, 'src/client/index.ts')],
  absWorkingDir: here,
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome126'],
  jsx: 'automatic',
  outfile: path.join(here, 'client.js'),
  external: [
    'react',
    'react-dom',
    'react-dom/client',
    'react/jsx-runtime',
    '@deepseek-ai/cordis',
    '@deepseek-ai/dsh-client-store',
    '@deepseek-ai/dsh-client-ui-primitives',
    '@deepseek-ai/dsh-client-ui-slots',
  ],
  loader: { '.module.css': 'local-css', '.css': 'local-css' },
  legalComments: 'none',
  charset: 'utf8',
  logLevel: 'warning',
})

const js = result.outputFiles.filter(file => file.path.endsWith('.js')).map(file => file.text).join('\n')
const css = result.outputFiles.filter(file => file.path.endsWith('.css')).map(file => file.text).join('\n')

const style = css.trim() === ''
  ? ''
  : `;(function () {
  var id = ${JSON.stringify(ID)}
  var existing = document.querySelector('style[data-plugin="' + id + '"]')
  if (existing) return
  var el = document.createElement('style')
  el.setAttribute('data-plugin', id)
  el.textContent = ${JSON.stringify(css)}
  document.head.append(el)
})();\n`

const stamp = new Date().toISOString()

const output = [
  `window.__ModuleLoader__.load({id:${JSON.stringify(ID)},factory:require=>{var module={exports:{}};var exports=module.exports;`,
  `;try{console.info('[dsh-sidebar-view] build ${stamp}')}catch(e){}`,
  js,
  style,
  ';return module.exports}})',
  '',
].join('\n')

// The app watches this file and re-imports it the moment it changes, so the
// visible file must only ever be a complete bundle: a reader that catches the
// truncate window would parse a partial script, register nothing, and (because
// this package is the only provider of uiWorkspace) take the whole client graph
// down with it. Render in memory, smoke-test, then swap the path atomically.
const modules = []
const context = vm.createContext({
  window: { __ModuleLoader__: { load: registration => modules.push(registration) } },
  console: { info() {}, warn() {}, error() {} },
})
new vm.Script(output, { filename: 'client.js' }).runInContext(context)
const registered = modules[0]
if (registered?.id !== ID || typeof registered.factory !== 'function') {
  throw new Error(`build produced a bundle that does not register ${ID} (got ${JSON.stringify(modules.map(m => m?.id))})`)
}

const target = path.join(here, 'client.js')
const staging = path.join(here, '.client.js.tmp')
await writeFile(staging, output)
await rename(staging, target)
console.log(`client.js written: ${(output.length / 1024).toFixed(1)} KiB (css ${(css.length / 1024).toFixed(1)} KiB)`)
