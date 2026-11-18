# @garinz/dsh-sidebar-view

给 DeepSeek Harness 左侧栏「会话 / 工作区」这一层加两个原生没有的能力：**按时间分组**与**状态 Tab**。

原生（0.2.2-rc.3）的「视图选项」只有 按工作区 / 按工作区树 / 单列表 三种分组、隐藏已归档的筛选。
本插件在**保留原生全部行为**的前提下追加：

1. **按时间**（第四种分组）：`置顶 → 今天 → 昨天 → 本周（周一起算）→ 更早`，空桶自动隐藏，
   桶头带行数与折叠三角，行尾显示所属工作区名，跨项目可见。**桶内支持拖拽排序**：
   拖动只落在同一桶内（跨桶不显示插入线、松手也不改序）；落点写回全局手动顺序，
   因此单列表视图的排序会同步变化。首次拖动会自动把「排序方式」切到手动排序，
   否则「最近更新」的实时排序会立刻覆盖掉刚拖出来的顺序。
2. **状态 Tab**（标题下方一排）：`全部 / 运行中 / 待确认 / 待查看`，带实时计数，
   在四种分组模式下一致生效；过滤后为空的组/桶自动消失。搜索展开时自动隐藏，避免与搜索结果计数混淆。
3. **行尾工作区名 chip**：单列表与按时间模式下，平铺的行也能一眼看出属于哪个项目。

其余（搜索、右键菜单、重命名、分叉、置顶、归档、手动排序、展开其余 N 个、
添加工作区、工作区菜单、快捷键、收起 56px rail）全部沿用原生实现。

## 实现方式：坐在原生组件上，而不是接管它

- `@deepseek-ai/dsh-client-ui-workspace` **保持启用**。它继续提供 `uiWorkspace` 服务、
  声明全部子槽位（行首/行尾/悬停 seat、行操作、目录选择器）、注册 locale 与快捷键。
- 本插件在该插件注册的 `sidebar.workspaces` 条目上，把 `entry.component` 换成自己的外壳：
  外壳合成原生 store 快照 + 两个增量字段，再把原生 props（含 `renderSlot`）传给移植版浏览器组件。
  所以第三方行装饰、行按钮、目录选择器看到的仍是同一个 slot 所有者，无需任何改动。
- **失败是本地化的**：组件抛错时错误边界渲染原生组件；bundle 没加载时原生组件根本没被动过；
  插件不注册任何服务、不改任何 profile、不写用户数据。最坏情况是「没有新功能」，不是「整个客户端起不来」。
- 增量状态单独存 `localStorage["dsh.workspace.view.sidebar-view.v1"]`（`timeMode / statusFilter / timeBucketExpansion`），
  原生 key `dsh.workspace.view.v5` 仍由原生 store 独占，不混写。
- `cordis.patch.yml` 只有一条 `insert`（包名必须带引号，`@` 是 YAML 保留指示符）。

## 构建

```bash
cd sidebar-view
npm install          # 仅首次
node build.mjs       # 产出 client.js（约 220 KB，内含 CSS）
```

构建脚本先在内存里拼产物、用 `node:vm` 跑一遍冒烟测试（断言 `__ModuleLoader__.load` 注册了本包），
再写临时文件并 `rename` 原子替换 `client.js` —— 避免宿主 watcher 读到写了一半的文件。

## 安装

```bash
dsh plugin --profile <profile> add link:/Users/garin/Project/llm/dsh-plugins/sidebar-view
# 或发布产物
dsh plugin --profile <profile> add /path/to/garinz-dsh-sidebar-view-0.2.0.tgz
```

命令会把依赖写进 profile 的 `package.json` 并自动追加 `dsh.profile.bundles`。装完重启应用生效。

卸载 / 回滚：

```bash
dsh plugin --profile <profile> remove @garinz/dsh-sidebar-view
```

原生侧栏随即恢复；本插件没有改动任何原生文件或用户数据。

## 已验证（2026-11-18，DSH 0.2.2-rc.3）

在隔离的干净 profile（只装本插件）与真实桌面 profile 上验证：

| 场景 | 结果 |
| --- | --- |
| 只装本插件的新 profile | 侧栏正常、4 个状态 Tab、输入框正常、无 console 报错 |
| 故意把 `client.js` 改成一加载就 throw | 只有 `web boot: warning: 1 entry did not activate`，原生侧栏与输入框照常，应用不退出 |
| 让 `Seat` 渲染时 throw | 错误边界回退原生组件（日志一行），输入框与页面正常 |
| 运行中重建 bundle（HMR） | 新产物的 build 戳打印，Tab/输入框都在，无异常 |
| 真实桌面应用 | AX 树取证：`全部 31 / 运行中 1 / 待确认 0 / 待查看 0`；桶 `置顶 4 / 今天 5 / 昨天 6 / 更早 16`；行尾工作区 chip；`AXTextArea 发消息或创建任务…` 与「访问模式」「选择模型」均在 |

## 已知限制

- 依赖 0.2.2-rc.3 的**未文档化内部契约**：`StoredEntry.component` 可替换、渲染器按 entry 读组件。
  若上游改变这一实现，插件会「不生效」而不是崩溃（入口拿不到可替换的 entry 时插件不做任何事，客户端按无本插件启动）。
- 时间视图的拖拽只在桶内生效：桶由更新时刻决定，跨桶没有可写的目标位置。
- 行尾 chip 占约 72px，长标题截断更早。
- 纯 web profile 下「添加工作区」浮层需要 `sidebar.workspaces.directoryFlow` 提供者
  （`dsh-client-ui-directory-picker-browse`），桌面应用里正常。
- DSH 升级到 0.3.x 后需要按新版 `dsh-client-ui-workspace` 重新对齐移植层。

## 与上游同步

1. 从 `app.asar` 取出新版的 `@deepseek-ai/dsh-client-ui-workspace` 源码（`src/client`）；
2. 覆盖 `src/browser/`；
3. 把 `tree.ts`、`stores.ts`、`locales.ts`、`rows/Rows.tsx`、`rows/WorkspaceBrowser.tsx` 里的
   时间分组 / 状态 Tab / workspaceLabel 增量贴回（改动点均有注释）；
4. `node build.mjs` 后按上表回归。
