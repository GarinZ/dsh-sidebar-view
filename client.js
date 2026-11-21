window.__ModuleLoader__.load({id:"dsh-sidebar-view",factory:require=>{var module={exports:{}};var exports=module.exports;
;try{console.info('[dsh-sidebar-view] build 2026-11-21T12:29:02.784Z')}catch(e){}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.ts
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);

// src/client/seat.tsx
var React2 = __toESM(require("react"), 1);
var import_dsh_client_ui_primitives6 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/browser/appearance.ts
var ICON_BODIES = {
  "accessibility": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="16" cy="4" r="1"/><path d="m18 19l1-7l-6 1M5 8l3-3l5.5 3l-2.36 3.5m-6.9 3a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></g>',
  "alarm-clock": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21"/></g>',
  "anchor": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 6v16m7-9l2-1a9 9 0 0 1-18 0l2 1m4-2h6"/><circle cx="12" cy="4" r="2"/></g>',
  "apple": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 6.528V3a1 1 0 0 1 1-1"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></g>',
  "archive": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4"/></g>',
  "atom": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9c-4.54-4.52-9.87-6.54-11.9-4.5c-2.04 2.03-.02 7.36 4.5 11.9c4.54 4.52 9.87 6.54 11.9 4.5"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9c-2.03-2.04-7.36-.02-11.9 4.5c-4.52 4.54-6.54 9.87-4.5 11.9c2.03 2.04 7.36.02 11.9-4.5"/></g>',
  "baby": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5m1-4h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6a9 9 0 0 1-17.6 0a2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1m-3 5h.01"/></g>',
  "badge-check": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"/><path d="m16 9l-5.5 5.5L8 12"/></g>',
  "badge-info": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 16v-4m0-4h.01"/>',
  "banknote": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></g>',
  "battery-charging": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 7l-3 5h4l-3 5m5.856-11H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935M22 14v-4M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/>',
  "beer": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M17 11h1a3 3 0 0 1 0 6h-1m-8-5v6m4-6v6m1-10.5c-1 0-1.44.5-3 .5s-2-.5-3-.5s-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5s1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/></g>',
  "bell": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  "bike": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3l4-3l2 3h2"/></g>',
  "bird": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7l2 .5l-2 .5M10 18v3m4-3.25V21m-7-3a6 6 0 0 0 3.84-10.61"/></g>',
  "blocks": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect width="8" height="8" x="14" y="2" rx="1"/></g>',
  "bluetooth": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10l-5 5V2l5 5L7 17"/>',
  "book-open": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v16m8.001-2A2 2 0 0 0 22 17V5a2 2 0 0 0-1.999-2L16 3.002A5 5 0 0 0 12 5a5 5 0 0 0-4-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 1.999 2H8a5 5 0 0 1 4 2a5 5 0 0 1 4-2z"/>',
  "bookmark": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/>',
  "bot": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"/></g>',
  "box": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7l8.7 5l8.7-5M12 22V12"/></g>',
  "brain": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.707-6.706A3 3 0 1 0 12 5a3 3 0 1 0-5.707 1.294"/><path d="M17.996 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.465"/><path d="M19.967 17.482a4 4 0 1 1-7.967.517a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.465"/><path d="M6.004 5.125a4 4 0 0 0-2.526 5.77"/></g>',
  "briefcase": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></g>',
  "briefcase-business": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></g>',
  "bug": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 20v-9m2-4a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4zm.12-3.12L16 2"/><path d="M21 21a4 4 0 0 0-3.81-4M21 5a4 4 0 0 1-3.55 3.97M22 13h-4M3 21a4 4 0 0 1 3.81-4M3 5a4 4 0 0 0 3.55 3.97M6 13H2M8 2l1.88 1.88M9 7.13V6a3 3 0 1 1 6 0v1.13"/></g>',
  "building-complex": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></g>',
  "cake": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1s2.5 2 4 2s2.5-2 4-2s2.5 2 4 2s2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01"/></g>',
  "calculator": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></g>',
  "calendar": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 2v3m8-3v3"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/></g>',
  "camera": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></g>',
  "car": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></g>',
  "carrot": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3"/><path d="M15 9q4 4 7 0q-3-4-7 0q4-4 0-7q-4 3 0 7m-7 6l-2.58-2.58"/></g>',
  "cat": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 5c.67 0 1.35.09 2 .26c1.78-2 5.03-2.84 6.42-2.26c1.4.58-.42 7-.42 7c.57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44c0 0-1.89-6.42-.5-7s4.72.23 6.5 2.23A9 9 0 0 1 12 5m-4 9v.5m8-.5v.5"/><path d="M11.25 16.25h1.5L12 17z"/></g>',
  "cctv": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97m1.696-5.627a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3zM2 19h3.76a2 2 0 0 0 1.8-1.1L9 15m-7 6v-4m5-8h.01"/>',
  "chart-line": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9l-5 5l-4-4l-3 3"/></g>',
  "cherry": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3m10 0a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3"/><path d="M7 14c3.22-2.91 4.29-8.75 5-12c1.66 2.38 4.94 9 5 12"/><path d="M22 9c-4.29 0-7.14-2.33-10-7c5.71 0 10 4.67 10 7"/></g>',
  "citrus": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"/><path d="M19.65 15.66A8 8 0 0 1 8.35 4.34M14 10l-5.5 5.5"/><path d="M14 17.85V10H6.15"/></g>',
  "clapperboard": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.296 3.464l3.02 3.956M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3zM3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3.18-5.724l3.1 3.899"/>',
  "clipboard-list": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"/></g>',
  "cloud": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"/>',
  "cloud-cog": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m10.852 19.772l-.383.924m2.679-6.468l.383-.923m-.383 6.467a3 3 0 1 0-2.296-5.544l-.383-.923"/><path d="m13.53 20.696l-.382-.924a3 3 0 1 1-2.296-5.544m3.92 1.624l.923-.383m-.923 2.679l.923.383"/><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2m-10.772-.348l-.923-.383m.923 2.679l-.923.383"/></g>',
  "cloud-lightning": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12l-3 5h4l-3 5"/></g>',
  "cloud-rain": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6m-8-6v6m4-4v6"/>',
  "cloud-snow": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01"/>',
  "cloud-sun": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6"/>',
  "clover": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.17 7.83L2 22m2.02-10a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12m3.83-4.17l8.34 8.34"/>',
  "code": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 18l6-6l-6-6M8 6l-6 6l6 6"/>',
  "coffee": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2"/>',
  "columns-3": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18m6-18v18"/></g>',
  "compass": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/></g>',
  "component": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0zm-13.239 0a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0zm6.619 6.619a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0zm0-13.238a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/>',
  "cookie": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17h.01m.486-15c.324-.016.558.292.529.615a4 4 0 0 0 4.235 4.368a.713.713 0 0 1 .758.757a4 4 0 0 0 4.366 4.237c.323-.03.63.204.614.527a10 10 0 0 1-2.915 6.566A1 1 0 1 1 4.93 4.918A10 10 0 0 1 11.496 2M12 12h.01M16 16h.01M16 3h.01M21 4h.01M21 8h.01M7 14h.01M9 8h.01"/>',
  "cpu": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"/><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="8" height="8" x="8" y="8" rx="1"/></g>',
  "credit-card": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20M6 14h2"/></g>',
  "crown": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14"/>',
  "cup-soda": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m6 8l1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14"/><path d="M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 5 0m-5-7l1-6h2"/></g>',
  "database": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></g>',
  "database-zap": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"/><path d="M3 12a9 3 0 0 0 11.59 2.87"/></g>',
  "diamond": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"/>',
  "disc": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></g>',
  "dna": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/>',
  "dog": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.25 16.25h1.5L12 17zM16 14v.5"/><path d="M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5"/></g>',
  "droplet": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7"/>',
  "droplets": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"/><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></g>',
  "drum": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 2l8 8m12-8l-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9m5-7.3v8m5-8.6v7.9M2 9v8a10 5 0 0 0 20 0V9"/></g>',
  "dumbbell": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8"/>',
  "earth": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></g>',
  "egg": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"/>',
  "feather": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.086 18.412A2 2 0 0 1 12.67 19H5v-7.672a2 2 0 0 1 .586-1.414L11.75 3.75a6 6 0 1 1 8.49 8.49zM16 8L2 22m15.488-7H9"/>',
  "film": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4"/></g>',
  "fingerprint-pattern": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"/></g>',
  "fish": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6s6.06 2.54 7 6c-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86m-9 4.6C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5c-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4m0 11.86l-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/></g>',
  "flag": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>',
  "flame": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>',
  "flask-conical": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"/>',
  "flower": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16"/></g>',
  "folder": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  "folder-open": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',
  "gallery-horizontal": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 3v18"/><rect width="12" height="18" x="6" y="3" rx="2"/><path d="M22 3v18"/></g>',
  "gamepad-2": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 11h4M8 9v4m7-1h.01M18 10h.01m-.69-5H6.68a4 4 0 0 0-3.978 3.59l-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258q-.01-.075-.017-.151A4 4 0 0 0 17.32 5"/>',
  "gem": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"/><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"/></g>',
  "gift": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 7v14m8-10v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8m3.5-4a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5a1 1 0 0 1 0 5"/><rect width="18" height="4" x="3" y="7" rx="1"/></g>',
  "git-branch": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 6a9 9 0 0 0-9 9V3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/></g>',
  "git-merge": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></g>',
  "git-pull-request": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/></g>',
  "globe": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g>',
  "graduation-cap": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></g>',
  "guitar": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.9 12.1l4.514-4.514M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4zM6 16l2 2m.23-8.15A3 3 0 0 1 11 8a5 5 0 0 1 5 5a3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4a6 6 0 0 1-6-6a4 4 0 0 1 4-4a2 2 0 0 0 1.85-1.23z"/>',
  "hammer": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"/><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></g>',
  "handshake": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m11 17l2 2a1 1 0 1 0 3-3"/><path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/></g>',
  "hard-drive": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16h.01m-7.798-4.423a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zm19.734.436H2.054M6 16h.01"/>',
  "headphones": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  "heart": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',
  "hourglass": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  "house": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></g>',
  "ice-cream-cone": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 11l4.08 10.35a1 1 0 0 0 1.84 0L17 11m0-4A5 5 0 0 0 7 7m10 0a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"/>',
  "id-card": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13 19a4 4 0 0 0-8 0m11-9h2m-2 4h2"/><circle cx="9" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="2"/></g>',
  "image": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></g>',
  "images": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m22 11l-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect width="14" height="14" x="8" y="2" rx="2"/></g>',
  "infinity": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/>',
  "kanban": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v14m7-14v8m7-8v18"/>',
  "key": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 21l9.6-9.6m-4.1 4.1l2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19"/><circle cx="15.5" cy="7.5" r="5.5"/></g>',
  "keyboard": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/></g>',
  "landmark": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18v-7m1.119-8.795a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7"/>',
  "layout-dashboard": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></g>',
  "layout-grid": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></g>',
  "leaf": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 20a10 10 0 0 0 10-10a25.9 25.9 0 0 0-1.04-7.281a1 1 0 0 0-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0 0 11 20"/><path d="M2 21a5 5 0 0 1 2.911-4.544C7.613 15.212 8.351 15.24 11 13"/></g>',
  "library": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 6l4 14M12 6v14M8 8v12M4 4v16"/>',
  "lightbulb": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"/>',
  "link": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g>',
  "list-todo": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4"/><rect width="6" height="6" x="3" y="4" rx="1"/></g>',
  "lock": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>',
  "mail": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g>',
  "megaphone": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"/></g>',
  "memory-stick": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 12v-2m0 8v-2m4-4v-2m0 8v-2M2 11h1.5M20 18v-2m.5-5H22M4 18v-2m4-4v-2m0 8v-2"/><rect width="20" height="10" x="2" y="6" rx="2"/></g>',
  "mic": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"/><rect width="6" height="13" x="9" y="2" rx="3"/></g>',
  "microscope": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
  "monitor": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8m-4-4v4"/></g>',
  "moon": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
  "moon-star": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h4m-2-2v4m.985 5.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
  "mountain": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 3l4 8l5-5l5 15H2z"/>',
  "mountain-snow": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m8 3l4 8l5-5l5 15H2z"/><path d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19"/></g>',
  "mouse": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="7"/><path d="M12 6v4"/></g>',
  "music": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></g>',
  "newspaper": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 18h-5m8-4h-8m-6 8h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></g>',
  "notebook": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/></g>',
  "orbit": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85m-6.607-4.334A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></g>',
  "package": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"/><path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"/></g>',
  "palette": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></g>',
  "panel-left": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></g>',
  "paperclip": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 6l-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>',
  "party-popper": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98c-.7.1-1.22.72-1.22 1.43V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2"/></g>',
  "paw-print": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10Z"/></g>',
  "pen-tool": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m18 13l-.654-4.736a4 4 0 0 0-2.756-3.266l-9.163-2.9a2 2 0 0 0-2.017.493l-.82.819a2 2 0 0 0-.492 2.017l2.9 9.163a4 4 0 0 0 3.266 2.756L13 18"/><path d="M18.648 12.352a1.205 1.205 0 0 1 1.704 0l1.296 1.296a1.205 1.205 0 0 1 0 1.704l-6.296 6.296a1.205 1.205 0 0 1-1.704 0l-1.296-1.296a1.205 1.205 0 0 1 0-1.704zM3 3l6.586 6.586"/><circle cx="11" cy="11" r="2"/></g>',
  "piano": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 13v4m4-4v4m4-4v4M2 13h20m0-1.5A3.5 3.5 0 0 0 18.5 8a3.52 3.52 0 0 1-3.173-2A7 7 0 0 0 2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zM6 13v4"/>',
  "piggy-bank": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1"/>',
  "pill": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7m-2-12l7 7"/>',
  "pizza": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 14l-1 1m2.75 3.25l-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7"/><path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"/></g>',
  "plane": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"/>',
  "play": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
  "plug": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22v-5m3-9V2m2 6a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1zM9 8V2"/>',
  "printer": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14" rx="1"/></g>',
  "puzzle": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"/>',
  "qr-code": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"/></g>',
  "rabbit": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13 16a3 3 0 0 1 2.24 5M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4a7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3m-8.388 5.524a3 3 0 1 0-1.6 4.3"/></g>',
  "radio": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></g>',
  "radio-tower": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9m2.9 2.8a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47M19.1 1.9a9.96 9.96 0 0 1 0 14.1m-9.6 2h5M8 22l4-11l4 11"/></g>',
  "rainbow": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 17a10 10 0 0 0-20 0"/><path d="M6 17a6 6 0 0 1 12 0"/><path d="M10 17a2 2 0 0 1 4 0"/></g>',
  "receipt": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 17V7m4 1h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1a1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1a1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2a1 1 0 0 1-1-1z"/></g>',
  "recycle": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633l4.096 1.098l1.097-4.096"/></g>',
  "rocket": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></g>',
  "rotate-ccw-clock": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5m4-1v5l4 2"/></g>',
  "rows-3": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3m18 6H3"/></g>',
  "ruler": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2"/>',
  "sailboat": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2v15m-3 5a4 4 0 0 1-4-4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1a4 4 0 0 1-4 4zM9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
  "satellite": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m13.5 6.5l-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5m7-3L19 5m-1.5 5.5l3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5M9 21a6 6 0 0 0-6-6"/><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/></g>',
  "scale": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"/></g>',
  "scan-face": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"/>',
  "school": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 21v-3a2 2 0 0 0-4 0v3m8-16.067V21M4 6l7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11l-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11M6 4.933V21"/><circle cx="12" cy="9" r="2"/></g>',
  "scissors": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12L12 12m8-8L8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8L20 20"/></g>',
  "scroll": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></g>',
  "send": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"/>',
  "server": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01M6 18h.01"/></g>',
  "share-2": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"/></g>',
  "shell": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11a2 2 0 1 1-4 0a4 4 0 0 1 8 0a6 6 0 0 1-12 0a8 8 0 0 1 16 0a10 10 0 1 1-20 0a11.93 11.93 0 0 1 2.42-7.22a2 2 0 1 1 3.16 2.44"/>',
  "shield": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  "shield-check": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12l2 2l4-4"/></g>',
  "ship": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 2v2m0 5.189V13m7-1V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 19A11.6 11.6 0 0 0 21 13l-8.188-3.639a2 2 0 0 0-1.624 0L3 13.001a11.6 11.6 0 0 0 2.81 7.76"/><path d="M2 20c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/></g>',
  "shopping-cart": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2.05 2.05l1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"/><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></g>',
  "shrub": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5m5 1L12 17"/><path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"/></g>',
  "smartphone": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></g>',
  "snowflake": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21l-3-6h-4m7-12l-3 6l1.5 3M2 12h6.5L10 9m10 1l-1.5 2l1.5 2"/><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h4"/></g>',
  "sparkles": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"/><circle cx="4" cy="20" r="2"/></g>',
  "sprout": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14"/>',
  "squirrel": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15.236 22a3 3 0 0 0-2.2-5"/><path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4m0 9h.01"/><path d="M18 6a4 4 0 0 0-4 4a7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0a2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"/></g>',
  "star": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
  "stethoscope": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></g>',
  "sun": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></g>',
  "sun-medium": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"/></g>',
  "syringe": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 2l4 4m-5 1l3-3m-1 5L8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5m-6 6l4 4m-8 4l-3 3M14 4l6 6"/>',
  "table": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18"/></g>',
  "tag": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></g>',
  "target": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></g>',
  "telescope": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m10.065 12.493l-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44m-2.875 6.493l4.332-.924M16 21l-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455zM6.158 8.633l1.114 4.456M8 21l3.105-6.21"/><circle cx="12" cy="13" r="2"/></g>',
  "tent": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 21L14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20"/>',
  "terminal": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19h8M4 17l6-6l-6-6"/>',
  "thermometer": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0"/>',
  "ticket": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"/>',
  "tornado": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 4H3m15 4H6m13 4H9m7 4h-6m1 4H9"/>',
  "trees": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/></g>',
  "trophy": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 14.66V17a1 1 0 0 1-1 1a2 2 0 0 0-2 2v2m7-7.34V17a1 1 0 0 0 1 1a2 2 0 0 1 2 2v2m.916-12H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/></g>',
  "truck": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></g>',
  "turtle": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 10l2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4zM4.82 7.9L8 10m7.18-2.1L12 10"/><path d="M16.93 10H20a2 2 0 0 1 0 4H2"/></g>',
  "tv": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m17 2l-5 5l-5-5"/><rect width="20" height="15" x="2" y="7" rx="2"/></g>',
  "umbrella": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 13v7a2 2 0 0 0 4 0M12 2v2"/><path d="M20.992 13a1 1 0 0 0 .97-1.274a10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"/></g>',
  "usb": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3L19 5m2-2l-3 1l2 2ZM9.26 7.68L5 12l2 5m3-3l5 2l3.5-3.5"/><path d="m18 12l1-1l1 1l-1 1Z"/></g>',
  "user-round": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></g>',
  "users": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></g>',
  "video": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect width="14" height="12" x="2" y="6" rx="2"/></g>',
  "wand-sparkles": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"/>',
  "waves": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/>',
  "wifi": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"/>',
  "wind": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2"/>',
  "wine": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5"/>',
  "workflow": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></g>',
  "wrench": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',
  "zap": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z"/>'
};
var ICON_GROUPS = [
  {
    id: "work",
    icons: [
      "briefcase",
      "briefcase-business",
      "building-complex",
      "landmark",
      "chart-line",
      "calculator",
      "receipt",
      "scale",
      "handshake",
      "users",
      "user-round",
      "id-card",
      "megaphone",
      "mail",
      "calendar",
      "clipboard-list",
      "list-todo",
      "kanban",
      "folder",
      "folder-open",
      "archive",
      "package",
      "box",
      "truck",
      "ship",
      "plane"
    ]
  },
  {
    id: "tech",
    icons: [
      "code",
      "terminal",
      "cpu",
      "database",
      "database-zap",
      "cloud",
      "cloud-cog",
      "server",
      "wifi",
      "bluetooth",
      "bot",
      "git-branch",
      "git-merge",
      "git-pull-request",
      "bug",
      "monitor",
      "keyboard",
      "mouse",
      "hard-drive",
      "memory-stick",
      "plug",
      "battery-charging",
      "shield",
      "shield-check",
      "lock",
      "key",
      "fingerprint-pattern",
      "workflow",
      "blocks",
      "component",
      "qr-code",
      "scan-face",
      "orbit",
      "satellite",
      "telescope",
      "radio-tower",
      "cctv",
      "printer",
      "usb"
    ]
  },
  {
    id: "nature",
    icons: [
      "leaf",
      "sprout",
      "trees",
      "flower",
      "mountain",
      "mountain-snow",
      "waves",
      "droplet",
      "droplets",
      "wind",
      "snowflake",
      "flame",
      "sun",
      "sun-medium",
      "moon",
      "moon-star",
      "star",
      "rainbow",
      "earth",
      "globe",
      "egg",
      "feather",
      "fish",
      "bird",
      "cat",
      "dog",
      "rabbit",
      "squirrel",
      "turtle",
      "shell",
      "shrub",
      "clover",
      "paw-print",
      "umbrella",
      "tornado",
      "cloud-rain",
      "cloud-snow",
      "cloud-lightning",
      "cloud-sun",
      "thermometer"
    ]
  },
  {
    id: "life",
    icons: [
      "house",
      "coffee",
      "pizza",
      "cake",
      "cookie",
      "ice-cream-cone",
      "apple",
      "cherry",
      "citrus",
      "carrot",
      "cup-soda",
      "wine",
      "beer",
      "shopping-cart",
      "credit-card",
      "banknote",
      "piggy-bank",
      "gift",
      "ticket",
      "party-popper",
      "heart",
      "baby",
      "accessibility",
      "dumbbell",
      "bike",
      "car",
      "sailboat",
      "tent"
    ]
  },
  {
    id: "create",
    icons: [
      "palette",
      "pen-tool",
      "image",
      "images",
      "camera",
      "video",
      "film",
      "music",
      "headphones",
      "mic",
      "guitar",
      "piano",
      "drum",
      "clapperboard",
      "book-open",
      "notebook",
      "scroll",
      "library",
      "graduation-cap",
      "school",
      "newspaper",
      "lightbulb",
      "wand-sparkles",
      "sparkles",
      "puzzle",
      "gamepad-2",
      "trophy",
      "target",
      "compass",
      "ruler",
      "scissors",
      "hammer",
      "wrench",
      "layout-dashboard",
      "layout-grid",
      "panel-left",
      "table",
      "columns-3",
      "rows-3",
      "gallery-horizontal"
    ]
  },
  {
    id: "misc",
    icons: [
      "zap",
      "crown",
      "gem",
      "diamond",
      "anchor",
      "flag",
      "tag",
      "bookmark",
      "bell",
      "alarm-clock",
      "hourglass",
      "rotate-ccw-clock",
      "infinity",
      "recycle",
      "rocket",
      "brain",
      "atom",
      "dna",
      "microscope",
      "syringe",
      "pill",
      "stethoscope",
      "flask-conical",
      "radio",
      "tv",
      "smartphone",
      "send",
      "share-2",
      "link",
      "paperclip",
      "badge-check",
      "badge-info",
      "play",
      "disc"
    ]
  }
];
var EMOJI_GROUPS = [
  {
    id: "work",
    emojis: ["💼", "🧑‍💻", "🖥️", "⌨️", "🖱️", "📊", "📈", "📉", "🗂️", "📁", "📂", "🗃️", "🗄️", "📝", "✏️", "🖊️", "📌", "📎", "🔗", "🧾", "🧮", "💰", "🏦", "⚙️"]
  },
  {
    id: "tech",
    emojis: ["💻", "🧠", "🤖", "🛰️", "☁️", "🧬", "🔬", "⚗️", "🧪", "🔧", "🔨", "🛠️", "🔌", "🔋", "💾", "💿", "📀", "🧲", "🛡️", "🔐", "🔑", "🧑‍🔧"]
  },
  {
    id: "nature",
    emojis: ["🌱", "🌿", "🍀", "🌵", "🌴", "🌲", "🌳", "🍁", "🌸", "🌼", "🌻", "🌷", "🌹", "🍄", "🌊", "🔥", "⭐", "🌙", "☀️", "🌈", "⛰️", "🏔️", "🌋", "🪐"]
  },
  {
    id: "animals",
    emojis: ["🐱", "🐶", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🦄", "🐝", "🦋", "🐙", "🦀", "🐬"]
  },
  {
    id: "food",
    emojis: ["🍎", "🍊", "🍋", "🍉", "🍇", "🍓", "🍒", "🥑", "🥦", "🌽", "🍞", "🥐", "🧀", "🍕", "🍔", "🍟", "🍜", "🍣", "🍩", "🍪", "☕", "🍵", "🍺", "🧊"]
  },
  {
    id: "fun",
    emojis: ["⚽", "🏀", "🎾", "🏓", "🎳", "🎮", "🕹️", "🎲", "🎯", "🎨", "🎬", "🎧", "🎸", "🎹", "🥁", "🎤", "🏆", "🏅", "🚀", "✈️", "🚗", "🚲", "🛹", "🏕️"]
  },
  {
    id: "symbols",
    emojis: ["✅", "❤️", "💙", "💜", "💚", "🧡", "💛", "🖤", "🤍", "⚡", "✨", "💡", "🔔", "🌟", "❄️", "🎉", "🎈", "💎", "👑", "🏷️", "🧩", "🪄", "🧿", "♾️"]
  }
];
var SESSION_COLORS = [
  { id: "red", hex: "#E5484D" },
  { id: "orange", hex: "#F76B15" },
  { id: "amber", hex: "#FFB224" },
  { id: "green", hex: "#30A46C" },
  { id: "teal", hex: "#12A594" },
  { id: "blue", hex: "#3E63DD" },
  { id: "violet", hex: "#8E4EC6" },
  { id: "pink", hex: "#D6409F" },
  { id: "gray", hex: "#8B8D98" }
];
var EMOJI_PREFIX = "emoji:";
var ICON_PREFIX = "icon:";
var MAX_VALUE = 32;
function parseIconSpec(raw) {
  if (typeof raw !== "string" || raw.length > MAX_VALUE + ICON_PREFIX.length) return null;
  if (raw.startsWith(EMOJI_PREFIX)) {
    const value = raw.slice(EMOJI_PREFIX.length);
    return value === "" ? null : { kind: "emoji", value };
  }
  if (raw.startsWith(ICON_PREFIX)) {
    const value = raw.slice(ICON_PREFIX.length);
    return ICON_BODIES[value] === void 0 ? null : { kind: "icon", value };
  }
  return null;
}
function formatIconSpec(spec) {
  return (spec.kind === "emoji" ? EMOJI_PREFIX : ICON_PREFIX) + spec.value;
}
function isSessionColorId(raw) {
  return SESSION_COLORS.some((color) => color.id === raw);
}
function sessionColorHex(raw) {
  return SESSION_COLORS.find((color) => color.id === raw)?.hex;
}
var MAX_TAG_NAME = 24;
var MAX_TAGS = 100;
var MAX_TAG_ID = 64;
function readTagDefinitions(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  for (const entry of raw) {
    if (out.length >= MAX_TAGS) break;
    if (typeof entry !== "object" || entry === null) continue;
    const { id, name: name2, color } = entry;
    if (typeof id !== "string" || id === "" || id.length > MAX_TAG_ID || seen.has(id)) continue;
    if (!isSessionColorId(color)) continue;
    seen.add(id);
    out.push({ id, name: typeof name2 === "string" ? name2.slice(0, MAX_TAG_NAME) : "", color });
  }
  return out;
}
function searchIcons(query) {
  const needle = query.trim().toLowerCase();
  if (needle === "") return [];
  const hits = [];
  for (const group of ICON_GROUPS) {
    for (const name2 of group.icons) {
      if (name2.includes(needle) && !hits.includes(name2)) hits.push(name2);
    }
  }
  return hits;
}

// src/browser/appearance-icon.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AppearanceIcon({ spec, size = 16, className }) {
  if (spec.kind === "emoji") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        className,
        style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, fontSize: Math.max(11, size - 2), lineHeight: 1 },
        "aria-hidden": true,
        children: spec.value
      }
    );
  }
  const body = ICON_BODIES[spec.value] ?? "";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      className,
      style: { display: "inline-flex", width: size, height: size, flex: "none" },
      "aria-hidden": true,
      dangerouslySetInnerHTML: {
        __html: '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" focusable="false" aria-hidden="true">' + body + "</svg>"
      }
    }
  );
}

// src/browser/appearance-request.ts
var current = null;
var listeners = /* @__PURE__ */ new Set();
function getAppearanceRequest() {
  return current;
}
function subscribeAppearanceRequest(fn) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
function requestAppearance(next) {
  if (next === current) return;
  current = next;
  for (const fn of [...listeners]) fn();
}

// src/browser/rows/WorkspaceBrowser.tsx
var import_react4 = require("react");

// ../sidebar-view/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// src/browser/rows/AppearanceDialogs.tsx
var React = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// src/browser/rows/AppearanceDialogs.module.css
var AppearanceDialogs_default = {
  panel: "AppearanceDialogs_panel",
  head: "AppearanceDialogs_head",
  headTitle: "AppearanceDialogs_headTitle",
  headScope: "AppearanceDialogs_headScope",
  toolbar: "AppearanceDialogs_toolbar",
  tabs: "AppearanceDialogs_tabs",
  tab: "AppearanceDialogs_tab",
  tabOn: "AppearanceDialogs_tabOn",
  search: "AppearanceDialogs_search",
  scroll: "AppearanceDialogs_scroll",
  groupLabel: "AppearanceDialogs_groupLabel",
  grid: "AppearanceDialogs_grid",
  cell: "AppearanceDialogs_cell",
  cellOn: "AppearanceDialogs_cellOn",
  empty: "AppearanceDialogs_empty",
  footer: "AppearanceDialogs_footer",
  textButton: "AppearanceDialogs_textButton",
  currentGlyph: "AppearanceDialogs_currentGlyph",
  primaryButton: "AppearanceDialogs_primaryButton",
  swatches: "AppearanceDialogs_swatches",
  swatchButton: "AppearanceDialogs_swatchButton",
  swatch: "AppearanceDialogs_swatch",
  swatchOn: "AppearanceDialogs_swatchOn",
  tagRows: "AppearanceDialogs_tagRows",
  tagRow: "AppearanceDialogs_tagRow",
  tagRowOn: "AppearanceDialogs_tagRowOn",
  tagRowEditing: "AppearanceDialogs_tagRowEditing",
  tagRowMain: "AppearanceDialogs_tagRowMain",
  tagRowDot: "AppearanceDialogs_tagRowDot",
  tagRowLabel: "AppearanceDialogs_tagRowLabel",
  tagRowAction: "AppearanceDialogs_tagRowAction",
  tagRowNew: "AppearanceDialogs_tagRowNew",
  editorLabel: "AppearanceDialogs_editorLabel",
  dangerPrimary: "AppearanceDialogs_dangerPrimary",
  nameRow: "AppearanceDialogs_nameRow",
  nameLabel: "AppearanceDialogs_nameLabel",
  nameInput: "AppearanceDialogs_nameInput",
  tagRowDanger: "AppearanceDialogs_tagRowDanger"
};

// src/browser/rows/AppearanceDialogs.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ANCHOR_GAP = 6;
var VIEWPORT_MARGIN = 8;
function AppearanceDialogs(props) {
  const request = React.useSyncExternalStore(subscribeAppearanceRequest, getAppearanceRequest);
  const [pendingDeleteId, setPendingDeleteId] = React.useState(null);
  const { t } = props;
  const close = () => {
    requestAppearance(null);
  };
  const pending = pendingDeleteId === null ? void 0 : props.tags.find((tag) => tag.id === pendingDeleteId);
  const usedBy = pendingDeleteId === null ? 0 : Object.values(props.sessionTags).filter((id) => id === pendingDeleteId).length;
  const pendingName = pending === void 0 ? "" : tagName(pending, t);
  const dismissDelete = () => {
    setPendingDeleteId(null);
  };
  const confirmDelete = () => {
    if (pendingDeleteId !== null) props.onDeleteTag(pendingDeleteId);
    setPendingDeleteId(null);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    request !== null && request.kind === "workspace-icon" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WorkspaceIconPicker, { request, close, ...props }, request.workspaceId),
    request !== null && request.kind === "session-tag" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      SessionTagPicker,
      {
        request,
        close,
        ...props,
        onDeleteRequest: (tagId) => {
          close();
          setPendingDeleteId(tagId);
        }
      },
      request.sessionId
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_dsh_client_ui_primitives.Modal,
      {
        open: pending !== void 0,
        onClose: dismissDelete,
        title: t("appearance.tag.deleteTitle"),
        description: pending === void 0 ? "" : usedBy === 0 ? t("appearance.tag.deleteBodyNone", { name: pendingName }) : t("appearance.tag.deleteBody", { name: pendingName, count: usedBy }),
        closeLabel: t("appearance.cancel"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: AppearanceDialogs_default.textButton, onClick: dismissDelete, "data-modal-autofocus": true, children: t("appearance.cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: clsx_default(AppearanceDialogs_default.primaryButton, AppearanceDialogs_default.dangerPrimary),
              onClick: confirmDelete,
              children: t("appearance.tag.confirm")
            }
          )
        ] })
      }
    )
  ] });
}
function rowKeyOf(request) {
  return request.kind === "workspace-icon" ? `workspace:${request.workspaceId}` : `session:${request.sessionId}`;
}
function tagName(tag, t) {
  return tag.name.trim() === "" ? t("appearance.color." + tag.color) : tag.name;
}
function rowRectOf(key) {
  const row = document.querySelector(`[data-row-key="${CSS.escape(key)}"]`);
  if (row === null) return null;
  const rect = row.getBoundingClientRect();
  return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom };
}
function PickerPopover({ request, title, close, children }) {
  const panelRef = React.useRef(null);
  const [position, setPosition] = React.useState(null);
  const closeRef = React.useRef(close);
  closeRef.current = close;
  const placeRef = React.useRef(() => {
  });
  const rowKey = rowKeyOf(request);
  React.useLayoutEffect(() => {
    const panel = panelRef.current;
    if (panel === null) return;
    const place = () => {
      const width = panel.offsetWidth;
      const height = panel.offsetHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const live = rowRectOf(rowKey);
      if (live === null && request.anchor === void 0) {
        closeRef.current();
        return;
      }
      const anchor = live ?? request.anchor;
      let left = anchor === void 0 ? viewportWidth / 2 - width / 2 : anchor.right + ANCHOR_GAP;
      let top = anchor === void 0 ? viewportHeight / 3 : anchor.top;
      if (left + width > viewportWidth - VIEWPORT_MARGIN) {
        left = anchor === void 0 ? viewportWidth - width - VIEWPORT_MARGIN : anchor.left - ANCHOR_GAP - width;
      }
      left = Math.max(VIEWPORT_MARGIN, Math.min(left, viewportWidth - width - VIEWPORT_MARGIN));
      top = Math.max(VIEWPORT_MARGIN, Math.min(top, viewportHeight - height - VIEWPORT_MARGIN));
      setPosition((previous) => previous !== null && previous.left === left && previous.top === top ? previous : { left, top });
    };
    placeRef.current = place;
    place();
    const observer = new ResizeObserver(place);
    observer.observe(panel);
    return () => {
      observer.disconnect();
    };
  }, [request, rowKey]);
  React.useEffect(() => {
    panelRef.current?.focus();
    const onPointerDown = (event) => {
      if (panelRef.current?.contains(event.target) === true) return;
      closeRef.current();
    };
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      closeRef.current();
    };
    const onScroll = () => {
      placeRef.current();
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        ref: panelRef,
        role: "dialog",
        "aria-label": title,
        tabIndex: -1,
        className: AppearanceDialogs_default.panel,
        style: {
          left: position?.left ?? 0,
          top: position?.top ?? 0,
          visibility: position === null ? "hidden" : "visible"
        },
        children
      }
    ),
    document.body
  );
}
function Head({ title, scope }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: AppearanceDialogs_default.head, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.headTitle, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.headScope, title: scope, children: scope })
  ] });
}
function WorkspaceIconPicker({ request, close, t, workspaceIcons, onWorkspaceIcon }) {
  const [face, setFace] = React.useState("emoji");
  const [query, setQuery] = React.useState("");
  const current2 = parseIconSpec(workspaceIcons[request.workspaceId]);
  const pick2 = (spec) => {
    onWorkspaceIcon(request.workspaceId, formatIconSpec(spec));
  };
  const matches = query.trim() === "" ? null : searchIcons(query);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(PickerPopover, { request, title: t("appearance.icon.title"), close, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Head, { title: t("appearance.icon.title"), scope: request.displayTitle }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: AppearanceDialogs_default.toolbar, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: AppearanceDialogs_default.tabs, role: "group", "aria-label": t("appearance.icon.title"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", "aria-pressed": face === "emoji", className: clsx_default(AppearanceDialogs_default.tab, face === "emoji" && AppearanceDialogs_default.tabOn), onClick: () => {
          setFace("emoji");
        }, children: t("appearance.tab.emoji") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", "aria-pressed": face === "icon", className: clsx_default(AppearanceDialogs_default.tab, face === "icon" && AppearanceDialogs_default.tabOn), onClick: () => {
          setFace("icon");
        }, children: t("appearance.tab.icon") })
      ] }),
      face === "icon" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          className: AppearanceDialogs_default.search,
          value: query,
          placeholder: t("appearance.search"),
          "aria-label": t("appearance.search"),
          onChange: (event) => {
            setQuery(event.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: AppearanceDialogs_default.scroll, children: [
      face === "emoji" && EMOJI_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: AppearanceDialogs_default.groupLabel, children: t("appearance.group." + group.id) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: AppearanceDialogs_default.grid, children: group.emojis.map((emoji) => {
          const on = current2?.kind === "emoji" && current2.value === emoji;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: clsx_default(AppearanceDialogs_default.cell, on && AppearanceDialogs_default.cellOn),
              "aria-pressed": on,
              "aria-label": emoji,
              onClick: () => {
                pick2({ kind: "emoji", value: emoji });
              },
              children: emoji
            },
            emoji
          );
        }) })
      ] }, group.id)),
      face === "icon" && matches !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("section", { children: matches.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: AppearanceDialogs_default.empty, children: t("appearance.noMatches") }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: AppearanceDialogs_default.grid, children: matches.map((name2) => {
        const on = current2?.kind === "icon" && current2.value === name2;
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: clsx_default(AppearanceDialogs_default.cell, on && AppearanceDialogs_default.cellOn),
            "aria-pressed": on,
            "aria-label": name2,
            title: name2,
            onClick: () => {
              pick2({ kind: "icon", value: name2 });
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AppearanceIcon, { spec: { kind: "icon", value: name2 }, size: 18 })
          },
          name2
        );
      }) }) }),
      face === "icon" && matches === null && ICON_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: AppearanceDialogs_default.groupLabel, children: t("appearance.group." + group.id) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: AppearanceDialogs_default.grid, children: group.icons.map((name2) => {
          const on = current2?.kind === "icon" && current2.value === name2;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: clsx_default(AppearanceDialogs_default.cell, on && AppearanceDialogs_default.cellOn),
              "aria-pressed": on,
              "aria-label": name2,
              title: name2,
              onClick: () => {
                pick2({ kind: "icon", value: name2 });
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AppearanceIcon, { spec: { kind: "icon", value: name2 }, size: 18 })
            },
            name2
          );
        }) })
      ] }, group.id))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: AppearanceDialogs_default.footer, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: AppearanceDialogs_default.textButton, onClick: () => {
        onWorkspaceIcon(request.workspaceId, null);
      }, children: t("appearance.reset") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.currentGlyph, "aria-hidden": true, children: current2 === null ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives.IconFolderOpenRegular, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AppearanceIcon, { spec: current2, size: 14 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: AppearanceDialogs_default.primaryButton, onClick: close, children: t("appearance.done") })
    ] })
  ] });
}
function SessionTagPicker({ request, close, t, tags, sessionTags, onAssignTag, onCreateTag, onUpdateTag, onDeleteRequest }) {
  const currentId = sessionTags[request.sessionId];
  const current2 = currentId === void 0 ? void 0 : tags.find((tag) => tag.id === currentId);
  const [editId, setEditId] = React.useState(current2?.id ?? null);
  const target = editId === null ? void 0 : tags.find((tag) => tag.id === editId);
  const [name2, setName] = React.useState(current2 === void 0 ? "" : tagName(current2, t));
  const [color, setColor] = React.useState(current2?.color ?? "blue");
  const nameRef = React.useRef(null);
  const [focusRequest, setFocusRequest] = React.useState(0);
  const assign = (tag) => {
    onAssignTag(request.sessionId, tag.id);
    close();
  };
  const startEdit = (tag) => {
    setEditId(tag.id);
    setName(tagName(tag, t));
    setColor(tag.color);
    setFocusRequest((request2) => request2 + 1);
  };
  const startCreate = () => {
    setEditId(null);
    setName("");
    setColor("blue");
    setFocusRequest((request2) => request2 + 1);
  };
  React.useEffect(() => {
    if (focusRequest === 0) return;
    const input = nameRef.current;
    if (input === null) return;
    input.focus();
    input.select();
    input.scrollIntoView({ block: "nearest" });
  }, [focusRequest]);
  const pickColor = (id) => {
    setColor(id);
    if (target !== void 0) onUpdateTag(target.id, target.name, id);
  };
  const commit = () => {
    const trimmed = name2.trim();
    if (target !== void 0) {
      const untouchedFallback = target.name.trim() === "" && trimmed === tagName(target, t);
      onUpdateTag(target.id, untouchedFallback || trimmed === "" ? target.name : trimmed, color);
    } else onCreateTag(request.sessionId, trimmed, color);
    close();
  };
  const clear = () => {
    onAssignTag(request.sessionId, null);
    close();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(PickerPopover, { request, title: t("appearance.color.title"), close, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Head, { title: t("appearance.color.title"), scope: request.displayTitle }),
    tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: AppearanceDialogs_default.tagRows, role: "group", "aria-label": t("appearance.color.title"), children: tags.map((tag) => {
      const on = tag.id === currentId;
      const label = tagName(tag, t);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: clsx_default(AppearanceDialogs_default.tagRow, on && AppearanceDialogs_default.tagRowOn, editId === tag.id && AppearanceDialogs_default.tagRowEditing), children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            className: AppearanceDialogs_default.tagRowMain,
            "aria-pressed": on,
            title: label,
            onClick: () => {
              assign(tag);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.tagRowDot, style: { backgroundColor: sessionColorHex(tag.color) }, "aria-hidden": true }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.tagRowLabel, children: label })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: AppearanceDialogs_default.tagRowAction,
            "aria-label": t("appearance.tag.edit") + ": " + label,
            title: t("appearance.tag.edit"),
            onClick: () => {
              startEdit(tag);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives.IconEditOutlineRegular, { size: 13 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: clsx_default(AppearanceDialogs_default.tagRowAction, AppearanceDialogs_default.tagRowDanger),
            "aria-label": t("appearance.tag.delete") + ": " + label,
            title: t("appearance.tag.delete"),
            onClick: () => {
              onDeleteRequest(tag.id);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives.IconCloseOutlineRegular, { size: 13 })
          }
        )
      ] }, tag.id);
    }) }),
    editId !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: AppearanceDialogs_default.tagRowNew, onClick: startCreate, children: [
      "+ ",
      t("appearance.tag.new")
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: AppearanceDialogs_default.editorLabel, children: target === void 0 ? t("appearance.tag.new") : t("appearance.tag.editing", { name: tagName(target, t) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: AppearanceDialogs_default.swatches, children: SESSION_COLORS.map((option) => {
      const on = color === option.id;
      const label = t("appearance.color." + option.id);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          className: clsx_default(AppearanceDialogs_default.swatchButton, on && AppearanceDialogs_default.swatchOn),
          "aria-pressed": on,
          "aria-label": label,
          title: label,
          onClick: () => {
            pickColor(option.id);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.swatch, style: { backgroundColor: option.hex }, "aria-hidden": true })
        },
        option.id
      );
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: AppearanceDialogs_default.nameRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.nameLabel, children: t("appearance.tag.name") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          ref: nameRef,
          className: AppearanceDialogs_default.nameInput,
          value: name2,
          maxLength: MAX_TAG_NAME,
          placeholder: t("appearance.tag.placeholder"),
          "aria-label": t("appearance.tag.name"),
          onChange: (event) => {
            setName(event.currentTarget.value);
          },
          onKeyDown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              commit();
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: AppearanceDialogs_default.footer, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: AppearanceDialogs_default.textButton, onClick: clear, children: t("appearance.noColor") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.currentGlyph, "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: AppearanceDialogs_default.swatch, style: { backgroundColor: sessionColorHex(color) } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: AppearanceDialogs_default.primaryButton, onClick: commit, children: target === void 0 ? t("appearance.tag.create") : t("appearance.tag.save") })
    ] })
  ] });
}

// src/browser/rows/WorkspaceDialogs.tsx
var import_react = require("react");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/browser/rows/WorkspaceBrowser.module.css
var WorkspaceBrowser_default = {
  root: "WorkspaceBrowser_root",
  rail: "WorkspaceBrowser_rail",
  searchExpanded: "WorkspaceBrowser_searchExpanded",
  iconButton: "WorkspaceBrowser_iconButton",
  searchButton: "WorkspaceBrowser_searchButton",
  clearButton: "WorkspaceBrowser_clearButton",
  viewOptionsMenu: "WorkspaceBrowser_viewOptionsMenu",
  textScaleRow: "WorkspaceBrowser_textScaleRow",
  textScaleLabel: "WorkspaceBrowser_textScaleLabel",
  textScaleTrack: "WorkspaceBrowser_textScaleTrack",
  textScaleOption: "WorkspaceBrowser_textScaleOption",
  textScaleOptionOn: "WorkspaceBrowser_textScaleOptionOn",
  sectionHeader: "WorkspaceBrowser_sectionHeader",
  searchSpacingMotion: "WorkspaceBrowser_searchSpacingMotion",
  sectionLabel: "WorkspaceBrowser_sectionLabel",
  sectionLabelHidden: "WorkspaceBrowser_sectionLabelHidden",
  searchSlot: "WorkspaceBrowser_searchSlot",
  searchSlotExpanded: "WorkspaceBrowser_searchSlotExpanded",
  headerActions: "WorkspaceBrowser_headerActions",
  headerActionsHidden: "WorkspaceBrowser_headerActionsHidden",
  search: "WorkspaceBrowser_search",
  searchInput: "WorkspaceBrowser_searchInput",
  statusTabs: "WorkspaceBrowser_statusTabs",
  statusTab: "WorkspaceBrowser_statusTab",
  statusTabActive: "WorkspaceBrowser_statusTabActive",
  statusTabCount: "WorkspaceBrowser_statusTabCount",
  listArea: "WorkspaceBrowser_listArea",
  treeBody: "WorkspaceBrowser_treeBody",
  wide: "WorkspaceBrowser_wide",
  "wide-in": "WorkspaceBrowser_wide-in",
  list: "WorkspaceBrowser_list",
  flatList: "WorkspaceBrowser_flatList",
  searchTree: "WorkspaceBrowser_searchTree",
  groupSection: "WorkspaceBrowser_groupSection",
  searchStatus: "WorkspaceBrowser_searchStatus",
  skeletonRow: "WorkspaceBrowser_skeletonRow",
  skeletonDot: "WorkspaceBrowser_skeletonDot",
  skeletonBars: "WorkspaceBrowser_skeletonBars",
  skeletonBar: "WorkspaceBrowser_skeletonBar",
  "search-skeleton": "WorkspaceBrowser_search-skeleton",
  skeletonBarWide: "WorkspaceBrowser_skeletonBarWide",
  listTopDropIndicator: "WorkspaceBrowser_listTopDropIndicator",
  workspaceDropBefore: "WorkspaceBrowser_workspaceDropBefore",
  workspaceDropAfter: "WorkspaceBrowser_workspaceDropAfter",
  listTopDropActive: "WorkspaceBrowser_listTopDropActive",
  sessionOverflowButton: "WorkspaceBrowser_sessionOverflowButton",
  empty: "WorkspaceBrowser_empty",
  emptyState: "WorkspaceBrowser_emptyState",
  emptyAction: "WorkspaceBrowser_emptyAction",
  renameInput: "WorkspaceBrowser_renameInput",
  renameError: "WorkspaceBrowser_renameError",
  deleteAction: "WorkspaceBrowser_deleteAction",
  deleteStatus: "WorkspaceBrowser_deleteStatus",
  archiveActivity: "WorkspaceBrowser_archiveActivity"
};

// src/browser/rows/WorkspaceDialogs.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function WorkspaceDialogs({ request, workspaces, renameWorkspace, deleteWorkspace, settleWorkspaceAction, t }) {
  const composingRef = (0, import_react.useRef)(false);
  const renameTarget = request.action === "rename" ? request : null;
  const [renameDraft, setRenameDraft] = (0, import_react.useState)(request.displayTitle);
  const [renaming, setRenaming] = (0, import_react.useState)(false);
  const [renameError, setRenameError] = (0, import_react.useState)(null);
  const renameTrimmed = renameDraft.trim();
  const renameDuplicate = renameTarget !== null && renameTrimmed !== "" && workspaces.some((w) => w.workspaceId !== renameTarget.workspaceId && w.title === renameTrimmed);
  const renameBlocked = renaming || renameTrimmed === "" || renameTarget === null || renameTrimmed === renameTarget.storedTitle || renameDuplicate;
  const closeRename = () => {
    if (renaming) return;
    settleWorkspaceAction();
    setRenameError(null);
  };
  const confirmRename = () => {
    if (renameBlocked) return;
    setRenaming(true);
    setRenameError(null);
    renameWorkspace(renameTarget.workspaceId, renameTrimmed).then(() => {
      setRenaming(false);
      settleWorkspaceAction();
    }).catch((reason) => {
      setRenaming(false);
      setRenameError(reason instanceof Error ? reason.message : String(reason));
    });
  };
  const deleteTarget = request.action === "delete" ? request : null;
  const [deleting, setDeleting] = (0, import_react.useState)(false);
  const [deleteCommittedId, setDeleteCommittedId] = (0, import_react.useState)(null);
  const [deleteError, setDeleteError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (deleteCommittedId === null || workspaces.some((workspace) => workspace.workspaceId === deleteCommittedId)) return;
    setDeleting(false);
    setDeleteCommittedId(null);
    settleWorkspaceAction();
  }, [deleteCommittedId, workspaces, settleWorkspaceAction]);
  const closeDelete = () => {
    if (deleting) return;
    settleWorkspaceAction();
    setDeleteError(null);
  };
  const confirmDelete = () => {
    if (deleting || deleteTarget === null) return;
    setDeleting(true);
    setDeleteCommittedId(null);
    setDeleteError(null);
    deleteWorkspace(deleteTarget.workspaceId).then(() => {
      setDeleteCommittedId(deleteTarget.workspaceId);
    }).catch((reason) => {
      setDeleting(false);
      setDeleteError(reason instanceof Error ? reason.message : String(reason));
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_dsh_client_ui_primitives2.Modal,
      {
        open: renameTarget !== null,
        onClose: closeRename,
        closeLabel: t("close"),
        title: t("rename.workspace.title"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.Button, { variant: "outline", disabled: renaming, onClick: closeRename, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.Button, { variant: "primary", disabled: renameBlocked, onClick: confirmRename, children: t("rename") })
        ] }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              className: WorkspaceBrowser_default.renameInput,
              value: renameDraft,
              "aria-label": t("field.workspaceName"),
              "data-modal-autofocus": true,
              disabled: renaming,
              onFocus: (e) => {
                e.target.select();
              },
              onChange: (e) => {
                setRenameDraft(e.target.value);
                setRenameError(null);
              },
              onCompositionStart: () => {
                composingRef.current = true;
              },
              onCompositionEnd: () => {
                composingRef.current = false;
              },
              onKeyDown: (e) => {
                if (e.key === "Enter" && !composingRef.current) {
                  e.preventDefault();
                  confirmRename();
                }
              }
            }
          ),
          renameDuplicate && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: t("conflict.named", { name: renameTrimmed }) }),
          renameError !== null && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: renameError })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_dsh_client_ui_primitives2.Modal,
      {
        open: deleteTarget !== null,
        onClose: closeDelete,
        closeLabel: t("close"),
        title: t("delete.workspace"),
        ...deleteTarget === null ? {} : { description: t("delete.desc", { name: deleteTarget.displayTitle }) },
        footer: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.Button, { variant: "outline", disabled: deleting, onClick: closeDelete, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_dsh_client_ui_primitives2.Button,
            {
              variant: "outline",
              className: WorkspaceBrowser_default.deleteAction,
              disabled: deleting,
              onClick: confirmDelete,
              children: t("delete.workspace")
            }
          )
        ] }),
        children: [
          deleting && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: WorkspaceBrowser_default.deleteStatus, role: "status", children: t("delete.pending") }),
          deleteError !== null && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: deleteError })
        ]
      }
    )
  ] });
}

// src/browser/rows/WorkspaceBrowser.tsx
var import_dsh_client_ui_primitives5 = require("@deepseek-ai/dsh-client-ui-primitives");

// ../sidebar-view/node_modules/@deepseek-ai/dsh-api-workspace-controller/lib/types/default-workspace.js
var DEFAULT_WORKSPACE_DIRECTORY = "default-workspace";
function workspaceDisplayTitle(title, localizedDefault) {
  return title === DEFAULT_WORKSPACE_DIRECTORY ? localizedDefault : title;
}

// ../sidebar-view/node_modules/@deepseek-ai/dsh-util-values/lib/index.js
var SIMPLE_ESCAPES = {
  '"': '"',
  "\\": "\\",
  "/": "/",
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "	"
};
var CONTENT_ESCAPE = /[\\\u0000-\u001f]/u;
function isWhitespace(c) {
  return c === " " || c === "\n" || c === "\r" || c === "	";
}
function isHex(c) {
  return c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F";
}
var PartialArguments = class PartialArguments2 {
  /** The view of a call with no arguments available. */
  static EMPTY = PartialArguments2.fromObject({});
  /**
  * View finished argument text without scanning it until a reader asks.
  * @param text - the complete argument JSON text.
  * @returns a sealed view.
  */
  static fromText(text) {
    const view = new PartialArguments2();
    view.append(text);
    view.sealed = true;
    return view;
  }
  /**
  * View an already parsed argument payload, such as a PTC dispatch object.
  * @param value - the parsed argument value.
  * @returns a sealed view; a non-object payload has no fields.
  */
  static fromObject(value) {
    const view = new PartialArguments2();
    view.object = typeof value === "object" && value !== null && !Array.isArray(value) ? value : {};
    view.sealed = true;
    return view;
  }
  /**
  * The source: text so far or a parsed object, plus whether it can still grow.
  * These are the only enumerable fields, so two views over the same source
  * compare equal structurally however far each has been read.
  */
  chunks = [];
  object;
  sealed = false;
  #ends = [];
  #size = 0;
  #consumed = 0;
  #mode = "root";
  #escape = false;
  #keyStart = 0;
  #keyEscaped = false;
  #key = "";
  #current = null;
  #nestedEnds = [];
  #nestedInString = false;
  #invalidAt;
  #invalidValue = false;
  #entries = /* @__PURE__ */ new Map();
  #order = [];
  #reads = /* @__PURE__ */ new Map();
  /** Whether this view rejects further appends; does not scan text or register reads. */
  get isSealed() {
    return this.sealed;
  }
  /** Whether indexing or a content read found invalid JSON; unread value contents are not validated. */
  get invalid() {
    this.scan();
    return this.#mode === "invalid" || this.#invalidValue;
  }
  /**
  * Retain streamed argument text without scanning or comparing observed answers.
  * @param fragment - the text following every fragment appended before.
  */
  append(fragment) {
    if (this.sealed) throw new Error("PartialArguments: cannot append to a sealed view");
    if (fragment.length === 0) return;
    this.chunks.push(fragment);
    this.#size += fragment.length;
    this.#ends.push(this.#size);
  }
  /**
  * Reconcile a streamed prefix with authoritative complete text without joining the fragments.
  * @param text - the final argument text, which replaces missing or conflicting deltas.
  * @returns this view sealed with its caches retained when every character matches; otherwise a new sealed view.
  */
  settle(text) {
    if (this.object !== void 0 || text.length !== this.#size) return PartialArguments2.fromText(text);
    let offset = 0;
    for (const chunk of this.chunks) {
      if (!text.startsWith(chunk, offset)) return PartialArguments2.fromText(text);
      offset += chunk.length;
    }
    this.chunks = text.length === 0 ? [] : [text];
    this.#ends = text.length === 0 ? [] : [text.length];
    this.sealed = true;
    return this;
  }
  /**
  * Compare observed answers and advance their publication baseline. Unread views remain unscanned.
  * @returns whether any observed answer changed since its first read or the preceding refresh.
  */
  refresh() {
    if (this.#reads.size === 0) return false;
    this.scan();
    let changed = false;
    let completions = false;
    for (const read of this.#reads.values()) {
      if (read.completion) {
        completions = true;
        continue;
      }
      changed = this.refreshRead(read) || changed;
    }
    if (completions) {
      for (const read of this.#reads.values()) if (read.completion) changed = this.refreshRead(read) || changed;
    }
    if (this.sealed) this.#reads.clear();
    return changed;
  }
  refreshRead(read) {
    const now = read.answer();
    if (Object.is(now, read.last)) return false;
    read.last = now;
    return true;
  }
  /**
  * Check whether no further fields can arrive.
  * @returns whether the outer object closed, indexing failed, or the view is sealed; unread values are not validated.
  */
  closed() {
    return this.remember("closed", "", () => this.closedNow());
  }
  /**
  * List discovered fields in first-appearance order.
  * @returns top-level keys seen so far, in first-appearance order.
  */
  keys() {
    return this.remember("keys", "", () => this.keysNow(), (keys) => keys.length);
  }
  /**
  * Check whether a top-level field has appeared.
  * @param key - argument name.
  * @returns whether the field has appeared (a string opened or another value began).
  */
  has(key) {
    return this.remember("has", key, () => this.hasNow(key));
  }
  /**
  * Check whether a field's closing delimiter has arrived, without validating its contents.
  * @param key - argument name.
  * @returns whether its delimiter arrived and no content reader has reported an error for this value.
  */
  complete(key) {
    return this.remember("complete", key, () => this.completeNow(key));
  }
  /**
  * Read string length without materializing its text.
  * @param key - argument name.
  * @param options - change granularity for a streaming string.
  * @returns decoded UTF-16 length of the string field so far; undefined when absent or not a string.
  */
  stringLength(key, options) {
    const step = Math.max(1, Math.floor(options?.step ?? 1));
    const offset = options?.offset ?? 0;
    return this.remember(`length:${step}:${offset}`, key, () => this.lengthNow(key), (length) => length === void 0 ? void 0 : Math.ceil((length + offset) / step));
  }
  /**
  * Check a string against a decoded UTF-16 length limit without materializing it.
  * @param key - argument name.
  * @param maxLength - decoded UTF-16 limit, floored to at least zero.
  * @returns whether the string is longer than the limit; false when absent or not a string.
  */
  stringExceeds(key, maxLength) {
    const limit = Math.max(0, Math.floor(maxLength));
    return this.remember(`exceeds:${limit}`, key, () => (this.lengthNow(key, limit + 1) ?? 0) > limit);
  }
  /**
  * Read a decoded string, including a streaming prefix.
  * @param key - argument name.
  * @returns the string field's decoded text so far; undefined when absent or not a string.
  */
  text(key) {
    return this.remember("text", key, () => this.textNow(key));
  }
  /**
  * Read at most the first decoded UTF-16 units of a string.
  * @param key - argument name.
  * @param maxLength - maximum decoded UTF-16 length, floored to at least one.
  * @returns the bounded string prefix; undefined when absent or not a string.
  */
  textPrefix(key, maxLength) {
    const limit = Math.max(1, Math.floor(maxLength));
    return this.remember(`prefix:${limit}`, key, () => this.textPrefixNow(key, limit));
  }
  /**
  * Read a completed non-string argument.
  * @param key - argument name.
  * @returns the parsed non-string value once it closed; undefined while open, absent, or a string.
  */
  value(key) {
    return this.remember("value", key, () => this.valueNow(key));
  }
  /** Answer a question and, on a streaming view, remember it for change detection. */
  remember(kind, key, read, comparison) {
    this.scan();
    const result = read();
    if (!this.sealed) {
      const id = `${kind}/${key}`;
      if (!this.#reads.has(id)) this.#reads.set(id, {
        completion: kind === "complete",
        answer: comparison === void 0 ? read : () => comparison(read()),
        last: comparison === void 0 ? result : comparison(result)
      });
    }
    return result;
  }
  closedNow() {
    return this.sealed || this.#mode === "closed" || this.#mode === "invalid";
  }
  keysNow() {
    return this.object === void 0 ? this.#order : Object.keys(this.object);
  }
  hasNow(key) {
    return this.object === void 0 ? this.#entries.has(key) : Object.hasOwn(this.object, key);
  }
  completeNow(key) {
    if (this.object !== void 0) return Object.hasOwn(this.object, key);
    const entry = this.#entries.get(key);
    return entry !== void 0 && entry.end >= 0 && (entry.kind === "string" ? entry.invalidAt === void 0 : !entry.invalid);
  }
  lengthNow(key, limit = Number.POSITIVE_INFINITY) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field.length : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    if (entry.text !== void 0 && entry.text.at === entry.end) return entry.text.length;
    const read = entry.length ??= {
      at: entry.start,
      length: 0,
      text: ""
    };
    this.readString(entry, read, limit, false);
    return read.length;
  }
  textNow(key) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    if (entry.text === void 0 && entry.end >= 0 && entry.needsDecoding && entry.invalidAt === void 0) {
      let text;
      try {
        text = JSON.parse(`"${this.slice(entry.start, entry.end)}"`);
      } catch (_error) {
      }
      if (text !== void 0) entry.text = {
        at: entry.end,
        length: text.length,
        text
      };
    }
    const read = entry.text ??= {
      at: entry.start,
      length: 0,
      text: ""
    };
    this.readString(entry, read, Number.POSITIVE_INFINITY, true);
    return read.text;
  }
  textPrefixNow(key, maxLength) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field.slice(0, maxLength) : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    const prefixes = entry.prefixes ??= /* @__PURE__ */ new Map();
    let read = prefixes.get(maxLength);
    if (read === void 0) {
      read = {
        at: entry.start,
        length: 0,
        text: ""
      };
      prefixes.set(maxLength, read);
    }
    this.readString(entry, read, maxLength, true);
    return read.text;
  }
  valueNow(key) {
    if (this.object !== void 0) {
      if (!Object.hasOwn(this.object, key)) return void 0;
      const field = this.object[key];
      return typeof field === "string" ? void 0 : field;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "value" || entry.end < 0 || entry.invalid) return void 0;
    if (entry.parsed === void 0) try {
      entry.parsed = JSON.parse(this.slice(entry.start, entry.end));
    } catch (_error) {
      entry.invalid = true;
      this.#invalidValue = true;
    }
    return entry.parsed;
  }
  chunkAt(at) {
    let low = 0;
    let high = this.#ends.length;
    while (low < high) {
      const mid = low + high >>> 1;
      if (this.#ends[mid] <= at) low = mid + 1;
      else high = mid;
    }
    return low;
  }
  /** Materialize only a requested range, never the cumulative source. */
  slice(start, end) {
    if (start >= end) return "";
    const first = this.chunkAt(start);
    const last = this.chunkAt(end - 1);
    const base = first === 0 ? 0 : this.#ends[first - 1];
    if (first === last) return this.chunks[first].slice(start - base, end - base);
    const parts = [this.chunks[first].slice(start - base)];
    for (let i = first + 1; i < last; i++) parts.push(this.chunks[i]);
    parts.push(this.chunks[last].slice(0, end - this.#ends[last - 1]));
    return parts.join("");
  }
  readString(entry, read, limit, materialize) {
    const end = Math.min(entry.end < 0 ? this.#consumed : entry.end, entry.invalidAt ?? Number.POSITIVE_INFINITY, this.#invalidAt ?? Number.POSITIVE_INFINITY);
    if (!entry.needsDecoding) {
      const length = Math.min(end - read.at, limit - read.length);
      if (length <= 0) return;
      if (materialize) read.text += this.slice(read.at, read.at + length);
      read.at += length;
      read.length += length;
      return;
    }
    let chunkIndex = this.chunkAt(read.at);
    while (read.at < end && read.length < limit) {
      const base = chunkIndex === 0 ? 0 : this.#ends[chunkIndex - 1];
      const chunk = this.chunks[chunkIndex];
      const remaining = chunk.slice(read.at - base, Math.min(chunk.length, end - base));
      const boundary = remaining.search(CONTENT_ESCAPE);
      const length = Math.min(boundary < 0 ? remaining.length : boundary, limit - read.length);
      if (length > 0) {
        if (materialize) read.text += remaining.slice(0, length);
        read.at += length;
        read.length += length;
        if (read.at === base + chunk.length) chunkIndex++;
        continue;
      }
      const type = remaining.length > 1 ? remaining[1] : read.at + 1 < end ? this.chunks[chunkIndex + 1][0] : void 0;
      let decoded;
      let width = 2;
      if (remaining[0] === "\\" && type === void 0 && entry.end < 0) return;
      if (remaining[0] === "\\" && type === "u") {
        const hex = this.slice(read.at + 2, Math.min(end, read.at + 6));
        let valid = true;
        for (let i = 0; i < hex.length; i++) if (!isHex(hex[i])) valid = false;
        if (valid) {
          if (hex.length < 4 && entry.end < 0) return;
          if (hex.length === 4) decoded = String.fromCharCode(Number.parseInt(hex, 16));
        }
        width = 6;
      } else if (remaining[0] === "\\" && type !== void 0) decoded = SIMPLE_ESCAPES[type];
      if (decoded === void 0) {
        entry.invalidAt = read.at;
        this.#invalidValue = true;
        return;
      }
      if (materialize) read.text += decoded;
      read.length++;
      read.at += width;
      while (chunkIndex < this.chunks.length && read.at >= this.#ends[chunkIndex]) chunkIndex++;
    }
  }
  /** Locate new field ranges without decoding or parsing their contents. */
  scan() {
    if (this.object !== void 0 || this.#consumed === this.#size) return;
    for (let i = this.chunkAt(this.#consumed); i < this.chunks.length && this.#invalidAt === void 0; i++) {
      const pending = this.chunks[i];
      const base = i === 0 ? 0 : this.#ends[i - 1];
      for (let index = this.#consumed - base; index < pending.length && this.#mode !== "invalid"; index++) {
        if (this.#mode === "string" || this.#mode === "nested" && this.#nestedInString) {
          const end = this.stringBoundary(pending, index);
          this.#consumed += end - index;
          index = end;
          if (index === pending.length) break;
        }
        this.step(pending[index], this.#consumed);
        this.#consumed++;
      }
    }
  }
  /** Only raw quotes and their preceding backslash runs can terminate a string. */
  stringBoundary(fragment, start) {
    let at = start;
    while (true) {
      const quote = fragment.indexOf('"', at);
      const end = quote < 0 ? fragment.length : quote;
      if (this.#mode === "string") {
        const entry = this.#current;
        if (!entry.needsDecoding && CONTENT_ESCAPE.test(fragment.slice(at, end))) entry.needsDecoding = true;
      }
      let slashStart = end;
      while (slashStart > at && fragment[slashStart - 1] === "\\") slashStart--;
      const escaped = (end - slashStart) % 2 === 1 !== (slashStart === at && this.#escape);
      this.#escape = quote < 0 && escaped;
      if (quote < 0 || !escaped) return end;
      at = quote + 1;
    }
  }
  step(c, at) {
    switch (this.#mode) {
      case "root":
        if (isWhitespace(c)) return;
        if (c === "{") {
          this.#mode = "key-or-end";
          return;
        }
        this.fail();
        return;
      case "key-or-end":
        if (isWhitespace(c)) return;
        if (c === "}") {
          this.#mode = "closed";
          return;
        }
        if (c === '"') {
          this.beginKey(at);
          return;
        }
        this.fail();
        return;
      case "key-only":
        if (isWhitespace(c)) return;
        if (c === '"') {
          this.beginKey(at);
          return;
        }
        this.fail();
        return;
      case "key":
        this.stepKey(c, at);
        return;
      case "colon":
        if (isWhitespace(c)) return;
        if (c === ":") {
          this.#mode = "value";
          return;
        }
        this.fail();
        return;
      case "value":
        this.beginValue(c, at);
        return;
      case "string": {
        const entry = this.#current;
        entry.end = at;
        this.#current = null;
        this.#mode = "comma-or-end";
        return;
      }
      case "scalar":
        this.stepScalar(c, at);
        return;
      case "nested":
        this.stepNested(c, at);
        return;
      case "comma-or-end":
        if (isWhitespace(c)) return;
        if (c === ",") {
          this.#mode = "key-only";
          return;
        }
        if (c === "}") {
          this.#mode = "closed";
          return;
        }
        this.fail();
        return;
      case "closed":
        if (isWhitespace(c)) return;
        this.fail();
        return;
      /* v8 ignore next 2 -- scan() stops stepping once the view is invalid. */
      case "invalid":
        return;
      /* v8 ignore next 2 -- Every scanner mode has a handler above. */
      default:
        assertNever(this.#mode);
    }
  }
  fail() {
    this.#invalidAt = this.#consumed;
    this.#mode = "invalid";
    this.#current = null;
  }
  beginKey(at) {
    this.#mode = "key";
    this.#keyStart = at + 1;
    this.#keyEscaped = false;
    this.#escape = false;
  }
  stepKey(c, at) {
    if (c < " ") {
      this.fail();
      return;
    }
    if (this.#escape) {
      this.#escape = false;
      return;
    }
    if (c === "\\") {
      this.#escape = true;
      this.#keyEscaped = true;
      return;
    }
    if (c !== '"') return;
    const raw = this.slice(this.#keyStart, at);
    if (this.#keyEscaped) try {
      this.#key = JSON.parse(`"${raw}"`);
    } catch (_error) {
      this.fail();
      return;
    }
    else this.#key = raw;
    this.#mode = "colon";
  }
  open(entry) {
    if (!this.#entries.has(this.#key)) this.#order.push(this.#key);
    this.#entries.set(this.#key, entry);
    this.#current = entry;
  }
  beginValue(c, at) {
    if (isWhitespace(c)) return;
    if (c === '"') {
      this.open({
        kind: "string",
        start: at + 1,
        end: -1,
        needsDecoding: false,
        invalidAt: void 0,
        length: void 0,
        text: void 0,
        prefixes: void 0
      });
      this.#escape = false;
      this.#mode = "string";
      return;
    }
    if (c === "}" || c === "," || c === ":" || c === "]") {
      this.fail();
      return;
    }
    this.open({
      kind: "value",
      start: at,
      end: -1,
      parsed: void 0,
      invalid: false
    });
    if (c === "{" || c === "[") {
      this.#mode = "nested";
      this.#nestedEnds = [c === "{" ? "}" : "]"];
      this.#nestedInString = false;
      this.#escape = false;
      return;
    }
    this.#mode = "scalar";
  }
  stepScalar(c, at) {
    if (c !== "," && c !== "}" && !isWhitespace(c)) return;
    this.closeValue(at);
    this.#mode = c === "," ? "key-only" : c === "}" ? "closed" : "comma-or-end";
  }
  stepNested(c, at) {
    if (this.#nestedInString) {
      this.#nestedInString = false;
      return;
    }
    if (c === '"') {
      this.#nestedInString = true;
      return;
    }
    if (c === "{" || c === "[") {
      this.#nestedEnds.push(c === "{" ? "}" : "]");
      return;
    }
    if (c === "}" || c === "]") {
      if (this.#nestedEnds.pop() !== c) {
        this.fail();
        return;
      }
      if (this.#nestedEnds.length === 0) {
        this.closeValue(at + 1);
        this.#mode = "comma-or-end";
      }
    }
  }
  closeValue(end) {
    const entry = this.#current;
    entry.end = end;
    this.#current = null;
  }
};
function assertNever(value, context) {
  const rendered = JSON.stringify(value) ?? String(value);
  throw new Error(`unreachable variant${context ? ` in ${context}` : ""}: ${rendered}`);
}

// ../sidebar-view/node_modules/@deepseek-ai/dsh-util-workspace-path/lib/index.js
function isWindowsStylePath(value) {
  return /^[A-Za-z]:[/\\]/.test(value) || value.startsWith("\\\\");
}
function abbreviateHomePath(path, home) {
  if (home === void 0 || home === "") return path;
  if (isWindowsStylePath(path) || isWindowsStylePath(home)) return path;
  const root = home.replace(/\/+$/, "");
  if (root === "" || root === "/") return path;
  if (path.replace(/\/+$/, "") === root) return "~";
  if (path.startsWith(`${root}/`)) return `~${path.slice(root.length)}`;
  return path;
}
function workspaceTitleOf(path) {
  const trimmed = path.replace(/[/\\]+$/, "");
  const separator = Math.max(trimmed.lastIndexOf("/"), trimmed.lastIndexOf("\\"));
  return trimmed.slice(separator + 1);
}

// src/browser/tree.ts
var UNGROUPED_KEY = "";
function owningGroupKey(workspaces, sessionId) {
  return workspaces.find((workspace) => workspace.sessionIds.includes(sessionId))?.workspaceId ?? UNGROUPED_KEY;
}
function mainSessionId(list) {
  return Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
}
function matchesStatusFilter(node, filter) {
  switch (filter) {
    case "all":
      return true;
    case "running":
      return node.running || node.runningSubagentCount > 0;
    case "pending":
      return node.pendingInteraction !== void 0;
    case "unread":
      return node.completed;
    /* v8 ignore next 2 -- closed-union backstop; only reached if the filter is forged */
    default:
      return assertNever(filter);
  }
}
function workspaceLabel(cwd) {
  if (cwd === void 0 || cwd === "") return "";
  const base = workspaceTitleOf(cwd);
  return base !== "" ? base : cwd;
}
function orderByRecency(sessionIds, summaries) {
  return sessionIds.flatMap((id) => {
    const summary = summaries[id];
    if (summary === void 0) return [];
    return [{ id, rank: summary.updatedAt }];
  }).sort((a, b) => {
    if (a.rank !== b.rank) return b.rank - a.rank;
    return a.id < b.id ? -1 : 1;
  }).map((member) => member.id);
}
function reconcileManualOrder(memberIds, savedOrder, summaries, rowState) {
  const members = new Map(memberIds.map((id) => [id, id]));
  const included = /* @__PURE__ */ new Set();
  const ordered = [];
  for (const key of savedOrder ?? []) {
    const id = members.get(key);
    if (id === void 0 || included.has(key)) continue;
    ordered.push(id);
    included.add(key);
  }
  const archived = new Set(rowState?.archivedSessionIds);
  const pins = [];
  for (const sessionId of rowState?.pinnedSessionIds ?? []) {
    const id = members.get(sessionId);
    if (id === void 0 || included.has(id) || archived.has(id) || summaries[id] === void 0) continue;
    pins.push(id);
    included.add(id);
  }
  const ordinary = [];
  const archives = [];
  for (const id of orderByRecency([...members.values()].filter((id2) => !included.has(id2)), summaries)) {
    if (archived.has(id)) archives.push(id);
    else ordinary.push(id);
  }
  return [...pins, ...ordered, ...ordinary, ...archives];
}
function pinCurrentBlank(order, currentBlank) {
  if (currentBlank === void 0) return [...order];
  return [currentBlank, ...order.filter((id) => id !== currentBlank)];
}
function sessionVisible(session, current2, archived, archivedFilter) {
  if (session.origin === "subagent") return false;
  if (session.blank && session.id !== current2) return false;
  switch (archivedFilter) {
    case "default":
      return !archived.has(session.id);
    case "show":
      return true;
    case "only":
      return archived.has(session.id);
    /* v8 ignore next 2 -- closed-union backstop; only reached if the filter is forged */
    default:
      return assertNever(archivedFilter);
  }
}
function sectionMembers(members, pinned, archived) {
  const placeholders = [];
  const leading = [];
  const rest = [];
  for (const member of members) {
    if (member.blank) placeholders.push(member);
    else if (!archived.has(member.id) && pinned.has(member.id)) leading.push(member);
    else rest.push(member);
  }
  return [...placeholders, ...leading, ...rest];
}
function sessionTitle(session) {
  return session.blank ? "" : session.title?.trim() ?? "";
}
function buildGroup(key, workspaceId, cwd, createdAt, label, members) {
  return { key, workspaceId, cwd, createdAt, label, sessions: [...members] };
}
function orderedUngrouped(members, stored, summaries) {
  const byId = new Map(members.map((session) => [session.id, session]));
  const ids = stored === void 0 ? orderByRecency(members.map((session) => session.id), summaries) : reconcileManualOrder(members.map((session) => session.id), stored, summaries);
  return ids.flatMap((id) => {
    const session = byId.get(id);
    return session === void 0 ? [] : [session];
  });
}
function groupByWorkspace(list, workspaces, archived, archivedFilter, ungroupedOrder) {
  const current2 = mainSessionId(list);
  const groups = [];
  const accounted = /* @__PURE__ */ new Set();
  for (const workspace of workspaces) {
    const members = [];
    for (const id of workspace.sessionIds) {
      const summary = list.byId[id];
      if (summary === void 0) continue;
      accounted.add(id);
      if (!sessionVisible(summary, current2, archived, archivedFilter)) continue;
      members.push(summary);
    }
    if (archivedFilter === "only" && members.length === 0) continue;
    groups.push(buildGroup(
      workspace.workspaceId,
      workspace.workspaceId,
      workspace.path,
      Date.parse(workspace.createdAt),
      workspace.title,
      members
    ));
  }
  const stray = list.ids.map((id) => list.byId[id]).filter((s) => s !== void 0 && !accounted.has(s.id) && sessionVisible(s, current2, archived, archivedFilter));
  if (stray.length > 0) {
    groups.push(buildGroup(
      UNGROUPED_KEY,
      void 0,
      void 0,
      void 0,
      "",
      orderedUngrouped(stray, ungroupedOrder, list.byId)
    ));
  }
  return groups;
}
function visiblePendingKind(kind) {
  switch (kind) {
    case "approval":
    case "plan-review":
    case "question":
      return kind;
    default:
      return void 0;
  }
}
function runningChildCount(list, parentId, statuses) {
  return list.projectionsBySession[parentId]?.values.subagentCatalog?.reduce(
    (count, child) => count + ((statuses.get(child.id)?.running ?? list.byId[child.id]?.running) === true ? 1 : 0),
    0
  ) ?? 0;
}
function sessionNode(s, list, statuses, pinned, archived) {
  const status = statuses.get(s.id);
  const pendingInteraction = visiblePendingKind(status?.pendingInteraction?.kind);
  return {
    id: s.id,
    title: sessionTitle(s),
    blank: s.blank,
    running: status?.running ?? s.running,
    runningSubagentCount: runningChildCount(list, s.id, statuses),
    completed: status?.completionUnread === true,
    pinned: !archived.has(s.id) && pinned.has(s.id),
    archived: archived.has(s.id),
    updatedAt: s.updatedAt,
    ...s.cwd === void 0 || s.cwd === "" ? {} : { cwd: s.cwd },
    ...pendingInteraction === void 0 ? {} : { pendingInteraction }
  };
}
function deriveGroups(list, workspaces, rowState, statuses, view) {
  const archived = new Set(rowState.archivedSessionIds);
  const pinned = new Set(rowState.pinnedSessionIds);
  const expandedGroups = new Set(view.expandedGroups);
  const statusFilter = view.statusFilter ?? "all";
  const current2 = mainSessionId(list);
  const currentGroup = current2 === void 0 ? void 0 : owningGroupKey(workspaces, current2);
  const groups = [];
  for (const g of groupByWorkspace(list, workspaces, archived, rowState.archivedFilter, view.ungroupedOrder)) {
    const expanded = expandedGroups.has(g.key);
    const sessions = expanded ? sectionMembers(g.sessions, pinned, archived).map((session) => sessionNode(session, list, statuses, pinned, archived)).filter((node) => matchesStatusFilter(node, statusFilter)) : [];
    if (statusFilter !== "all" && sessions.length === 0) continue;
    groups.push({
      key: g.key,
      workspaceId: g.workspaceId,
      cwd: g.cwd,
      createdAt: g.createdAt,
      label: g.label,
      sessionCount: statusFilter === "all" ? g.sessions.length : sessions.length,
      expanded,
      containsCurrent: g.key === currentGroup,
      sessions
    });
  }
  return groups;
}
function sessionMemberIds(list) {
  return visibleSessionIds(list, [], "show");
}
function visibleSessionIds(list, archivedSessionIds, archivedFilter) {
  const archived = new Set(archivedSessionIds);
  const current2 = mainSessionId(list);
  return list.ids.filter((id) => {
    const s = list.byId[id];
    return s !== void 0 && sessionVisible(s, current2, archived, archivedFilter);
  });
}
function deriveFlat(list, sessionIds, rowState, statuses, statusFilter = "all") {
  const archived = new Set(rowState.archivedSessionIds);
  const pinned = new Set(rowState.pinnedSessionIds);
  const current2 = mainSessionId(list);
  const members = sessionIds.flatMap((id) => {
    const session = list.byId[id];
    return session !== void 0 && sessionVisible(session, current2, archived, rowState.archivedFilter) ? [session] : [];
  });
  return sectionMembers(members, pinned, archived).map((session) => sessionNode(session, list, statuses, pinned, archived)).filter((node) => matchesStatusFilter(node, statusFilter));
}
var TIME_BUCKET_ORDER = ["pinned", "today", "yesterday", "week", "earlier"];
function startOfLocalDay(now) {
  const day = new Date(now);
  day.setHours(0, 0, 0, 0);
  return day.getTime();
}
function shiftLocalDays(start, days) {
  const day = new Date(start);
  day.setDate(day.getDate() + days);
  return day.getTime();
}
function sessionTimeBucket(updatedAt, now) {
  const today = startOfLocalDay(now);
  if (updatedAt >= today) return "today";
  if (updatedAt >= shiftLocalDays(today, -1)) return "yesterday";
  const weekday = (new Date(now).getDay() + 6) % 7;
  if (updatedAt >= shiftLocalDays(today, -weekday)) return "week";
  return "earlier";
}
function deriveTimeGroups(list, sessionIds, rowState, statuses, view) {
  const rows = deriveFlat(list, sessionIds, rowState, statuses, view.statusFilter ?? "all");
  const byBucket = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const key = row.pinned ? "pinned" : row.blank ? "today" : sessionTimeBucket(row.updatedAt, view.now);
    const bucket = byBucket.get(key);
    if (bucket === void 0) byBucket.set(key, [row]);
    else bucket.push(row);
  }
  const expandedBuckets = view.expandedBuckets === void 0 ? void 0 : new Set(view.expandedBuckets);
  const groups = [];
  for (const key of TIME_BUCKET_ORDER) {
    const members = byBucket.get(key);
    if (members === void 0 || members.length === 0) continue;
    const expanded = expandedBuckets === void 0 || expandedBuckets.has(key);
    groups.push({
      key,
      sessionCount: members.length,
      expanded,
      sessions: expanded ? members : []
    });
  }
  return groups;
}
var UNTAGGED_TAG_KEY = "__untagged__";
function deriveTagGroups(list, sessionIds, rowState, statuses, view) {
  const rows = deriveFlat(list, sessionIds, rowState, statuses, view.statusFilter ?? "all");
  const known = new Map(view.tags.map((tag) => [tag.id, tag]));
  const byTag = /* @__PURE__ */ new Map();
  const untagged = [];
  for (const row of rows) {
    const tagId = view.sessionTags[row.id];
    if (tagId === void 0 || !known.has(tagId)) {
      untagged.push(row);
      continue;
    }
    const bucket = byTag.get(tagId);
    if (bucket === void 0) byTag.set(tagId, [row]);
    else bucket.push(row);
  }
  const expandedTags = view.expandedTags === void 0 ? void 0 : new Set(view.expandedTags);
  const isExpanded = (key) => expandedTags === void 0 || expandedTags.has(key);
  const groups = [];
  for (const tag of view.tags) {
    const members = byTag.get(tag.id);
    if (members === void 0 || members.length === 0) continue;
    const expanded = isExpanded(tag.id);
    groups.push({
      key: tag.id,
      tagId: tag.id,
      label: tag.name.trim() === "" ? view.colorLabel(tag.color) : tag.name,
      color: tag.color,
      sessionCount: members.length,
      expanded,
      sessions: expanded ? members : []
    });
  }
  if (untagged.length > 0) {
    const expanded = isExpanded(UNTAGGED_TAG_KEY);
    groups.push({
      key: UNTAGGED_TAG_KEY,
      tagId: null,
      label: view.untaggedLabel,
      sessionCount: untagged.length,
      expanded,
      sessions: expanded ? untagged : []
    });
  }
  return groups;
}
function deriveSearchResults(list, workspaces, query, archivedSessionIds, archivedFilter, statuses, content, limit) {
  const q = query.trim().toLowerCase();
  if (q === "") return { items: [], hasMore: false };
  const archived = new Set(archivedSessionIds);
  const current2 = mainSessionId(list);
  const workspaceBySession = /* @__PURE__ */ new Map();
  for (const workspace of workspaces) {
    for (const sessionId of workspace.sessionIds) {
      if (!workspaceBySession.has(sessionId)) workspaceBySession.set(sessionId, workspace.title);
    }
  }
  const labelOf = (summary) => workspaceBySession.get(summary.id) ?? workspaceLabel(summary.cwd);
  const contentBySession = /* @__PURE__ */ new Map();
  for (const item of content.items) {
    if (!contentBySession.has(item.sessionId)) contentBySession.set(item.sessionId, item);
  }
  const local = [];
  for (const id of list.ids) {
    const summary = list.byId[id];
    if (summary === void 0 || summary.blank || !sessionVisible(summary, current2, archived, archivedFilter)) continue;
    if (sessionTitle(summary).toLowerCase().includes(q) || labelOf(summary).toLowerCase().includes(q) || summary.id.toLowerCase().includes(q)) {
      local.push(summary);
    }
  }
  const localById = new Map(local.map((summary) => [summary.id, summary]));
  const orderedLocal = orderByRecency(local.map((summary) => summary.id), list.byId).map((id) => localById.get(id));
  const ordered = [];
  const included = /* @__PURE__ */ new Set();
  const include = (summary) => {
    if (included.has(summary.id)) return;
    included.add(summary.id);
    ordered.push(summary);
  };
  for (const summary of orderedLocal) include(summary);
  for (const item of content.items) {
    const summary = list.byId[item.sessionId];
    if (summary !== void 0 && !summary.blank && sessionVisible(summary, current2, archived, archivedFilter)) include(summary);
  }
  return {
    items: ordered.slice(0, limit).map((summary) => {
      const match = contentBySession.get(summary.id);
      const status = statuses.get(summary.id);
      const pendingInteraction = visiblePendingKind(status?.pendingInteraction?.kind);
      return {
        id: summary.id,
        title: sessionTitle(summary),
        workspace: labelOf(summary),
        running: status?.running ?? summary.running,
        runningSubagentCount: runningChildCount(list, summary.id, statuses),
        ...pendingInteraction === void 0 ? {} : { pendingInteraction },
        completed: status?.completionUnread === true,
        archived: archived.has(summary.id),
        ...match === void 0 ? {} : { snippet: match.snippet }
      };
    }),
    hasMore: content.hasMore || ordered.length > limit
  };
}
function folderPath(path) {
  const windows = /^[A-Za-z]:[/\\]/.test(path) || path.startsWith("\\\\");
  return (windows ? path.replaceAll("\\", "/") : path).replace(/\/+$/, "");
}
function owningParentFolder(path, parents) {
  const child = folderPath(path);
  let owner;
  let length = -1;
  for (const parent of parents) {
    const root = folderPath(parent);
    if (root.length > length && child !== root && child.startsWith(`${root}/`)) {
      owner = parent;
      length = root.length;
    }
  }
  return owner;
}

// src/browser/rows/Rows.tsx
var import_react2 = require("react");
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/browser/rows/Rows.module.css
var Rows_default = {
  projectRow: "Rows_projectRow",
  sessionRow: "Rows_sessionRow",
  selected: "Rows_selected",
  dragPreview: "Rows_dragPreview",
  searchResultRow: "Rows_searchResultRow",
  searchResultHeading: "Rows_searchResultHeading",
  searchResultTitle: "Rows_searchResultTitle",
  searchResultMeta: "Rows_searchResultMeta",
  searchResultWorkspace: "Rows_searchResultWorkspace",
  searchResultSnippet: "Rows_searchResultSnippet",
  rowActions: "Rows_rowActions",
  title: "Rows_title",
  slot: "Rows_slot",
  visuallyHidden: "Rows_visuallyHidden",
  folderActive: "Rows_folderActive",
  folderCustom: "Rows_folderCustom",
  tagged: "Rows_tagged",
  tagTab: "Rows_tagTab",
  bucketDot: "Rows_bucketDot",
  chevron: "Rows_chevron",
  folder: "Rows_folder",
  arrow: "Rows_arrow",
  arrowOpen: "Rows_arrowOpen",
  projectText: "Rows_projectText",
  renameInput: "Rows_renameInput",
  meta: "Rows_meta",
  workspaceChip: "Rows_workspaceChip",
  time: "Rows_time",
  pinIndicator: "Rows_pinIndicator",
  archived: "Rows_archived",
  dot: "Rows_dot",
  menuOpen: "Rows_menuOpen",
  rowQuickActions: "Rows_rowQuickActions",
  rowResting: "Rows_rowResting",
  timestamp: "Rows_timestamp",
  pinnedAction: "Rows_pinnedAction",
  dropBefore: "Rows_dropBefore",
  dropAfter: "Rows_dropAfter",
  hoverContent: "Rows_hoverContent",
  hoverTitle: "Rows_hoverTitle",
  hoverPath: "Rows_hoverPath",
  hoverTag: "Rows_hoverTag",
  hoverTagDot: "Rows_hoverTagDot",
  hoverTime: "Rows_hoverTime",
  hoverStatus: "Rows_hoverStatus",
  hoverArchived: "Rows_hoverArchived",
  iconButton: "Rows_iconButton",
  bucketRow: "Rows_bucketRow"
};

// src/browser/rows/Rows.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var DRAG_PREVIEW_PROPERTIES = [
  "--dsh-sidebar-row-padding",
  "--dsh-sidebar-label-gap",
  "--dsh-sidebar-paint-inset"
];
function displayTitle(node, t) {
  return node.blank ? t("session.new") : node.title || t("session.untitled");
}
var MIN_TITLE_REVEAL_PX = 8;
var TITLE_MARQUEE_PX_PER_MS = 0.03;
function placeTitle(title, left, range) {
  if (typeof title.scrollTo === "function") title.scrollTo({ left, behavior: "instant" });
  else title.scrollLeft = left;
  if (left > 0) title.dataset.scrolled = "";
  else delete title.dataset.scrolled;
  if (left < range) title.dataset.clipped = "";
  else delete title.dataset.clipped;
}
function restTitle(title) {
  if (typeof title.scrollTo === "function") title.scrollTo({ left: 0, behavior: "instant" });
  else title.scrollLeft = 0;
  delete title.dataset.scrolled;
  delete title.dataset.clipped;
}
function useTitleMarquee(title) {
  const frame = (0, import_react2.useRef)(0);
  const revealing = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => () => {
    cancelAnimationFrame(frame.current);
  }, []);
  return (0, import_react2.useMemo)(() => ({
    enter: (event) => {
      if (event?.pointerType === "touch") return;
      if (title.current === null) return;
      if (revealing.current) return;
      revealing.current = true;
      const element = title.current;
      const range = element.scrollWidth - element.clientWidth;
      if (range <= MIN_TITLE_REVEAL_PX) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        placeTitle(element, range, range);
        return;
      }
      cancelAnimationFrame(frame.current);
      let previous;
      let position = 0;
      const step = (now) => {
        position += previous === void 0 ? 0 : (now - previous) * TITLE_MARQUEE_PX_PER_MS;
        previous = now;
        placeTitle(element, Math.min(position, range), range);
        if (position < range) frame.current = requestAnimationFrame(step);
      };
      frame.current = requestAnimationFrame(step);
    },
    leave: () => {
      revealing.current = false;
      cancelAnimationFrame(frame.current);
      if (title.current === null) return;
      restTitle(title.current);
    }
  }), [title]);
}
function timeLabel(updatedAt, now, t) {
  const { unit, n } = (0, import_dsh_client_ui_primitives3.relativeTime)(updatedAt, now);
  return unit === "now" ? t("time.now") : t(`time.${unit}`, { n });
}
function hoverTimeLabel(updatedAt, now, t) {
  const { unit, n } = (0, import_dsh_client_ui_primitives3.relativeTime)(updatedAt, now);
  return unit === "now" ? t("time.now") : t("time.ago", { t: t(`time.${unit}`, { n }) });
}
function createdLabel(createdAt, t) {
  const d = new Date(createdAt);
  const pad2 = (v) => String(v).padStart(2, "0");
  const date = t("date.ymd", { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() });
  return t("hover.created", { time: `${date} ${pad2(d.getHours())}:${pad2(d.getMinutes())}` });
}
function WorkspaceHoverContent({ label, cwd, createdAt, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: Rows_default.hoverContent, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: Rows_default.hoverTitle, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: Rows_default.hoverPath, children: cwd }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: Rows_default.hoverTime, children: createdLabel(createdAt, t) })
  ] });
}
function rowHalf(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  return e.clientY < rect.top + rect.height / 2 ? "before" : "after";
}
function ProjectRowItem(props) {
  const workspaceId = props.group.workspaceId;
  return workspaceId === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(UngroupedProjectRow, { ...props }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WorkspaceProjectRow, { ...props, workspaceId });
}
function UngroupedProjectRow(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ProjectRow, { ...props, actions: { reorder: false } });
}
function WorkspaceProjectRow({ workspaceId, ...props }) {
  const { useWorkspaceAccess } = props;
  const create = useWorkspaceAccess(workspaceId, "session/create");
  const actions = {
    create: create ? () => {
      props.onCreate(workspaceId);
    } : void 0,
    reorder: useWorkspaceAccess(workspaceId, "workspace/insertBefore")
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ProjectRow, { ...props, actions });
}
function ProjectRow({
  group,
  containsCurrentDescendant = false,
  onToggle,
  drag: offeredDrag,
  home,
  newShortcut,
  t,
  actions,
  appearanceIcon,
  renderFactorySlot,
  useContextMenuTarget,
  useContextMenu
}) {
  const { getTriggerProps } = useContextMenu();
  const drag = actions.reorder ? offeredDrag : void 0;
  const create = actions.create;
  const row = group;
  const label = row.workspaceId === void 0 ? t("group.ungrouped") : row.label;
  const leadingIcon = appearanceIcon === void 0 ? void 0 : parseIconSpec(appearanceIcon);
  const active = containsCurrentDescendant || group.expanded && group.containsCurrent;
  const menuOpen = useContextMenuTarget((target) => target?.kind === "workspace" && target.value.workspaceId === row.workspaceId);
  const dragPreview = (0, import_dsh_client_ui_primitives3.useRowDragPreview)(Rows_default.dragPreview, DRAG_PREVIEW_PROPERTIES);
  const workspaceMenuTarget = row.workspaceId !== void 0 && row.cwd !== void 0 ? { workspaceId: row.workspaceId, path: row.cwd } : void 0;
  const ownRow = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: clsx_default(Rows_default.projectRow, menuOpen && Rows_default.menuOpen),
      "data-row-key": `workspace:${group.key}`,
      role: "treeitem",
      "aria-expanded": row.expanded,
      onClick: onToggle,
      ...getTriggerProps(workspaceMenuTarget === void 0 ? void 0 : { kind: "workspace", value: { ...workspaceMenuTarget, displayTitle: label } }),
      draggable: drag !== void 0,
      onDragStart: drag === void 0 ? void 0 : (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", row.key);
        drag.start();
        dragPreview.start(e);
      },
      onDragEnd: () => {
        if (dragPreview.clear()) drag?.end();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: clsx_default(Rows_default.slot, Rows_default.folder, active && Rows_default.folderActive, leadingIcon !== void 0 && Rows_default.folderCustom), children: leadingIcon !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AppearanceIcon, { spec: leadingIcon, size: 16 }) : row.expanded ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconFolderOpenRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconFolderCloseRegular, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: clsx_default(Rows_default.slot, Rows_default.chevron), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconTriangleRightFillRegular, { className: clsx_default(Rows_default.arrow, row.expanded && Rows_default.arrowOpen) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.projectText, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.title, children: label }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: Rows_default.rowActions, children: [
          workspaceMenuTarget !== void 0 && renderFactorySlot("contextMenu.button", {
            target: { kind: "workspace", value: { ...workspaceMenuTarget, displayTitle: label } },
            label: t("actions.workspace.aria", { name: label }),
            className: Rows_default.iconButton
          }),
          create !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.Tooltip, { label: t("actions.newSession"), shortcutKeys: newShortcut?.keys, side: "bottom", align: "end", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              className: Rows_default.iconButton,
              "aria-keyshortcuts": newShortcut?.aria,
              "aria-label": t("actions.newSession.aria", { name: label }),
              onClick: (e) => {
                e.stopPropagation();
                create();
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconNewChatOutlineRegular, { size: 14 })
            }
          ) })
        ] })
      ]
    }
  );
  if (row.createdAt === void 0) return ownRow;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dsh_client_ui_primitives3.HoverCard,
    {
      anchor: ownRow,
      content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        WorkspaceHoverContent,
        {
          label: row.label,
          cwd: row.cwd === void 0 ? void 0 : abbreviateHomePath(row.cwd, home),
          createdAt: row.createdAt,
          t
        }
      ),
      openDelayMs: 800,
      grouped: true,
      disabled: menuOpen,
      copyText: row.cwd,
      copyLabel: t("copy"),
      copiedLabel: t("hover.copied")
    }
  );
}
function TimeBucketRowItem({ label, count, expanded, onToggle, rowKey, accent }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: clsx_default(Rows_default.projectRow, Rows_default.bucketRow),
      "data-row-key": `bucket:${rowKey}`,
      role: "treeitem",
      "aria-expanded": expanded,
      onClick: onToggle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: clsx_default(Rows_default.slot, Rows_default.chevron), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconTriangleRightFillRegular, { className: clsx_default(Rows_default.arrow, expanded && Rows_default.arrowOpen) }) }),
        accent !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.bucketDot, style: { backgroundColor: accent }, "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.projectText, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.title, children: label }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.meta, children: count })
      ]
    }
  );
}
function assertNever2(value) {
  throw new Error(`unknown pending interaction: ${String(value)}`);
}
function sessionStatuses(node, t) {
  const subagents = node.runningSubagentCount === 0 ? void 0 : {
    state: "ongoing",
    label: t(
      node.runningSubagentCount === 1 ? "status.subagentsRunning.one" : "status.subagentsRunning.other",
      { n: node.runningSubagentCount }
    )
  };
  let pending;
  switch (node.pendingInteraction) {
    case "approval":
      pending = {
        state: "warning",
        label: t("status.waitingApproval"),
        trailingLabel: t("status.compact.approval")
      };
      break;
    case "plan-review":
      pending = {
        state: "warning",
        label: t("status.planReview"),
        trailingLabel: t("status.compact.planReview")
      };
      break;
    case "question":
      pending = {
        state: "warning",
        label: t("status.waitingAnswer"),
        trailingLabel: t("status.compact.answer")
      };
      break;
    case void 0:
      break;
    /* v8 ignore next -- closed PendingInteractionStatus union */
    default:
      return assertNever2(node.pendingInteraction);
  }
  if (pending !== void 0) return subagents === void 0 ? [pending] : [pending, subagents];
  if (node.running) {
    const primary = { state: "ongoing", label: t("status.running") };
    return subagents === void 0 ? [primary] : [primary, subagents];
  }
  if (subagents !== void 0) return [subagents];
  if (node.completed) return [{ state: "done", label: t("status.completed") }];
  return [{ state: "idle", label: t("status.idle") }];
}
function SessionStatusDots({ statuses }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.StateDot, { state: statuses[0].state }),
    statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.visuallyHidden, children: status.label }, status.label))
  ] });
}
function tagLabel(tag, t) {
  return tag.name.trim() === "" ? t(`appearance.color.${tag.color}`) : tag.name;
}
function SessionTagTab({ accent, label }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.tagTab, style: { backgroundColor: accent }, "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.visuallyHidden, children: label })
  ] });
}
function PinnedIndicator({ t }) {
  const label = t("row.pinned");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.pinIndicator, role: "img", "aria-label": label, title: label, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconPinFillRegular, { size: 14 }) });
}
function SessionHoverContent({ node, cwd, tag, now, renderSlot, t }) {
  const statuses = sessionStatuses(node, t).filter((status) => !(node.archived && (status.state === "done" || status.state === "idle")));
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: Rows_default.hoverContent, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: Rows_default.hoverTitle, children: displayTitle(node, t) }),
    cwd !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: Rows_default.hoverPath, children: cwd }),
    tag !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: Rows_default.hoverTag, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "span",
        {
          className: Rows_default.hoverTagDot,
          style: { backgroundColor: sessionColorHex(tag.color) ?? "transparent" },
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: tagLabel(tag, t) })
    ] }),
    !node.blank && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: Rows_default.hoverTime, children: hoverTimeLabel(node.updatedAt, now, t) }),
    renderSlot("sidebar.session.row.hover", { sessionId: node.id }),
    statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: Rows_default.hoverStatus, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.StateDot, { state: status.state }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: status.label })
    ] }, status.label)),
    node.archived && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: clsx_default(Rows_default.hoverStatus, Rows_default.hoverArchived), children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconArchiveOutlineRegular, { size: 14 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t("row.archived") })
    ] })
  ] });
}
function SearchResultItem({
  result,
  currentId,
  onOpen,
  onUnarchive,
  useSessionAccess,
  t
}) {
  const selected = result.id === currentId;
  const canUnarchive = useSessionAccess(result.id, "workspace/unarchiveSession");
  const statuses = sessionStatuses(result, t);
  const primaryStatus = statuses[0];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: clsx_default(Rows_default.searchResultRow, selected && Rows_default.selected, result.archived && Rows_default.archived),
      role: "treeitem",
      "aria-selected": selected,
      "aria-description": result.archived ? t("toast.archivedNotOpenable") : void 0,
      onClick: () => {
        onOpen(result.id);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: Rows_default.searchResultHeading, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.slot, children: !result.archived && primaryStatus.state !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SessionStatusDots, { statuses }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.searchResultTitle, children: result.title || t("session.untitled") }),
          result.archived && canUnarchive && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.rowActions, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.Tooltip, { label: t("actions.unarchive"), side: "bottom", align: "end", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              className: Rows_default.iconButton,
              "aria-label": t("menu.unarchiveSession"),
              onClick: (e) => {
                e.stopPropagation();
                onUnarchive(result.id);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconUnarchiveOutlineRegular, { size: 14 })
            }
          ) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: Rows_default.searchResultMeta, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.searchResultWorkspace, children: result.workspace || t("group.ungrouped") }),
          result.snippet !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.searchResultSnippet, children: result.snippet })
        ] })
      ]
    }
  );
}
function SessionNodeItem({
  node,
  currentId,
  now,
  onOpen,
  onRenameRequest,
  renderSlot,
  renderFactorySlot,
  useContextMenuTarget,
  useContextMenu,
  onReveal,
  drag,
  home,
  useSessionAccess,
  t,
  workspaceLabel: workspaceLabel2,
  tag
}) {
  const { getTriggerProps } = useContextMenu();
  const row = node;
  const title = displayTitle(node, t);
  const selected = node.id === currentId;
  const statuses = sessionStatuses(node, t);
  const primaryStatus = statuses[0];
  const showStatus = primaryStatus.state !== "idle";
  const renamable = useSessionAccess(node.id, "session/rename");
  const reorderable = useSessionAccess(node.id, "workspace/insertSessionBefore");
  const draggable = drag !== void 0 && reorderable && !row.blank && !row.archived;
  const menuOpen = useContextMenuTarget((target) => target?.kind === "session" && target.value.sessionId === node.id);
  const dragPreview = (0, import_dsh_client_ui_primitives3.useRowDragPreview)(Rows_default.dragPreview, DRAG_PREVIEW_PROPERTIES);
  const tagAccent = tag === void 0 ? void 0 : sessionColorHex(tag.color);
  const rowRef = (0, import_react2.useRef)(null);
  const titleRef = (0, import_react2.useRef)(null);
  const renameArmed = (0, import_react2.useRef)(false);
  const disarmRename = (0, import_react2.useRef)(() => {
    renameArmed.current = false;
  }).current;
  const marquee = useTitleMarquee(titleRef);
  (0, import_react2.useEffect)(() => {
    if (menuOpen || rowRef.current?.matches(":hover")) marquee.enter();
    else marquee.leave();
  }, [menuOpen, marquee]);
  (0, import_react2.useEffect)(() => {
    if (onReveal === void 0) return;
    rowRef.current?.scrollIntoView({ block: "nearest" });
    onReveal();
  }, [onReveal]);
  const ownRow = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      ref: rowRef,
      "data-row-key": `session:${node.id}`,
      className: clsx_default(
        Rows_default.sessionRow,
        selected && Rows_default.selected,
        menuOpen && Rows_default.menuOpen,
        row.archived && Rows_default.archived,
        tag !== void 0 && Rows_default.tagged,
        drag?.marker === "before" && Rows_default.dropBefore,
        drag?.marker === "after" && Rows_default.dropAfter
      ),
      role: "treeitem",
      "aria-selected": selected,
      "aria-description": row.archived ? t("toast.archivedNotOpenable") : void 0,
      tabIndex: 0,
      onClick: () => {
        onOpen(node.id);
      },
      ...getTriggerProps(row.blank ? void 0 : { kind: "session", value: { sessionId: node.id, displayTitle: row.title } }, { onKeyDown: (event) => {
        if (event.target !== event.currentTarget || event.key !== "Enter" && event.key !== " ") return;
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        event.preventDefault();
        onOpen(node.id);
      } }),
      onPointerEnter: marquee.enter,
      onPointerLeave: () => {
        if (!menuOpen) marquee.leave();
      },
      draggable,
      onDragStart: !draggable ? void 0 : (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", node.id);
        drag.start();
        dragPreview.start(e);
      },
      onDragEnd: () => {
        if (dragPreview.clear()) drag?.end();
      },
      onDragOver: drag === void 0 ? void 0 : (e) => {
        if (!drag.active) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        drag.hover(rowHalf(e));
      },
      onDrop: drag === void 0 ? void 0 : (e) => {
        if (!drag.active) return;
        e.preventDefault();
        drag.drop(rowHalf(e));
      },
      children: [
        !row.blank && tag !== void 0 && tagAccent !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SessionTagTab, { accent: tagAccent, label: tagLabel(tag, t) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.slot, children: !row.archived && !row.blank && (showStatus ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SessionStatusDots, { statuses }) : renderSlot("sidebar.session.row.leading", { sessionId: node.id })) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "span",
          {
            ref: titleRef,
            className: Rows_default.title,
            onMouseDown: (e) => {
              if (e.detail !== 1) return;
              renameArmed.current = true;
              window.addEventListener("blur", disarmRename, { once: true });
            },
            onDoubleClick: row.blank || !renamable ? void 0 : (e) => {
              e.stopPropagation();
              if (!renameArmed.current) return;
              renameArmed.current = false;
              onRenameRequest(node.id, row.title);
            },
            children: title
          }
        ),
        !row.blank && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: Rows_default.rowResting, children: [
          workspaceLabel2 !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.workspaceChip, title: workspaceLabel2, children: workspaceLabel2 }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "span",
            {
              className: clsx_default(Rows_default.time, primaryStatus.trailingLabel === void 0 && Rows_default.timestamp),
              "aria-hidden": primaryStatus.trailingLabel === void 0 ? void 0 : true,
              children: primaryStatus.trailingLabel ?? timeLabel(row.updatedAt, now, t)
            }
          ),
          renderSlot("sidebar.session.row.trailing", { sessionId: node.id }),
          row.pinned && !row.archived && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PinnedIndicator, { t })
        ] }),
        !row.blank && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: Rows_default.rowActions, onClick: (e) => {
          e.stopPropagation();
        }, children: [
          renderFactorySlot("contextMenu.button", {
            target: { kind: "session", value: { sessionId: node.id, displayTitle: row.title } },
            label: t("actions.session.aria", { name: title }),
            className: Rows_default.iconButton
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: Rows_default.rowQuickActions, children: renderSlot("sidebar.workspaces.session.row.action", { sessionId: node.id, displayTitle: row.title }) })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dsh_client_ui_primitives3.HoverCard,
    {
      anchor: ownRow,
      content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        SessionHoverContent,
        {
          node,
          cwd: row.cwd === void 0 ? void 0 : abbreviateHomePath(row.cwd, home),
          tag,
          now,
          renderSlot,
          t
        }
      ),
      openDelayMs: 800,
      grouped: true,
      disabled: menuOpen || drag?.active === true,
      copyText: row.blank || row.title === "" ? void 0 : row.title,
      copyLabel: t("copy"),
      copiedLabel: t("hover.copied")
    }
  );
}

// src/browser/stores.ts
var import_dsh_client_store = require("@deepseek-ai/dsh-client-store");
var FLAT_SESSION_ORDER_KEY = "__flat_session_order__";
var TEXT_SCALE_CSS = {
  small: { title: "12px", line: "16px", meta: "10px", time: "9px", row: "24px", rowGap: "1px", groupGap: "3px" },
  normal: { title: "14px", line: "20px", meta: "12px", time: "10px", row: "28px", rowGap: "2px", groupGap: "4px" },
  large: { title: "16px", line: "22px", meta: "13px", time: "11px", row: "32px", rowGap: "3px", groupGap: "6px" }
};
function isTextScale(value) {
  return value === "small" || value === "normal" || value === "large";
}

// src/browser/WorkspacePicker.tsx
var import_react3 = require("react");
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/browser/path-suffix.ts
function distinguishingPathSuffixes(workspaces) {
  const rows = workspaces.map((workspace) => ({ ...workspace, parts: workspace.path.split(/([\\/])/) }));
  const suffix = (parts, count) => parts.slice(-(2 * count - 1)).join("");
  const suffixes = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const peers = rows.filter((other) => other !== row && other.title === row.title);
    if (peers.length === 0) continue;
    let count = 1;
    while (2 * count - 1 < row.parts.length && (suffix(row.parts, count) === "" || peers.some((peer) => suffix(peer.parts, count) === suffix(row.parts, count)))) count++;
    suffixes.set(row.id, suffix(row.parts, count));
  }
  return suffixes;
}

// src/browser/WorkspacePicker.module.css
var WorkspacePicker_default = {
  modalAction: "WorkspacePicker_modalAction",
  modalError: "WorkspacePicker_modalError",
  menuStatus: "WorkspacePicker_menuStatus",
  pathSuffix: "WorkspacePicker_pathSuffix",
  disambiguated: "WorkspacePicker_disambiguated",
  title: "WorkspacePicker_title"
};

// src/browser/WorkspacePicker.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var ADD_WORKSPACE = "::add-workspace";
function WorkspacePickFlow({
  t,
  open,
  anchorRef,
  useWorkspaces,
  createWorkspace,
  useDirectoryFlow,
  renderDirectoryFlow,
  onPick,
  onClose,
  addOnly = false,
  onBusyChange,
  side = "bottom",
  selectedId
}) {
  const absentAnchor = (0, import_react3.useRef)(null);
  const workspaceSnapshot = useWorkspaces((state) => state);
  const workspaces = workspaceSnapshot.items;
  const [errorOpen, setErrorOpen] = (0, import_react3.useState)(false);
  const [modalError, setModalError] = (0, import_react3.useState)(null);
  const [flowOpen, setFlowOpen] = (0, import_react3.useState)(false);
  const [pickingFolder, setPickingFolder] = (0, import_react3.useState)(false);
  const flowBusy = flowOpen || pickingFolder;
  (0, import_react3.useEffect)(() => {
    onBusyChange?.(flowBusy);
  }, [flowBusy, onBusyChange]);
  const flowAvailable = useDirectoryFlow((occupied) => occupied);
  (0, import_react3.useEffect)(() => {
    if (flowOpen && !flowAvailable) setFlowOpen(false);
  }, [flowOpen, flowAvailable]);
  const addEntries = flowAvailable ? [{ id: ADD_WORKSPACE, label: t("menu.addWorkspace"), icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives4.IconPlusOutlineRegular, { size: 16 }), disabled: flowBusy }] : [];
  const pinAdd = !addOnly && workspaces.length > 0;
  const defaultWorkspaceName = t("workspace.defaultName");
  const listed = (0, import_react3.useMemo)(() => {
    if (!pinAdd) return [];
    const rows = workspaces.map((workspace) => ({
      id: workspace.workspaceId,
      title: workspaceDisplayTitle(workspace.title, defaultWorkspaceName),
      path: workspace.path
    }));
    const suffixes = distinguishingPathSuffixes(rows);
    return rows.map((row) => ({ ...row, suffix: suffixes.get(row.id) }));
  }, [pinAdd, workspaces, defaultWorkspaceName]);
  const items = pinAdd ? listed.map(({ id, title, path, suffix }) => ({
    id,
    // The title gives way first, so the suffix that tells the rows apart
    // stays visible; the native tooltip carries the full path.
    label: suffix === void 0 ? title : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: WorkspacePicker_default.disambiguated, title: path, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: WorkspacePicker_default.title, children: title }),
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: WorkspacePicker_default.pathSuffix, children: suffix })
    ] }),
    icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives4.IconFolderCloseRegular, { size: 16 }),
    disabled: flowBusy
  })) : addEntries;
  const menuIsEmpty = items.length === 0;
  const closeModal = () => {
    setErrorOpen(false);
    setModalError(null);
  };
  const adoptDirectory = (path) => createWorkspace({ path }).then((workspace) => {
    setFlowOpen(false);
    onPick(workspace.workspaceId);
  }).catch((reason) => {
    setModalError(reason instanceof Error ? reason.message : String(reason));
    setFlowOpen(false);
    setErrorOpen(true);
  });
  const openDirectoryFlow = (0, import_react3.useCallback)(() => {
    onClose();
    setErrorOpen(false);
    setModalError(null);
    setFlowOpen(true);
  }, [onClose]);
  const listSettled = addOnly || workspaceSnapshot.phase === "ready";
  const addIsTheOnlyEntry = !pinAdd && listSettled && addEntries.length === 1;
  (0, import_react3.useEffect)(() => {
    if (open && addIsTheOnlyEntry && !flowBusy) openDirectoryFlow();
  }, [open, addIsTheOnlyEntry, flowBusy, openDirectoryFlow]);
  const flowOwner = {
    open: flowOpen,
    busy: pickingFolder,
    onPicked: (path) => {
      setPickingFolder(true);
      void adoptDirectory(path).finally(() => {
        setPickingFolder(false);
      });
    },
    onCancel: () => {
      setFlowOpen(false);
    },
    onError: (message) => {
      setFlowOpen(false);
      setModalError(message);
      setErrorOpen(true);
    }
  };
  const handleSelect = (id) => {
    if (id === ADD_WORKSPACE) {
      openDirectoryFlow();
      return;
    }
    onPick(id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_dsh_client_ui_primitives4.Menu,
      {
        open: open && !addIsTheOnlyEntry && !menuIsEmpty,
        anchor: null,
        items,
        ...pinAdd ? { footer: addEntries } : {},
        selectedId,
        onSelect: handleSelect,
        onClose,
        side,
        portal: true,
        anchorRef: anchorRef ?? absentAnchor
      }
    ),
    open && !addIsTheOnlyEntry && !menuIsEmpty && workspaceSnapshot.phase === "pending" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: WorkspacePicker_default.menuStatus, role: "status", children: t("picker.loading") }),
    renderDirectoryFlow(flowOwner),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_dsh_client_ui_primitives4.Modal,
      {
        open: errorOpen,
        onClose: closeModal,
        closeLabel: t("close"),
        title: t("folderError.title"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives4.Button, { variant: "outline", className: WorkspacePicker_default.modalAction, onClick: closeModal, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives4.Button, { variant: "primary", className: WorkspacePicker_default.modalAction, disabled: !flowAvailable, onClick: openDirectoryFlow, children: t("folderError.retry") })
        ] }),
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: WorkspacePicker_default.modalError, role: "alert", children: modalError })
      }
    )
  ] });
}

// src/browser/rows/WorkspaceBrowser.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var EXPAND_SLIDE_MS = 300;
var NO_APPEARANCE = {};
var NO_TAGS = [];
var NO_TAGS_BY_SESSION = {};
var NO_FOLDS = {};
var SEARCH_DEBOUNCE_MS = 250;
var SEARCH_QUERY_MAX_CODE_UNITS = 500;
var SESSION_WATERMARK_BASE = 5;
var SESSION_WATERMARK_AUTO_MAX = 50;
function watermarkRows(sessions, watermark) {
  let count = 0;
  const rows = sessions.filter((session) => {
    if (session.blank) return true;
    count += 1;
    return count <= watermark;
  });
  return { rows, hiddenCount: sessions.length - rows.length };
}
function requiredWatermark(sessions, current2, revealSessionId) {
  let index = 0;
  let required = 0;
  for (const session of sessions) {
    if (session.blank) continue;
    index += 1;
    const attention = index <= SESSION_WATERMARK_AUTO_MAX && (session.running || session.runningSubagentCount > 0 || session.pendingInteraction !== void 0 || session.completed || session.id === current2);
    if (attention || session.id === revealSessionId) required = index;
  }
  return required;
}
function raiseWatermarks(marks, required) {
  let raised = marks;
  for (const [key, watermark] of required) {
    if (watermark > (raised[key] ?? SESSION_WATERMARK_BASE)) raised = { ...raised, [key]: watermark };
  }
  return raised;
}
function sanitizeSearchQuery(value) {
  const withoutNul = value.replaceAll("\0", "");
  if (withoutNul.length <= SEARCH_QUERY_MAX_CODE_UNITS) return withoutNul;
  let end = SEARCH_QUERY_MAX_CODE_UNITS;
  const last = withoutNul.charCodeAt(end - 1);
  const next = withoutNul.charCodeAt(end);
  if (last >= 55296 && last <= 56319 && next >= 56320 && next <= 57343) end--;
  return withoutNul.slice(0, end);
}
function useNativeDragAcceptance(active) {
  (0, import_react4.useEffect)(() => {
    if (!active) return;
    const acceptDrag = (event) => {
      event.preventDefault();
      if (event.dataTransfer !== null) event.dataTransfer.dropEffect = "move";
    };
    const acceptDrop = (event) => {
      event.preventDefault();
    };
    document.addEventListener("dragover", acceptDrag);
    document.addEventListener("drop", acceptDrop);
    return () => {
      document.removeEventListener("dragover", acceptDrag);
      document.removeEventListener("drop", acceptDrop);
    };
  }, [active]);
}
var TEXT_SCALES = [
  { value: "small", key: "textSize.small" },
  { value: "normal", key: "textSize.normal" },
  { value: "large", key: "textSize.large" }
];
function ViewOptionsMenu({
  groupBy,
  orderBy,
  archivedFilter,
  textScale,
  showWorkspaceName,
  onGroupPick,
  onOrderPick,
  onArchivedFilterPick,
  onTextScalePick,
  onShowWorkspaceNameToggle,
  t
}) {
  const [open, setOpen] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_dsh_client_ui_primitives5.Menu,
    {
      open,
      onClose: () => {
        setOpen(false);
      },
      items: [
        { type: "label", id: "group-by", text: t("groupBy.label") },
        { id: "workspace", label: t("groupBy.workspace"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconFolderCloseRegular, {}) },
        { id: "workspace-tree", label: t("groupBy.workspaceTree"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconWorkspaceTreeOutlineRegular, {}) },
        { id: "flat", label: t("groupBy.flat"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconFlatListOutlineRegular, {}) },
        { id: "time", label: t("groupBy.time"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconClockOutlineRegular, {}) },
        { id: "tag", label: t("groupBy.tag"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AppearanceIcon, { spec: { kind: "icon", value: "tag" }, size: 16 }) },
        { type: "separator", id: "order-by-separator" },
        { type: "label", id: "order-by", text: t("orderBy.label") },
        { id: "manual", label: t("orderBy.manual"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconChevronsUpDownOutlineRegular, {}) },
        { id: "updated", label: t("orderBy.updated"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconClockOutlineRegular, {}) },
        { type: "separator", id: "display-separator" }
      ],
      selectedIds: [
        groupBy,
        orderBy,
        ...showWorkspaceName ? ["show-workspace-name"] : [],
        { default: "hide-archived", show: "show-archived", only: "only-archived" }[archivedFilter]
      ],
      onSelect: (id) => {
        if (id === "workspace" || id === "workspace-tree" || id === "flat" || id === "time" || id === "tag") onGroupPick(id);
        else if (id === "manual" || id === "updated") onOrderPick(id);
        else if (id === "show-workspace-name") onShowWorkspaceNameToggle(!showWorkspaceName);
        else if (id === "hide-archived") onArchivedFilterPick("default");
        else if (id === "show-archived") onArchivedFilterPick("show");
        else if (id === "only-archived") onArchivedFilterPick("only");
        setOpen(false);
      },
      footer: [
        {
          id: "show-workspace-name",
          label: t("viewOptions.showWorkspaceName"),
          icon: showWorkspaceName ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconEyeOutlineRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconEyeOffOutlineRegular, {})
        },
        { type: "separator", id: "archived-filter-separator" },
        { type: "label", id: "filter-by", text: t("filterBy.label") },
        { id: "hide-archived", label: t("viewOptions.hideArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconArchiveOffOutlineRegular, {}) },
        { id: "show-archived", label: t("viewOptions.showArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconQueueOutlineRegular, {}) },
        { id: "only-archived", label: t("viewOptions.onlyArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconArchiveCheckOutlineRegular, {}) }
      ],
      align: "end",
      dense: true,
      listClassName: WorkspaceBrowser_default.viewOptionsMenu,
      portal: true,
      anchor: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.Tooltip, { label: t("viewOptions.label"), side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          className: clsx_default(WorkspaceBrowser_default.iconButton, WorkspaceBrowser_default.wide),
          "aria-label": t("viewOptions.label"),
          onClick: () => {
            setOpen((v) => !v);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconSlidersTwoOutlineRegular, {})
        }
      ) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: WorkspaceBrowser_default.textScaleRow, role: "group", "aria-label": t("textSize.label"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: WorkspaceBrowser_default.textScaleLabel, children: t("textSize.label") }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: WorkspaceBrowser_default.textScaleTrack, children: TEXT_SCALES.map(({ value, key }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            type: "button",
            "aria-pressed": textScale === value,
            className: clsx_default(WorkspaceBrowser_default.textScaleOption, textScale === value && WorkspaceBrowser_default.textScaleOptionOn),
            onClick: () => {
              onTextScalePick(value);
            },
            children: t(key)
          },
          value
        )) })
      ] })
    }
  );
}
function sessionDragOrder(order, rows, drag, over) {
  const source = rows.find((row) => row.id === drag.sessionId);
  const target = rows.find((row) => row.id === over.id);
  if (source === void 0 || target === void 0 || source.blank || source.pinned !== drag.pinned || target.pinned !== drag.pinned || source.id === target.id || !order.includes(source.id)) return;
  const section = rows.filter((row) => row.pinned === drag.pinned);
  const sourceIndex = section.findIndex((row) => row.id === source.id);
  const withoutSource = section.filter((row) => row.id !== source.id);
  const insertAt = withoutSource.findIndex((row) => row.id === target.id) + (over.half === "after" ? 1 : 0);
  if (insertAt === sourceIndex) return;
  const next = order.filter((id) => id !== source.id);
  const targetIndex = next.indexOf(target.id);
  if (targetIndex === -1) return;
  next.splice(targetIndex + (over.half === "after" ? 1 : 0), 0, source.id);
  return pinCurrentBlank(next, rows.find((row) => row.blank)?.id);
}
function workspaceGroupHalf(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  return e.clientY < rect.top + rect.height / 2 ? "before" : "after";
}
function EmptySessions({ rowState, statusFilter, onLeaveArchivedOnly, t }) {
  const archivedOnly = rowState.archivedFilter === "only";
  const filtered = !archivedOnly && statusFilter !== void 0 && statusFilter !== "all";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: WorkspaceBrowser_default.emptyState, "data-row-key": "empty", children: [
    archivedOnly ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconArchiveOutlineRegular, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconQueueOutlineRegular, { size: 24 }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: archivedOnly ? t("empty.noneArchived") : filtered ? t("empty.noMatches") : t("empty.none") }),
    archivedOnly && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: WorkspaceBrowser_default.emptyAction, onClick: onLeaveArchivedOnly, children: t("empty.viewOthers") })
  ] });
}
function SessionTree({
  list,
  useSessionStatus,
  startSession,
  open,
  workspaces,
  ungroupedSessionIds,
  rowState,
  onLeaveArchivedOnly,
  workspaceReady,
  animationResetKey,
  usePanelInfo,
  useSessionAccess,
  useWorkspaceAccess,
  onSessionRenameRequest,
  renderSlot,
  renderFactorySlot,
  useContextMenuTarget,
  useContextMenu,
  insertWorkspaceBefore,
  nestWorkspaces,
  groupExpansion,
  setGroupExpanded,
  statusFilter,
  setSessionOrder,
  home,
  t,
  revealSessionId,
  onSessionRevealed,
  shortcuts,
  workspaceIcons,
  tagsBySession
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const statuses = useSessionStatus((s) => s);
  const current2 = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const revealGroup = revealSessionId === void 0 || !workspaceReady ? void 0 : owningGroupKey(workspaces, revealSessionId);
  const [storedWatermarks, setStoredWatermarks] = (0, import_react4.useState)({});
  const [watermarkMotionKey, setWatermarkMotionKey] = (0, import_react4.useState)(0);
  const [drag, setDrag] = (0, import_react4.useState)(null);
  const sessionDropCommitted = (0, import_react4.useRef)(false);
  const [workspaceDrag, setWorkspaceDrag] = (0, import_react4.useState)(null);
  const workspaceDropCommitted = (0, import_react4.useRef)(false);
  const nativeDragActive = drag !== null || workspaceDrag !== null;
  useNativeDragAcceptance(nativeDragActive);
  const currentGroup = current2 === void 0 || !workspaceReady ? void 0 : owningGroupKey(workspaces, current2);
  (0, import_react4.useEffect)(() => {
    if (current2 === void 0 || currentGroup === void 0 || Object.hasOwn(groupExpansion, currentGroup)) return;
    setGroupExpanded(currentGroup, true);
  }, [current2, currentGroup, setGroupExpanded, groupExpansion]);
  const parents = (0, import_react4.useMemo)(() => {
    if (!nestWorkspaces) return /* @__PURE__ */ new Map();
    const keysByPath = new Map(workspaces.map((workspace) => [workspace.path, workspace.workspaceId]));
    const paths = [...keysByPath.keys()];
    return new Map(workspaces.map((workspace) => {
      const path = owningParentFolder(workspace.path, paths);
      return [workspace.workspaceId, path === void 0 ? void 0 : keysByPath.get(path)];
    }));
  }, [nestWorkspaces, workspaces]);
  const currentAncestors = (0, import_react4.useMemo)(() => {
    const keys = /* @__PURE__ */ new Set();
    for (let key = currentGroup === void 0 ? void 0 : parents.get(currentGroup); key !== void 0; key = parents.get(key)) {
      keys.add(key);
    }
    return keys;
  }, [currentGroup, parents]);
  const expandedGroups = (0, import_react4.useMemo)(() => {
    const ancestorKeys = new Set(parents.values());
    return [...workspaces.map((workspace) => workspace.workspaceId), UNGROUPED_KEY].filter((key) => groupExpansion[key] ?? ancestorKeys.has(key));
  }, [groupExpansion, parents, workspaces]);
  const groups = (0, import_react4.useMemo)(
    () => deriveGroups(list, workspaces, rowState, statuses, {
      expandedGroups,
      ungroupedOrder: ungroupedSessionIds,
      statusFilter
    }),
    [list, workspaces, rowState, statuses, expandedGroups, statusFilter, ungroupedSessionIds]
  );
  (0, import_react4.useEffect)(() => {
    for (let key = revealGroup; key !== void 0; key = parents.get(key)) {
      if (groupExpansion[key] === false || key === revealGroup && groupExpansion[key] !== true) {
        setGroupExpanded(key, true);
      }
    }
  }, [groupExpansion, parents, revealGroup, setGroupExpanded]);
  const baselines = new Map(groups.map((group) => [group.key, Math.max(SESSION_WATERMARK_BASE, requiredWatermark(
    group.sessions,
    current2,
    group.key === revealGroup ? revealSessionId : void 0
  ))]));
  const foldedKeys = new Set(groups.filter((group) => !group.expanded).map((group) => group.key));
  const underFoldedAncestor = (key) => {
    for (let owner = parents.get(key); owner !== void 0; owner = parents.get(owner)) {
      if (foldedKeys.has(owner)) return true;
    }
    return false;
  };
  const requiredWatermarks = new Map([...baselines].filter(([key]) => !underFoldedAncestor(key)));
  const sessionWatermarks = raiseWatermarks(storedWatermarks, requiredWatermarks);
  if (sessionWatermarks !== storedWatermarks) setStoredWatermarks((marks) => raiseWatermarks(marks, requiredWatermarks));
  const dropWatermarks = (drop) => {
    if (!Object.keys(storedWatermarks).some(drop)) return;
    setStoredWatermarks((marks) => Object.fromEntries(Object.entries(marks).filter(([key]) => !drop(key))));
    setWatermarkMotionKey((key) => key + 1);
  };
  const withinGroup = (key, root) => {
    for (let owner = key; owner !== void 0; owner = parents.get(owner)) {
      if (owner === root) return true;
    }
    return false;
  };
  const now = Date.now();
  const commitSessionDrag = (activeDrag, over) => {
    if (sessionDropCommitted.current) return;
    sessionDropCommitted.current = true;
    setDrag(null);
    const group = groups.find((candidate) => candidate.key === activeDrag.accountKey);
    if (group === void 0) return;
    if (over.id === activeDrag.sessionId) return;
    const accountSessionIds = activeDrag.accountKey === UNGROUPED_KEY ? ungroupedSessionIds : workspaces.find((workspace) => workspace.workspaceId === activeDrag.accountKey)?.sessionIds;
    if (accountSessionIds === void 0) return;
    const renderedSessions = watermarkRows(group.sessions, sessionWatermarks[group.key] ?? SESSION_WATERMARK_BASE).rows;
    const nextOrder = sessionDragOrder(accountSessionIds, renderedSessions, activeDrag, over);
    if (nextOrder !== void 0) setSessionOrder(activeDrag.accountKey, nextOrder);
  };
  const commitWorkspaceDrag = (activeDrag, over) => {
    if (workspaceDropCommitted.current) return;
    workspaceDropCommitted.current = true;
    setWorkspaceDrag(null);
    const owner = parents.get(activeDrag.workspaceId);
    const siblings = workspaces.filter((workspace) => parents.get(workspace.workspaceId) === owner);
    const rowIndex = siblings.findIndex((workspace) => workspace.workspaceId === over.id);
    if (rowIndex === -1) return;
    const anchor = over.half === "before" ? over.id : siblings[rowIndex + 1]?.workspaceId;
    if (anchor === activeDrag.workspaceId) return;
    const sourceIndex = siblings.findIndex((workspace) => workspace.workspaceId === activeDrag.workspaceId);
    const anchorIndex = anchor === void 0 ? siblings.length : siblings.findIndex((workspace) => workspace.workspaceId === anchor);
    if (sourceIndex !== -1 && (anchorIndex === sourceIndex || anchorIndex === sourceIndex + 1)) return;
    insertWorkspaceBefore(activeDrag.workspaceId, anchor).catch((reason) => {
      console.warn("workspace reorder rejected:", reason);
    });
  };
  const childrenByParent = (0, import_react4.useMemo)(() => {
    const rendered = new Set(groups.map((group) => group.key));
    const children = /* @__PURE__ */ new Map();
    for (const group of groups) {
      let parent = parents.get(group.key);
      while (parent !== void 0 && !rendered.has(parent)) parent = parents.get(parent);
      const siblings = children.get(parent);
      if (siblings === void 0) children.set(parent, [group]);
      else siblings.push(group);
    }
    return children;
  }, [groups, parents]);
  const rootGroups = childrenByParent.get(void 0) ?? [];
  const workspaceDropAtListStart = rootGroups[0]?.workspaceId !== void 0 && workspaceDrag?.over?.id === rootGroups[0].workspaceId && workspaceDrag.over.half === "before";
  const rowKeys = groups.length === 0 ? ["empty"] : [];
  const renderGroup = (group, depth) => {
    const workspaceId = group.workspaceId;
    const children = childrenByParent.get(group.key) ?? [];
    const compatibleDrag = workspaceDrag !== null && parents.get(workspaceDrag.workspaceId) === parents.get(group.key);
    const watermark = sessionWatermarks[group.key] ?? SESSION_WATERMARK_BASE;
    const collapsed = watermarkRows(group.sessions, baselines.get(group.key) ?? SESSION_WATERMARK_BASE);
    const visible = watermarkRows(group.sessions, watermark);
    const sessionsExpanded = visible.hiddenCount === 0;
    rowKeys.push(`workspace:${group.key}`);
    const childRows = group.expanded ? children.map((child) => renderGroup(child, depth + 1)) : [];
    const sessions = visible.rows;
    for (const node of sessions) rowKeys.push(`session:${node.id}`);
    if (collapsed.hiddenCount > 0) rowKeys.push(`overflow:${group.key}`);
    const workspaceMarker = workspaceId !== void 0 && workspaceDrag?.over?.id === workspaceId ? workspaceDrag.over.half : null;
    const workspaceDragProps = workspaceId === void 0 ? void 0 : {
      start: () => {
        workspaceDropCommitted.current = false;
        setWorkspaceDrag({ workspaceId, over: null });
      },
      end: () => {
        if (workspaceDrag?.over !== null && workspaceDrag?.over !== void 0) {
          commitWorkspaceDrag(workspaceDrag, workspaceDrag.over);
        } else {
          setWorkspaceDrag(null);
        }
        workspaceDropCommitted.current = false;
      }
    };
    const hoverWorkspace = workspaceId === void 0 || !compatibleDrag ? void 0 : (half) => {
      setWorkspaceDrag((active) => active === null ? active : { ...active, over: { id: workspaceId, half } });
    };
    const dropWorkspace = workspaceId === void 0 || !compatibleDrag ? void 0 : (half) => {
      commitWorkspaceDrag(workspaceDrag, { id: workspaceId, half });
    };
    return (
      // Group section: header, descendant Workspaces, and own Session rows. The
      // inter-group breathing room is the section's own margin
      // (WorkspaceBrowser.module.css).
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "div",
        {
          style: { "--dsh-workspace-indent": `${depth * 12}px` },
          className: clsx_default(
            WorkspaceBrowser_default.groupSection,
            workspaceMarker === "before" && WorkspaceBrowser_default.workspaceDropBefore,
            workspaceMarker === "after" && WorkspaceBrowser_default.workspaceDropAfter
          ),
          onDragOver: workspaceDrag === null ? void 0 : (e) => {
            e.preventDefault();
            if (hoverWorkspace === void 0 && parents.get(group.key) !== void 0) return;
            e.stopPropagation();
            if (hoverWorkspace === void 0) {
              e.dataTransfer.dropEffect = "none";
              if (workspaceDrag.over !== null) setWorkspaceDrag({ ...workspaceDrag, over: null });
            } else {
              e.dataTransfer.dropEffect = "move";
              hoverWorkspace(workspaceGroupHalf(e));
            }
          },
          onDrop: workspaceDrag === null ? void 0 : (e) => {
            e.preventDefault();
            if (dropWorkspace === void 0 && parents.get(group.key) !== void 0) return;
            e.stopPropagation();
            if (dropWorkspace === void 0) {
              workspaceDropCommitted.current = true;
              setWorkspaceDrag(null);
            } else {
              dropWorkspace(workspaceGroupHalf(e));
            }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              ProjectRowItem,
              {
                newShortcut: shortcuts.find((row) => row.id === "session.new"),
                group,
                renderFactorySlot,
                useContextMenu,
                useContextMenuTarget,
                useWorkspaceAccess,
                containsCurrentDescendant: currentAncestors.has(group.key),
                appearanceIcon: group.workspaceId === void 0 ? void 0 : (workspaceIcons ?? NO_APPEARANCE)[group.workspaceId],
                home,
                t,
                onToggle: () => {
                  if (group.expanded) dropWatermarks((key) => withinGroup(key, group.key));
                  setGroupExpanded(group.key, !group.expanded);
                },
                onCreate: (workspaceId2) => {
                  setGroupExpanded(group.key, true);
                  startSession(workspaceId2);
                },
                drag: workspaceDragProps
              }
            ),
            childRows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { role: "group", children: childRows }),
            sessions.map((node) => {
              const sameGroupDrag = drag !== null && drag.accountKey === group.key;
              const compatibleTarget = sameGroupDrag && drag.pinned === node.pinned;
              const normalizeHalf = (half) => node.blank ? "after" : half;
              const dragProps = {
                start: () => {
                  sessionDropCommitted.current = false;
                  setDrag({ accountKey: group.key, sessionId: node.id, pinned: node.pinned, over: null });
                },
                active: compatibleTarget,
                marker: sameGroupDrag && drag.over?.id === node.id ? drag.over.half : null,
                hover: (half) => {
                  setDrag((d) => d === null ? d : {
                    ...d,
                    over: { id: node.id, half: normalizeHalf(half) }
                  });
                },
                drop: (half) => {
                  if (drag === null) return;
                  commitSessionDrag(drag, { id: node.id, half: normalizeHalf(half) });
                },
                end: () => {
                  if (drag?.over !== null && drag?.over !== void 0) commitSessionDrag(drag, drag.over);
                  else setDrag(null);
                  sessionDropCommitted.current = false;
                }
              };
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                SessionNodeItem,
                {
                  node,
                  currentId: current2,
                  now,
                  onOpen: open,
                  onRenameRequest: onSessionRenameRequest,
                  renderSlot,
                  renderFactorySlot,
                  useContextMenu,
                  useContextMenuTarget,
                  onReveal: node.id === revealSessionId && group.key === revealGroup ? () => {
                    onSessionRevealed(node.id);
                  } : void 0,
                  drag: dragProps,
                  home,
                  useSessionAccess,
                  t,
                  tag: (tagsBySession ?? NO_TAGS_BY_SESSION)[node.id]
                },
                node.id
              );
            }),
            collapsed.hiddenCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                type: "button",
                className: WorkspaceBrowser_default.sessionOverflowButton,
                "data-row-key": `overflow:${group.key}`,
                "aria-expanded": sessionsExpanded,
                onClick: () => {
                  if (sessionsExpanded) {
                    dropWatermarks((key) => key === group.key);
                    return;
                  }
                  setStoredWatermarks((marks) => ({
                    ...marks,
                    [group.key]: visible.hiddenCount <= SESSION_WATERMARK_BASE ? Infinity : watermark + SESSION_WATERMARK_BASE
                  }));
                  setWatermarkMotionKey((key) => key + 1);
                },
                children: sessionsExpanded ? t("sessions.collapse") : t("sessions.expand", { n: visible.hiddenCount })
              }
            )
          ]
        },
        group.key
      )
    );
  };
  const groupRows = rootGroups.map((group) => renderGroup(group, 0));
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_dsh_client_ui_primitives5.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: [
    workspaceDropAtListStart && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: WorkspaceBrowser_default.listTopDropIndicator, "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      import_dsh_client_ui_primitives5.AnimatedRows,
      {
        className: clsx_default(WorkspaceBrowser_default.list, workspaceDropAtListStart && WorkspaceBrowser_default.listTopDropActive),
        role: "tree",
        label: t("section.sessions"),
        rowKeys,
        ready: list.phase === "ready" && workspaceReady && !nativeDragActive,
        resetKey: JSON.stringify([animationResetKey, watermarkMotionKey]),
        children: [
          groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EmptySessions, { rowState, statusFilter, onLeaveArchivedOnly, t }),
          groupRows
        ]
      }
    )
  ] });
}
function FlatList({
  list,
  sessionIds,
  rowState,
  onLeaveArchivedOnly,
  useSessionStatus,
  useSessionAccess,
  open,
  onSessionRenameRequest,
  usePanelInfo,
  setSessionOrder,
  workspaceReady,
  animationResetKey,
  statusFilter,
  workspaceLabelOf,
  tagsBySession,
  revealSessionId,
  onSessionRevealed,
  renderSlot,
  renderFactorySlot,
  useContextMenuTarget,
  useContextMenu,
  home,
  t
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const statuses = useSessionStatus((s) => s);
  const rows = (0, import_react4.useMemo)(
    () => deriveFlat(list, sessionIds, rowState, statuses, statusFilter),
    [list, sessionIds, rowState, statuses, statusFilter]
  );
  const [drag, setDrag] = (0, import_react4.useState)(null);
  const dropCommitted = (0, import_react4.useRef)(false);
  useNativeDragAcceptance(drag !== null);
  const currentId = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const commitDrag = (activeDrag, over) => {
    if (dropCommitted.current) return;
    dropCommitted.current = true;
    setDrag(null);
    const nextOrder = sessionDragOrder(sessionIds, rows, activeDrag, over);
    if (nextOrder !== void 0) setSessionOrder(FLAT_SESSION_ORDER_KEY, nextOrder);
  };
  const now = Date.now();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_dsh_client_ui_primitives5.AnimatedRows,
    {
      className: clsx_default(WorkspaceBrowser_default.list, WorkspaceBrowser_default.flatList),
      role: "tree",
      label: t("section.sessions"),
      rowKeys: rows.length === 0 ? ["empty"] : rows.map((row) => `session:${row.id}`),
      ready: list.phase === "ready" && workspaceReady && drag === null,
      resetKey: animationResetKey,
      children: [
        rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EmptySessions, { rowState, statusFilter, onLeaveArchivedOnly, t }),
        rows.map((node) => {
          const active = drag !== null && drag.pinned === node.pinned;
          const normalizeHalf = (half) => node.blank ? "after" : half;
          return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            SessionNodeItem,
            {
              node,
              currentId,
              now,
              onOpen: open,
              onRenameRequest: onSessionRenameRequest,
              renderSlot,
              renderFactorySlot,
              useContextMenu,
              useContextMenuTarget,
              workspaceLabel: workspaceLabelOf?.(node.id),
              tag: (tagsBySession ?? NO_TAGS_BY_SESSION)[node.id],
              onReveal: node.id === revealSessionId ? () => {
                onSessionRevealed(node.id);
              } : void 0,
              useSessionAccess,
              drag: {
                start: () => {
                  dropCommitted.current = false;
                  setDrag({ accountKey: FLAT_SESSION_ORDER_KEY, sessionId: node.id, pinned: node.pinned, over: null });
                },
                active,
                marker: active && drag.over?.id === node.id ? drag.over.half : null,
                hover: (half) => {
                  setDrag((current2) => current2 === null ? current2 : {
                    ...current2,
                    over: { id: node.id, half: normalizeHalf(half) }
                  });
                },
                drop: (half) => {
                  if (drag !== null) commitDrag(drag, { id: node.id, half: normalizeHalf(half) });
                },
                end: () => {
                  if (drag?.over !== null && drag?.over !== void 0) commitDrag(drag, drag.over);
                  else setDrag(null);
                  dropCommitted.current = false;
                }
              },
              home,
              t
            },
            node.id
          );
        })
      ]
    }
  ) });
}
function TimeGroups({
  list,
  sessionIds,
  rowState,
  statusFilter,
  bucketExpansion,
  onToggleBucket,
  workspaceLabelOf,
  tagsBySession,
  onLeaveArchivedOnly,
  useSessionStatus,
  useSessionAccess,
  open,
  onSessionRenameRequest,
  usePanelInfo,
  workspaceReady,
  animationResetKey,
  revealSessionId,
  onSessionRevealed,
  renderSlot,
  renderFactorySlot,
  useContextMenuTarget,
  useContextMenu,
  home,
  t,
  setSessionOrder
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const statuses = useSessionStatus((s) => s);
  const now = Date.now();
  const expandedBuckets = (0, import_react4.useMemo)(
    () => TIME_BUCKET_ORDER.filter((key) => bucketExpansion[key] !== false),
    [bucketExpansion]
  );
  const groups = (0, import_react4.useMemo)(
    () => deriveTimeGroups(list, sessionIds, rowState, statuses, { expandedBuckets, now, statusFilter }),
    [expandedBuckets, list, now, rowState, sessionIds, statusFilter, statuses]
  );
  const currentId = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const bucketOf = (0, import_react4.useMemo)(() => {
    const keys = /* @__PURE__ */ new Map();
    for (const group of groups) for (const session of group.sessions) keys.set(session.id, group.key);
    return keys;
  }, [groups]);
  const rows = (0, import_react4.useMemo)(() => groups.flatMap((group) => group.sessions), [groups]);
  const [drag, setDrag] = (0, import_react4.useState)(null);
  const dropCommitted = (0, import_react4.useRef)(false);
  useNativeDragAcceptance(drag !== null);
  const dragBucket = drag === null ? void 0 : bucketOf.get(drag.sessionId);
  const commitDrag = (activeDrag, over) => {
    if (dropCommitted.current) return;
    dropCommitted.current = true;
    setDrag(null);
    if (bucketOf.get(activeDrag.sessionId) !== bucketOf.get(over.id)) return;
    const nextOrder = sessionDragOrder(sessionIds, rows, activeDrag, over);
    if (nextOrder !== void 0) setSessionOrder(FLAT_SESSION_ORDER_KEY, nextOrder);
  };
  const rowKeys = [];
  for (const group of groups) {
    rowKeys.push(`bucket:${group.key}`);
    for (const session of group.sessions) rowKeys.push(`session:${session.id}`);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_dsh_client_ui_primitives5.AnimatedRows,
    {
      className: clsx_default(WorkspaceBrowser_default.list, WorkspaceBrowser_default.flatList),
      role: "tree",
      label: t("section.sessions"),
      rowKeys: rowKeys.length === 0 ? ["empty"] : rowKeys,
      ready: list.phase === "ready" && workspaceReady && drag === null,
      resetKey: animationResetKey,
      children: [
        groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EmptySessions, { rowState, statusFilter, onLeaveArchivedOnly, t }),
        groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            TimeBucketRowItem,
            {
              rowKey: group.key,
              label: t(`timeBucket.${group.key}`),
              count: group.sessionCount,
              expanded: group.expanded,
              onToggle: () => {
                onToggleBucket(group.key, !group.expanded);
              }
            }
          ),
          group.sessions.map((node) => {
            const active = drag !== null && dragBucket === group.key && drag.pinned === node.pinned;
            const half = (side) => node.blank ? "after" : side;
            return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              SessionNodeItem,
              {
                node,
                currentId,
                now,
                onOpen: open,
                onRenameRequest: onSessionRenameRequest,
                renderSlot,
                renderFactorySlot,
                useContextMenu,
                useContextMenuTarget,
                workspaceLabel: workspaceLabelOf?.(node.id),
                tag: (tagsBySession ?? NO_TAGS_BY_SESSION)[node.id],
                onReveal: node.id === revealSessionId ? () => {
                  onSessionRevealed(node.id);
                } : void 0,
                useSessionAccess,
                drag: {
                  start: () => {
                    dropCommitted.current = false;
                    setDrag({ accountKey: FLAT_SESSION_ORDER_KEY, sessionId: node.id, pinned: node.pinned, over: null });
                  },
                  active,
                  marker: drag !== null && active && drag.over?.id === node.id ? drag.over.half : null,
                  hover: (side) => {
                    setDrag((current2) => {
                      if (current2 === null) return current2;
                      if (bucketOf.get(current2.sessionId) !== group.key) {
                        return current2.over === null ? current2 : { ...current2, over: null };
                      }
                      const next = { id: node.id, half: half(side) };
                      if (current2.over?.id === next.id && current2.over.half === next.half) return current2;
                      return { ...current2, over: next };
                    });
                  },
                  drop: (side) => {
                    if (drag === null) return;
                    if (bucketOf.get(drag.sessionId) !== group.key) return;
                    commitDrag(drag, { id: node.id, half: half(side) });
                  },
                  end: () => {
                    if (drag?.over !== null && drag?.over !== void 0) commitDrag(drag, drag.over);
                    else setDrag(null);
                    dropCommitted.current = false;
                  }
                },
                home,
                t
              },
              node.id
            );
          })
        ] }, group.key))
      ]
    }
  ) });
}
function TagGroups({
  list,
  sessionIds,
  rowState,
  statusFilter,
  tags,
  sessionTags,
  tagExpansion,
  onToggleTag,
  workspaceLabelOf,
  onLeaveArchivedOnly,
  useSessionStatus,
  useSessionAccess,
  open,
  onSessionRenameRequest,
  usePanelInfo,
  workspaceReady,
  animationResetKey,
  revealSessionId,
  onSessionRevealed,
  renderSlot,
  renderFactorySlot,
  useContextMenuTarget,
  useContextMenu,
  home,
  t
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const statuses = useSessionStatus((s) => s);
  const now = Date.now();
  const expandedTags = (0, import_react4.useMemo)(
    () => [...tags.map((tag) => tag.id), UNTAGGED_TAG_KEY].filter((key) => tagExpansion[key] !== false),
    [tagExpansion, tags]
  );
  const untaggedLabel = t("appearance.tag.untagged");
  const colorLabel = (0, import_react4.useCallback)((color) => t("appearance.color." + color), [t]);
  const groups = (0, import_react4.useMemo)(
    () => deriveTagGroups(list, sessionIds, rowState, statuses, {
      tags,
      sessionTags,
      expandedTags,
      statusFilter,
      colorLabel,
      untaggedLabel
    }),
    [colorLabel, expandedTags, list, rowState, sessionIds, sessionTags, statusFilter, statuses, tags, untaggedLabel]
  );
  const currentId = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const rowKeys = [];
  for (const group of groups) {
    rowKeys.push(`bucket:${group.key}`);
    for (const session of group.sessions) rowKeys.push(`session:${session.id}`);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_dsh_client_ui_primitives5.AnimatedRows,
    {
      className: clsx_default(WorkspaceBrowser_default.list, WorkspaceBrowser_default.flatList),
      role: "tree",
      label: t("section.sessions"),
      rowKeys: rowKeys.length === 0 ? ["empty"] : rowKeys,
      ready: list.phase === "ready" && workspaceReady,
      resetKey: animationResetKey,
      children: [
        groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EmptySessions, { rowState, statusFilter, onLeaveArchivedOnly, t }),
        groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            TimeBucketRowItem,
            {
              rowKey: group.key,
              label: group.label,
              count: group.sessionCount,
              expanded: group.expanded,
              accent: group.color === void 0 ? void 0 : sessionColorHex(group.color),
              onToggle: () => {
                onToggleTag(group.key, !group.expanded);
              }
            }
          ),
          group.sessions.map((node) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            SessionNodeItem,
            {
              node,
              currentId,
              now,
              onOpen: open,
              onRenameRequest: onSessionRenameRequest,
              renderSlot,
              renderFactorySlot,
              useContextMenu,
              useContextMenuTarget,
              workspaceLabel: workspaceLabelOf?.(node.id),
              onReveal: node.id === revealSessionId ? () => {
                onSessionRevealed(node.id);
              } : void 0,
              useSessionAccess,
              home,
              t
            },
            node.id
          ))
        ] }, group.key))
      ]
    }
  ) });
}
function StatusTabs({ counts, value, onChange, t }) {
  const tabs = [
    { id: "all", label: t("statusTab.all") },
    { id: "running", label: t("statusTab.running") },
    { id: "pending", label: t("statusTab.pending") },
    { id: "unread", label: t("statusTab.unread") }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: WorkspaceBrowser_default.statusTabs, role: "tablist", "aria-label": t("statusTabs.label"), children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": value === tab.id,
      className: clsx_default(WorkspaceBrowser_default.statusTab, value === tab.id && WorkspaceBrowser_default.statusTabActive),
      onClick: () => {
        onChange(tab.id);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: tab.label }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: WorkspaceBrowser_default.statusTabCount, children: counts[tab.id] })
      ]
    },
    tab.id
  )) });
}
function SearchResults({
  useSessions,
  useSessionStatus,
  open,
  onUnarchive,
  workspaces,
  archivedSessionIds,
  archivedFilter,
  query,
  remote,
  resultLimit,
  usePanelInfo,
  useSessionAccess,
  t
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const list = useSessions((s) => s);
  const statuses = useSessionStatus((s) => s);
  const currentRemote = remote.query === query ? remote : { query, status: "loading", items: [], hasMore: false };
  const results = (0, import_react4.useMemo)(
    () => deriveSearchResults(
      list,
      workspaces,
      query,
      archivedSessionIds,
      archivedFilter,
      statuses,
      currentRemote,
      resultLimit
    ),
    [list, workspaces, query, archivedSessionIds, archivedFilter, statuses, currentRemote, resultLimit]
  );
  const pending = currentRemote.status === "loading";
  const currentId = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: WorkspaceBrowser_default.list, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: WorkspaceBrowser_default.searchTree, role: "tree", "aria-label": t("search.results.aria"), children: results.items.map((result) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      SearchResultItem,
      {
        result,
        currentId,
        onOpen: open,
        onUnarchive,
        useSessionAccess,
        t
      },
      result.id
    )) }),
    pending && /* Two skeleton rows on an empty list, one when local matches already
       show and only the content hits are outstanding. */
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { role: "status", "aria-label": t("search.pending"), children: (results.items.length === 0 ? [0, 1] : [0]).map((i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: WorkspaceBrowser_default.skeletonRow, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: WorkspaceBrowser_default.skeletonDot }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: WorkspaceBrowser_default.skeletonBars, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: WorkspaceBrowser_default.skeletonBar }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: clsx_default(WorkspaceBrowser_default.skeletonBar, WorkspaceBrowser_default.skeletonBarWide) })
      ] })
    ] }, i)) }),
    !pending && results.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: WorkspaceBrowser_default.empty, children: t("search.noMatches") }),
    results.hasMore && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: WorkspaceBrowser_default.searchStatus, children: t("search.hasMore", { n: resultLimit }) })
  ] }) });
}
function WorkspaceBrowser({
  wide,
  usePanelInfo,
  expandSidebar,
  useSectionScroller,
  useSessions,
  useSessionStatus,
  useSessionAccess,
  useWorkspaceAccess,
  useWorkspaces,
  useStore,
  actions,
  startSession,
  open,
  requestSessionRename,
  notifyArchivedNotOpenable,
  renameWorkspace,
  useWorkspaceActionRequest,
  settleWorkspaceAction,
  deleteWorkspace,
  insertWorkspaceBefore,
  unarchiveSession,
  createWorkspace,
  searchSessions,
  searchResultLimit,
  useDirectoryFlow,
  useHostInfo,
  useShortcuts,
  useWorkspaceShortcuts,
  requestSearch,
  requestAddWorkspace,
  closeAddWorkspace,
  setDirectoryBusy,
  renderSlot,
  renderFactorySlot,
  useContextMenuTarget,
  useContextMenu,
  t
}) {
  const home = useHostInfo((info) => info.home);
  const shortcuts = useShortcuts((rows) => rows);
  const searchShortcut = shortcuts.find((row) => row.id === "session.search");
  const addShortcut = shortcuts.find((row) => row.id === "workspace.add");
  const shortcutState = useWorkspaceShortcuts((state) => state);
  const list = useSessions((state) => state);
  const storedWorkspaces = useWorkspaces((state) => state.items);
  const defaultWorkspaceName = t("workspace.defaultName");
  const workspaces = (0, import_react4.useMemo)(
    () => storedWorkspaces.map((workspace) => ({
      ...workspace,
      title: workspaceDisplayTitle(workspace.title, defaultWorkspaceName)
    })),
    [storedWorkspaces, defaultWorkspaceName]
  );
  const workspacePhase = useWorkspaces((state) => state.phase);
  const workspaceStreamState = useWorkspaces((state) => state.state);
  const archivedSessionIds = useWorkspaces((state) => state.archivedSessionIds);
  const pinnedSessionIds = useWorkspaces((state) => state.pinnedSessionIds);
  const directoryFlowAvailable = useDirectoryFlow((occupied) => occupied);
  const groupBy = useStore((s) => s.groupBy);
  const orderBy = useStore((s) => s.orderBy);
  const archivedFilter = useStore((s) => s.archivedFilter ?? "default");
  const statusFilter = useStore((s) => s.statusFilter ?? "all");
  const timeBucketExpansion = useStore((s) => s.timeBucketExpansion ?? {});
  const textScale = useStore((s) => s.textScale ?? "normal");
  const showWorkspaceName = useStore((s) => s.showWorkspaceName === true);
  const workspaceIcons = useStore((s) => s.workspaceIcons ?? NO_APPEARANCE);
  const tags = useStore((s) => s.tags ?? NO_TAGS);
  const sessionTags = useStore((s) => s.sessionTags ?? NO_APPEARANCE);
  const tagExpansion = useStore((s) => s.tagExpansion ?? NO_FOLDS);
  const tagsBySession = (0, import_react4.useMemo)(() => {
    if (tags.length === 0) return NO_TAGS_BY_SESSION;
    const byId = new Map(tags.map((tag) => [tag.id, tag]));
    const lookup = {};
    for (const [sessionId, tagId] of Object.entries(sessionTags)) {
      const tag = byId.get(tagId);
      if (tag !== void 0) lookup[sessionId] = tag;
    }
    return lookup;
  }, [sessionTags, tags]);
  const appearanceActions = actions;
  const groupExpansion = useStore((s) => s.groupExpansion);
  const sessionOrderByAccount = useStore((s) => s.sessionOrderByAccount);
  const guardedOpen = (sessionId) => {
    if (archivedSessionIds.includes(sessionId)) {
      notifyArchivedNotOpenable();
      return;
    }
    open(sessionId);
  };
  const leaveArchivedOnly = () => {
    actions.setArchivedFilter("default");
  };
  const workspaceReady = workspacePhase === "ready" && workspaceStreamState !== "loading";
  const mainSessionId2 = Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const currentBlank = mainSessionId2 !== void 0 && list.byId[mainSessionId2]?.blank === true ? mainSessionId2 : void 0;
  const ungroupedMemberIds = (0, import_react4.useMemo)(() => {
    const accounted = new Set(workspaces.flatMap((workspace) => workspace.sessionIds));
    return list.ids.filter((id) => list.byId[id] !== void 0 && !accounted.has(id));
  }, [list, workspaces]);
  const orderState = (0, import_react4.useMemo)(
    () => ({ pinnedSessionIds, archivedSessionIds }),
    [archivedSessionIds, pinnedSessionIds]
  );
  const rowState = (0, import_react4.useMemo)(
    () => ({ ...orderState, archivedFilter }),
    [orderState, archivedFilter]
  );
  const flatMemberIds = (0, import_react4.useMemo)(() => sessionMemberIds(list), [list]);
  const orderedWorkspaces = (0, import_react4.useMemo)(() => workspaces.map((workspace) => {
    const memberIds = workspace.sessionIds;
    const baseOrder = orderBy === "updated" ? orderByRecency(memberIds, list.byId) : reconcileManualOrder(memberIds, sessionOrderByAccount[workspace.workspaceId], list.byId, orderState);
    return {
      ...workspace,
      sessionIds: pinCurrentBlank(
        baseOrder,
        currentBlank !== void 0 && memberIds.includes(currentBlank) ? currentBlank : void 0
      )
    };
  }), [currentBlank, list.byId, orderBy, orderState, sessionOrderByAccount, workspaces]);
  const orderedUngroupedSessionIds = (0, import_react4.useMemo)(() => {
    const baseOrder = orderBy === "updated" ? orderByRecency(ungroupedMemberIds, list.byId) : reconcileManualOrder(ungroupedMemberIds, sessionOrderByAccount[UNGROUPED_KEY], list.byId, orderState);
    return pinCurrentBlank(
      baseOrder,
      currentBlank !== void 0 && ungroupedMemberIds.includes(currentBlank) ? currentBlank : void 0
    );
  }, [currentBlank, list.byId, orderBy, orderState, sessionOrderByAccount, ungroupedMemberIds]);
  const orderedFlatSessionIds = (0, import_react4.useMemo)(() => {
    const baseOrder = orderBy === "updated" ? orderByRecency(flatMemberIds, list.byId) : reconcileManualOrder(flatMemberIds, sessionOrderByAccount[FLAT_SESSION_ORDER_KEY], list.byId, orderState);
    return pinCurrentBlank(
      baseOrder,
      currentBlank !== void 0 && flatMemberIds.includes(currentBlank) ? currentBlank : void 0
    );
  }, [currentBlank, flatMemberIds, list.byId, orderBy, orderState, sessionOrderByAccount]);
  const sessionStatuses2 = useSessionStatus((state) => state);
  const statusCounts = (0, import_react4.useMemo)(() => {
    const rows = deriveFlat(list, orderedFlatSessionIds, rowState, sessionStatuses2);
    return {
      all: rows.length,
      running: rows.filter((row) => matchesStatusFilter(row, "running")).length,
      pending: rows.filter((row) => matchesStatusFilter(row, "pending")).length,
      unread: rows.filter((row) => matchesStatusFilter(row, "unread")).length
    };
  }, [list, orderedFlatSessionIds, rowState, sessionStatuses2]);
  const workspaceLabelOf = (0, import_react4.useMemo)(() => {
    if (!showWorkspaceName) return void 0;
    const labels = /* @__PURE__ */ new Map();
    for (const workspace of workspaces) {
      for (const id of workspace.sessionIds) labels.set(id, workspace.title);
    }
    return (id) => labels.get(id);
  }, [workspaces, showWorkspaceName]);
  const typeScaleStyle = (0, import_react4.useMemo)(() => {
    const preset = TEXT_SCALE_CSS[textScale];
    return {
      "--dsh-sidebar-title-size": preset.title,
      "--dsh-sidebar-title-line": preset.line,
      "--dsh-sidebar-meta-size": preset.meta,
      "--dsh-sidebar-time-size": preset.time,
      "--dsh-sidebar-row-height": preset.row,
      "--dsh-sidebar-row-gap": preset.rowGap,
      "--dsh-sidebar-group-gap": preset.groupGap
    };
  }, [textScale]);
  const activeSessionOrders = (0, import_react4.useMemo)(() => Object.fromEntries([
    ...orderedWorkspaces.map((workspace) => [workspace.workspaceId, workspace.sessionIds]),
    [UNGROUPED_KEY, orderedUngroupedSessionIds],
    [FLAT_SESSION_ORDER_KEY, orderedFlatSessionIds]
  ]), [orderedFlatSessionIds, orderedUngroupedSessionIds, orderedWorkspaces]);
  (0, import_react4.useEffect)(() => {
    if (workspacePhase !== "ready") return;
    actions.retainAccountKeys([
      UNGROUPED_KEY,
      FLAT_SESSION_ORDER_KEY,
      ...workspaces.map((workspace) => workspace.workspaceId)
    ]);
  }, [actions.retainAccountKeys, workspacePhase, workspaces]);
  (0, import_react4.useEffect)(() => {
    if (list.phase !== "ready" || workspaceReady || orderBy !== "manual" || currentBlank === void 0) return;
    const changed = {};
    for (const [key, ids] of Object.entries(activeSessionOrders)) {
      if (key !== FLAT_SESSION_ORDER_KEY && workspacePhase !== "ready") continue;
      const saved = sessionOrderByAccount[key] ?? [];
      if (ids[0] !== currentBlank || saved[0] === currentBlank) continue;
      changed[key] = [currentBlank, ...saved.filter((id) => id !== currentBlank)];
    }
    if (Object.keys(changed).length > 0) actions.syncSessionOrders(changed);
  }, [
    actions.syncSessionOrders,
    activeSessionOrders,
    currentBlank,
    list.phase,
    orderBy,
    sessionOrderByAccount,
    workspacePhase,
    workspaceReady
  ]);
  (0, import_react4.useEffect)(() => {
    if (list.phase !== "ready" || !workspaceReady || orderBy !== "manual" || currentBlank === void 0) return;
    const moved = Object.entries(activeSessionOrders).some(([key, ids]) => ids[0] === currentBlank && sessionOrderByAccount[key]?.[0] !== currentBlank);
    if (moved) actions.syncSessionOrders(activeSessionOrders);
  }, [
    actions.syncSessionOrders,
    activeSessionOrders,
    currentBlank,
    list.phase,
    orderBy,
    sessionOrderByAccount,
    workspaceReady
  ]);
  const saveSessionOrder = (accountKey, order) => {
    actions.setSessionOrder(accountKey, order, activeSessionOrders);
  };
  const [query, setQuery] = (0, import_react4.useState)("");
  const [searchExpanded, setSearchExpanded] = (0, import_react4.useState)(false);
  const [searchSpacingMotionEnabled, setSearchSpacingMotionEnabled] = (0, import_react4.useState)(false);
  const [searchOnExpand, setSearchOnExpand] = (0, import_react4.useState)(false);
  const [lastSearchRequest, setLastSearchRequest] = (0, import_react4.useState)(0);
  if (lastSearchRequest !== shortcutState.searchRequest) {
    setLastSearchRequest(shortcutState.searchRequest);
    if (shortcutState.searchRequest !== 0) {
      setSearchExpanded(true);
      setSearchSpacingMotionEnabled(wide);
      if (!wide) setSearchOnExpand(true);
    }
  }
  if (!wide && searchSpacingMotionEnabled) setSearchSpacingMotionEnabled(false);
  const changeSearchExpanded = (expanded) => {
    setSearchSpacingMotionEnabled(wide);
    setSearchExpanded(expanded);
  };
  const [revealSessionId, setRevealSessionId] = (0, import_react4.useState)(void 0);
  const normalizedQuery = sanitizeSearchQuery(query).trim();
  const [remoteSearch, setRemoteSearch] = (0, import_react4.useState)({
    query: "",
    status: "idle",
    items: [],
    hasMore: false
  });
  const searchRoot = (0, import_react4.useRef)(null);
  const searchInput = (0, import_react4.useRef)(null);
  const { bindScrollerRef } = useSectionScroller();
  const focusSearch = (0, import_react4.useCallback)(() => {
    searchInput.current?.focus({ preventScroll: true });
  }, []);
  const wsPickerOpen = shortcutState.addRequested;
  const wsPlusRef = (0, import_react4.useRef)(null);
  const workspaceActionRequest = useWorkspaceActionRequest((value) => value);
  const openSearchResult = (sessionId) => {
    if (archivedSessionIds.includes(sessionId)) {
      notifyArchivedNotOpenable();
      return;
    }
    setRevealSessionId(sessionId);
    setQuery("");
    changeSearchExpanded(false);
    open(sessionId);
  };
  const acknowledgeSessionReveal = (sessionId) => {
    setRevealSessionId((current2) => current2 === sessionId ? void 0 : current2);
  };
  (0, import_react4.useEffect)(() => {
    if (normalizedQuery !== "") setRevealSessionId(void 0);
  }, [normalizedQuery]);
  (0, import_react4.useEffect)(() => {
    if (wide && searchOnExpand) {
      const timer = window.setTimeout(() => {
        focusSearch();
        setSearchOnExpand(false);
      }, EXPAND_SLIDE_MS);
      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [wide, searchOnExpand, focusSearch]);
  (0, import_react4.useEffect)(() => {
    if (shortcutState.searchRequest === 0) return;
    closeAddWorkspace();
    if (!wide || searchInput.current?.closest("[inert]")) {
      setSearchOnExpand(true);
      expandSidebar();
    } else focusSearch();
  }, [shortcutState.searchRequest, focusSearch]);
  (0, import_react4.useEffect)(() => {
    if (!wide || !searchExpanded || searchOnExpand) return;
    focusSearch();
  }, [wide, searchExpanded, searchOnExpand, focusSearch]);
  (0, import_react4.useEffect)(() => {
    if (!wide || !searchExpanded || searchOnExpand) return;
    const onClick = (event) => {
      if (!(event.target instanceof Node) || searchRoot.current?.contains(event.target) === true) return;
      searchInput.current?.blur();
      if (normalizedQuery !== "") return;
      changeSearchExpanded(false);
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [normalizedQuery, wide, searchExpanded, searchOnExpand]);
  (0, import_react4.useEffect)(() => {
    if (normalizedQuery === "") {
      setRemoteSearch({ query: "", status: "idle", items: [], hasMore: false });
      return;
    }
    const controller = new AbortController();
    setRemoteSearch({
      query: normalizedQuery,
      status: "loading",
      items: [],
      hasMore: false
    });
    const timer = window.setTimeout(() => {
      searchSessions(normalizedQuery, controller.signal).then((result) => {
        if (controller.signal.aborted) return;
        setRemoteSearch({
          query: normalizedQuery,
          status: "ready",
          items: result.items,
          hasMore: result.hasMore
        });
      }).catch(() => {
        if (controller.signal.aborted) return;
        setRemoteSearch({
          query: normalizedQuery,
          status: "error",
          items: [],
          hasMore: false
        });
      });
    }, SEARCH_DEBOUNCE_MS);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [normalizedQuery, searchSessions]);
  const onSessionUnarchive = (sessionId) => {
    unarchiveSession(sessionId).catch((reason) => {
      console.warn("session unarchive rejected:", reason);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.root, !wide && WorkspaceBrowser_default.rail), style: typeScaleStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.sectionHeader, wide && searchSpacingMotionEnabled && WorkspaceBrowser_default.searchSpacingMotion), "data-sidebar-workspace-header": "", children: [
      wide && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: clsx_default(WorkspaceBrowser_default.sectionLabel, WorkspaceBrowser_default.wide, searchExpanded && WorkspaceBrowser_default.sectionLabelHidden), children: groupBy === "flat" || groupBy === "time" ? t("section.sessions") : t("section.workspaces") }),
      wide && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: clsx_default(WorkspaceBrowser_default.searchSlot, searchExpanded && WorkspaceBrowser_default.searchSlotExpanded), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "div",
        {
          ref: searchRoot,
          className: clsx_default(WorkspaceBrowser_default.search, searchExpanded && WorkspaceBrowser_default.searchExpanded),
          onClick: () => {
            closeAddWorkspace();
            changeSearchExpanded(true);
            focusSearch();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.Tooltip, { label: t("search"), shortcutKeys: searchShortcut?.keys, side: "bottom", delayMs: 500, disabled: searchExpanded, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                type: "button",
                className: WorkspaceBrowser_default.searchButton,
                "aria-label": t("search.sessions.aria"),
                "aria-keyshortcuts": searchShortcut?.aria,
                "aria-expanded": searchExpanded,
                onClick: () => {
                  requestSearch();
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconSearchOutlineRegular, { size: searchExpanded ? 11 : 14 })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                ref: searchInput,
                className: WorkspaceBrowser_default.searchInput,
                type: "text",
                placeholder: t("search.placeholder"),
                maxLength: SEARCH_QUERY_MAX_CODE_UNITS,
                value: query,
                tabIndex: searchExpanded ? 0 : -1,
                onChange: (e) => {
                  setQuery(sanitizeSearchQuery(e.target.value));
                },
                onKeyDown: (e) => {
                  if (e.key !== "Escape") return;
                  setQuery("");
                  changeSearchExpanded(false);
                }
              }
            ),
            searchExpanded && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                type: "button",
                className: WorkspaceBrowser_default.clearButton,
                "aria-label": t("search.clear"),
                onClick: (e) => {
                  e.stopPropagation();
                  setQuery("");
                  changeSearchExpanded(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconCloseFillRegular, {})
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.headerActions, wide && searchExpanded && WorkspaceBrowser_default.headerActionsHidden), children: [
        wide && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          ViewOptionsMenu,
          {
            groupBy,
            orderBy,
            archivedFilter,
            textScale,
            showWorkspaceName,
            onGroupPick: actions.setGroupBy,
            onOrderPick: (mode) => {
              actions.setOrderBy(mode, activeSessionOrders);
            },
            onArchivedFilterPick: actions.setArchivedFilter,
            onTextScalePick: actions.setTextScale,
            onShowWorkspaceNameToggle: actions.setShowWorkspaceName,
            t
          }
        ),
        directoryFlowAvailable && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.Tooltip, { label: t("workspace.add"), shortcutKeys: addShortcut?.keys, side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            ref: wsPlusRef,
            type: "button",
            className: WorkspaceBrowser_default.iconButton,
            "aria-label": t("workspace.add"),
            "aria-keyshortcuts": addShortcut?.aria,
            onClick: () => {
              requestAddWorkspace();
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconProjectAddOutlineRegular, { size: wide ? 16 : 18 })
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        WorkspacePickFlow,
        {
          t,
          open: wsPickerOpen,
          anchorRef: wsPlusRef,
          useWorkspaces,
          createWorkspace,
          useDirectoryFlow,
          renderDirectoryFlow: (owner) => renderSlot("sidebar.workspaces.directoryFlow", owner),
          addOnly: true,
          onBusyChange: setDirectoryBusy,
          side: "right",
          onPick: (workspaceId) => {
            closeAddWorkspace();
            startSession(workspaceId, { clearPreviousDraft: false });
          },
          onClose: () => {
            closeAddWorkspace();
          }
        }
      )
    ] }),
    wide && !searchExpanded && normalizedQuery === "" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StatusTabs, { counts: statusCounts, value: statusFilter, onChange: actions.setStatusFilter, t }),
    !wide && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: WorkspaceBrowser_default.search, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.Tooltip, { label: t("search"), shortcutKeys: searchShortcut?.keys, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "button",
        className: WorkspaceBrowser_default.searchButton,
        "aria-label": t("search.sessions.aria"),
        "aria-keyshortcuts": searchShortcut?.aria,
        onClick: () => {
          requestSearch();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives5.IconSearchOutlineRegular, { size: 18 })
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { ref: wide ? bindScrollerRef : void 0, className: WorkspaceBrowser_default.listArea, "data-sidebar-list-area": "", children: wide && (normalizedQuery !== "" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      SearchResults,
      {
        usePanelInfo,
        useSessionAccess,
        useSessions,
        useSessionStatus,
        open: openSearchResult,
        onUnarchive: onSessionUnarchive,
        workspaces,
        archivedSessionIds,
        archivedFilter,
        query: normalizedQuery,
        remote: remoteSearch,
        resultLimit: searchResultLimit,
        t
      }
    ) : groupBy === "time" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      TimeGroups,
      {
        useSessionAccess,
        usePanelInfo,
        list,
        sessionIds: orderedFlatSessionIds,
        rowState,
        statusFilter,
        workspaceLabelOf,
        tagsBySession,
        bucketExpansion: timeBucketExpansion,
        onToggleBucket: actions.setTimeBucketExpanded,
        onLeaveArchivedOnly: leaveArchivedOnly,
        setSessionOrder: saveSessionOrder,
        workspaceReady,
        animationResetKey: `${groupBy}/${orderBy}/${archivedFilter}/${statusFilter}`,
        useSessionStatus,
        open: guardedOpen,
        onSessionRenameRequest: requestSessionRename,
        renderSlot,
        renderFactorySlot,
        useContextMenu,
        useContextMenuTarget,
        revealSessionId,
        onSessionRevealed: acknowledgeSessionReveal,
        home,
        t
      }
    ) : groupBy === "tag" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      TagGroups,
      {
        useSessionAccess,
        usePanelInfo,
        list,
        sessionIds: orderedFlatSessionIds,
        rowState,
        statusFilter,
        tags,
        sessionTags,
        tagExpansion,
        onToggleTag: actions.setTagExpanded,
        workspaceLabelOf,
        onLeaveArchivedOnly: leaveArchivedOnly,
        workspaceReady,
        animationResetKey: `${groupBy}/${orderBy}/${archivedFilter}/${statusFilter}`,
        useSessionStatus,
        open: guardedOpen,
        onSessionRenameRequest: requestSessionRename,
        renderSlot,
        renderFactorySlot,
        useContextMenu,
        useContextMenuTarget,
        revealSessionId,
        onSessionRevealed: acknowledgeSessionReveal,
        home,
        t
      }
    ) : groupBy === "flat" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      FlatList,
      {
        useSessionAccess,
        usePanelInfo,
        list,
        sessionIds: orderedFlatSessionIds,
        rowState,
        statusFilter,
        workspaceLabelOf,
        tagsBySession,
        onLeaveArchivedOnly: leaveArchivedOnly,
        workspaceReady,
        animationResetKey: `${groupBy}/${orderBy}/${archivedFilter}/${statusFilter}`,
        useSessionStatus,
        open: guardedOpen,
        onSessionRenameRequest: requestSessionRename,
        renderSlot,
        renderFactorySlot,
        useContextMenu,
        useContextMenuTarget,
        setSessionOrder: saveSessionOrder,
        revealSessionId,
        onSessionRevealed: acknowledgeSessionReveal,
        home,
        t
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      SessionTree,
      {
        useSessionAccess,
        useWorkspaceAccess,
        usePanelInfo,
        list,
        shortcuts,
        useSessionStatus,
        onSessionRenameRequest: requestSessionRename,
        renderSlot,
        renderFactorySlot,
        useContextMenu,
        useContextMenuTarget,
        workspaces: orderedWorkspaces,
        ungroupedSessionIds: orderedUngroupedSessionIds,
        workspaceReady,
        workspaceIcons,
        tagsBySession,
        nestWorkspaces: groupBy === "workspace-tree",
        animationResetKey: `${groupBy}/${orderBy}/${archivedFilter}/${statusFilter}`,
        statusFilter,
        groupExpansion,
        setGroupExpanded: actions.setGroupExpanded,
        setSessionOrder: saveSessionOrder,
        rowState,
        onLeaveArchivedOnly: leaveArchivedOnly,
        startSession,
        open: guardedOpen,
        insertWorkspaceBefore,
        revealSessionId,
        onSessionRevealed: acknowledgeSessionReveal,
        home,
        t
      }
    )) }),
    workspaceActionRequest !== null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      WorkspaceDialogs,
      {
        request: workspaceActionRequest,
        workspaces,
        renameWorkspace,
        deleteWorkspace,
        settleWorkspaceAction,
        t
      },
      `${workspaceActionRequest.action}/${workspaceActionRequest.workspaceId}`
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      AppearanceDialogs,
      {
        t,
        workspaceIcons,
        tags,
        sessionTags,
        onWorkspaceIcon: (workspaceId, spec) => {
          appearanceActions.setWorkspaceIcon?.(workspaceId, spec);
        },
        onAssignTag: (sessionId, tagId) => {
          appearanceActions.setSessionTag?.(sessionId, tagId);
        },
        onCreateTag: (sessionId, name2, color) => {
          appearanceActions.createTag?.(sessionId, name2, color);
        },
        onUpdateTag: (tagId, name2, color) => {
          appearanceActions.updateTag?.(tagId, name2, color);
        },
        onDeleteTag: (tagId) => {
          appearanceActions.deleteTag?.(tagId);
        }
      }
    )
  ] });
}

// src/browser/locales.ts
var appearanceZh = {
  "appearance.workspaceIcon": "工作区图标",
  "appearance.sessionColor": "标签",
  "appearance.icon.title": "选择图标",
  "appearance.color.title": "选择标签",
  "appearance.icon.hint": "显示在工作区名称前",
  "appearance.color.hint": "给会话打上标签，可按标签分组",
  "appearance.tab.emoji": "Emoji",
  "appearance.tab.icon": "图标",
  "appearance.search": "搜索图标",
  "appearance.noMatches": "没有匹配的图标",
  "appearance.reset": "恢复默认",
  "appearance.done": "完成",
  "appearance.noColor": "无标签",
  "appearance.tag.name": "名称",
  "appearance.tag.placeholder": "给标签起个名字",
  "appearance.tag.save": "保存",
  "appearance.tag.create": "创建",
  "appearance.tag.new": "新建标签",
  "appearance.tag.delete": "删除标签",
  "appearance.cancel": "取消",
  "appearance.tag.edit": "重命名",
  "appearance.tag.editing": "编辑「{name}」",
  "appearance.tag.deleteTitle": "删除标签",
  "appearance.tag.deleteBody": "使用「{name}」的会话：{count} 个。删除后，这些会话会变成无标签。",
  "appearance.tag.deleteBodyNone": "没有会话在使用「{name}」。",
  "appearance.tag.confirm": "删除",
  "appearance.tag.untagged": "无标签",
  "appearance.group.work": "工作",
  "appearance.group.tech": "技术",
  "appearance.group.nature": "自然",
  "appearance.group.life": "生活",
  "appearance.group.create": "创作",
  "appearance.group.misc": "其他",
  "appearance.group.animals": "动物",
  "appearance.group.food": "食物",
  "appearance.group.fun": "趣味",
  "appearance.group.symbols": "符号",
  "appearance.color.red": "红",
  "appearance.color.orange": "橙",
  "appearance.color.amber": "琥珀",
  "appearance.color.green": "绿",
  "appearance.color.teal": "青绿",
  "appearance.color.blue": "蓝",
  "appearance.color.violet": "紫",
  "appearance.color.pink": "粉",
  "appearance.color.gray": "灰"
};
var appearanceEn = {
  "appearance.workspaceIcon": "Workspace icon",
  "appearance.sessionColor": "Tag",
  "appearance.icon.title": "Choose an icon",
  "appearance.color.title": "Choose a tag",
  "appearance.icon.hint": "Shown before the workspace name",
  "appearance.color.hint": "Tags this session; tags also group the sidebar",
  "appearance.tab.emoji": "Emoji",
  "appearance.tab.icon": "Icons",
  "appearance.search": "Search icons",
  "appearance.noMatches": "No matching icon",
  "appearance.reset": "Reset",
  "appearance.done": "Done",
  "appearance.noColor": "No tag",
  "appearance.tag.name": "Name",
  "appearance.tag.placeholder": "Name this tag",
  "appearance.tag.save": "Save",
  "appearance.tag.create": "Create",
  "appearance.tag.new": "New tag",
  "appearance.tag.delete": "Delete tag",
  "appearance.cancel": "Cancel",
  "appearance.tag.edit": "Rename",
  "appearance.tag.editing": "Editing “{name}”",
  "appearance.tag.deleteTitle": "Delete tag",
  "appearance.tag.deleteBody": "Sessions using “{name}”: {count}. They become untagged after deletion.",
  "appearance.tag.deleteBodyNone": "No session uses “{name}”.",
  "appearance.tag.confirm": "Delete",
  "appearance.tag.untagged": "Untagged",
  "appearance.group.work": "Work",
  "appearance.group.tech": "Tech",
  "appearance.group.nature": "Nature",
  "appearance.group.life": "Life",
  "appearance.group.create": "Create",
  "appearance.group.misc": "More",
  "appearance.group.animals": "Animals",
  "appearance.group.food": "Food",
  "appearance.group.fun": "Fun",
  "appearance.group.symbols": "Symbols",
  "appearance.color.red": "Red",
  "appearance.color.orange": "Orange",
  "appearance.color.amber": "Amber",
  "appearance.color.green": "Green",
  "appearance.color.teal": "Teal",
  "appearance.color.blue": "Blue",
  "appearance.color.violet": "Violet",
  "appearance.color.pink": "Pink",
  "appearance.color.gray": "Gray"
};
var appearanceJa = {
  "appearance.workspaceIcon": "ワークスペースのアイコン",
  "appearance.sessionColor": "タグ",
  "appearance.icon.title": "アイコンを選択",
  "appearance.color.title": "タグを選択",
  "appearance.icon.hint": "ワークスペース名の前に表示",
  "appearance.color.hint": "セッションに付けるタグ。タグでグループ化できます",
  "appearance.tab.emoji": "絵文字",
  "appearance.tab.icon": "アイコン",
  "appearance.search": "アイコンを検索",
  "appearance.noMatches": "一致するアイコンなし",
  "appearance.reset": "既定に戻す",
  "appearance.done": "完了",
  "appearance.noColor": "タグなし",
  "appearance.tag.name": "名前",
  "appearance.tag.placeholder": "タグ名を入力",
  "appearance.tag.save": "保存",
  "appearance.tag.create": "作成",
  "appearance.tag.new": "新しいタグ",
  "appearance.tag.delete": "タグを削除",
  "appearance.cancel": "キャンセル",
  "appearance.tag.edit": "名前を変更",
  "appearance.tag.editing": "「{name}」を編集",
  "appearance.tag.deleteTitle": "タグを削除",
  "appearance.tag.deleteBody": "「{name}」を使用中のセッション：{count} 件。削除するとタグなしになります。",
  "appearance.tag.deleteBodyNone": "「{name}」を使用中のセッションはありません。",
  "appearance.tag.confirm": "削除",
  "appearance.tag.untagged": "タグなし",
  "appearance.group.work": "仕事",
  "appearance.group.tech": "技術",
  "appearance.group.nature": "自然",
  "appearance.group.life": "暮らし",
  "appearance.group.create": "制作",
  "appearance.group.misc": "その他",
  "appearance.group.animals": "動物",
  "appearance.group.food": "食べ物",
  "appearance.group.fun": "遊び",
  "appearance.group.symbols": "記号",
  "appearance.color.red": "赤",
  "appearance.color.orange": "オレンジ",
  "appearance.color.amber": "琥珀",
  "appearance.color.green": "緑",
  "appearance.color.teal": "青緑",
  "appearance.color.blue": "青",
  "appearance.color.violet": "紫",
  "appearance.color.pink": "ピンク",
  "appearance.color.gray": "グレー"
};
var appearanceEs = {
  "appearance.workspaceIcon": "Icono del espacio de trabajo",
  "appearance.sessionColor": "Etiqueta",
  "appearance.icon.title": "Elegir un icono",
  "appearance.color.title": "Elegir una etiqueta",
  "appearance.icon.hint": "Se muestra antes del nombre",
  "appearance.color.hint": "Etiqueta esta sesión; las etiquetas agrupan la barra",
  "appearance.tab.emoji": "Emoji",
  "appearance.tab.icon": "Iconos",
  "appearance.search": "Buscar iconos",
  "appearance.noMatches": "Sin coincidencias",
  "appearance.reset": "Restablecer",
  "appearance.done": "Listo",
  "appearance.noColor": "Sin etiqueta",
  "appearance.tag.name": "Nombre",
  "appearance.tag.placeholder": "Ponle nombre a la etiqueta",
  "appearance.tag.save": "Guardar",
  "appearance.tag.create": "Crear",
  "appearance.tag.new": "Nueva etiqueta",
  "appearance.tag.delete": "Eliminar etiqueta",
  "appearance.cancel": "Cancelar",
  "appearance.tag.edit": "Renombrar",
  "appearance.tag.editing": "Editando «{name}»",
  "appearance.tag.deleteTitle": "Eliminar etiqueta",
  "appearance.tag.deleteBody": "Sesiones con «{name}»: {count}. Quedarán sin etiqueta al eliminarla.",
  "appearance.tag.deleteBodyNone": "Ninguna sesión usa «{name}».",
  "appearance.tag.confirm": "Eliminar",
  "appearance.tag.untagged": "Sin etiqueta",
  "appearance.group.work": "Trabajo",
  "appearance.group.tech": "Tecnología",
  "appearance.group.nature": "Naturaleza",
  "appearance.group.life": "Vida",
  "appearance.group.create": "Creación",
  "appearance.group.misc": "Otros",
  "appearance.group.animals": "Animales",
  "appearance.group.food": "Comida",
  "appearance.group.fun": "Diversión",
  "appearance.group.symbols": "Símbolos",
  "appearance.color.red": "Rojo",
  "appearance.color.orange": "Naranja",
  "appearance.color.amber": "Ámbar",
  "appearance.color.green": "Verde",
  "appearance.color.teal": "Verde azulado",
  "appearance.color.blue": "Azul",
  "appearance.color.violet": "Violeta",
  "appearance.color.pink": "Rosa",
  "appearance.color.gray": "Gris"
};
var appearanceFr = {
  "appearance.workspaceIcon": "Icône de l’espace de travail",
  "appearance.sessionColor": "Étiquette",
  "appearance.icon.title": "Choisir une icône",
  "appearance.color.title": "Choisir une étiquette",
  "appearance.icon.hint": "Affiché avant le nom",
  "appearance.color.hint": "Étiquette la session ; les étiquettes groupent la barre",
  "appearance.tab.emoji": "Emoji",
  "appearance.tab.icon": "Icônes",
  "appearance.search": "Rechercher des icônes",
  "appearance.noMatches": "Aucune icône",
  "appearance.reset": "Réinitialiser",
  "appearance.done": "Terminé",
  "appearance.noColor": "Sans étiquette",
  "appearance.tag.name": "Nom",
  "appearance.tag.placeholder": "Nommer l’étiquette",
  "appearance.tag.save": "Enregistrer",
  "appearance.tag.create": "Créer",
  "appearance.tag.new": "Nouvelle étiquette",
  "appearance.tag.delete": "Supprimer l’étiquette",
  "appearance.cancel": "Annuler",
  "appearance.tag.edit": "Renommer",
  "appearance.tag.editing": "Modification de « {name} »",
  "appearance.tag.deleteTitle": "Supprimer l’étiquette",
  "appearance.tag.deleteBody": "Sessions utilisant « {name} » : {count}. Elles seront sans étiquette après suppression.",
  "appearance.tag.deleteBodyNone": "Aucune session n’utilise « {name} ».",
  "appearance.tag.confirm": "Supprimer",
  "appearance.tag.untagged": "Sans étiquette",
  "appearance.group.work": "Travail",
  "appearance.group.tech": "Technique",
  "appearance.group.nature": "Nature",
  "appearance.group.life": "Vie",
  "appearance.group.create": "Création",
  "appearance.group.misc": "Divers",
  "appearance.group.animals": "Animaux",
  "appearance.group.food": "Nourriture",
  "appearance.group.fun": "Jeux",
  "appearance.group.symbols": "Symboles",
  "appearance.color.red": "Rouge",
  "appearance.color.orange": "Orange",
  "appearance.color.amber": "Ambre",
  "appearance.color.green": "Vert",
  "appearance.color.teal": "Sarcelle",
  "appearance.color.blue": "Bleu",
  "appearance.color.violet": "Violet",
  "appearance.color.pink": "Rose",
  "appearance.color.gray": "Gris"
};
var appearanceDe = {
  "appearance.workspaceIcon": "Arbeitsbereichssymbol",
  "appearance.sessionColor": "Tag",
  "appearance.icon.title": "Symbol wählen",
  "appearance.color.title": "Tag wählen",
  "appearance.icon.hint": "Erscheint vor dem Namen",
  "appearance.color.hint": "Tagt die Sitzung; Tags gruppieren die Seitenleiste",
  "appearance.tab.emoji": "Emoji",
  "appearance.tab.icon": "Symbole",
  "appearance.search": "Symbole suchen",
  "appearance.noMatches": "Kein passendes Symbol",
  "appearance.reset": "Zurücksetzen",
  "appearance.done": "Fertig",
  "appearance.noColor": "Kein Tag",
  "appearance.tag.name": "Name",
  "appearance.tag.placeholder": "Tag benennen",
  "appearance.tag.save": "Speichern",
  "appearance.tag.create": "Erstellen",
  "appearance.tag.new": "Neuer Tag",
  "appearance.tag.delete": "Tag löschen",
  "appearance.cancel": "Abbrechen",
  "appearance.tag.edit": "Umbenennen",
  "appearance.tag.editing": "„{name}“ bearbeiten",
  "appearance.tag.deleteTitle": "Tag löschen",
  "appearance.tag.deleteBody": "Sitzungen mit „{name}“: {count}. Nach dem Löschen sind sie ohne Tag.",
  "appearance.tag.deleteBodyNone": "Keine Sitzung verwendet „{name}“.",
  "appearance.tag.confirm": "Löschen",
  "appearance.tag.untagged": "Ohne Tag",
  "appearance.group.work": "Arbeit",
  "appearance.group.tech": "Technik",
  "appearance.group.nature": "Natur",
  "appearance.group.life": "Alltag",
  "appearance.group.create": "Kreativ",
  "appearance.group.misc": "Sonstiges",
  "appearance.group.animals": "Tiere",
  "appearance.group.food": "Essen",
  "appearance.group.fun": "Spaß",
  "appearance.group.symbols": "Zeichen",
  "appearance.color.red": "Rot",
  "appearance.color.orange": "Orange",
  "appearance.color.amber": "Bernstein",
  "appearance.color.green": "Grün",
  "appearance.color.teal": "Petrol",
  "appearance.color.blue": "Blau",
  "appearance.color.violet": "Violett",
  "appearance.color.pink": "Rosa",
  "appearance.color.gray": "Grau"
};
var appearanceRu = {
  "appearance.workspaceIcon": "Значок рабочей области",
  "appearance.sessionColor": "Метка",
  "appearance.icon.title": "Выбрать значок",
  "appearance.color.title": "Выбрать метку",
  "appearance.icon.hint": "Показывается перед названием",
  "appearance.color.hint": "Помечает сессию; метки группируют панель",
  "appearance.tab.emoji": "Эмодзи",
  "appearance.tab.icon": "Значки",
  "appearance.search": "Поиск значков",
  "appearance.noMatches": "Нет подходящих значков",
  "appearance.reset": "Сбросить",
  "appearance.done": "Готово",
  "appearance.noColor": "Без метки",
  "appearance.tag.name": "Название",
  "appearance.tag.placeholder": "Назовите метку",
  "appearance.tag.save": "Сохранить",
  "appearance.tag.create": "Создать",
  "appearance.tag.new": "Новая метка",
  "appearance.tag.delete": "Удалить метку",
  "appearance.cancel": "Отмена",
  "appearance.tag.edit": "Переименовать",
  "appearance.tag.editing": "Правка «{name}»",
  "appearance.tag.deleteTitle": "Удалить метку",
  "appearance.tag.deleteBody": "Сеансов с меткой «{name}»: {count}. После удаления они останутся без метки.",
  "appearance.tag.deleteBodyNone": "Ни один сеанс не использует «{name}».",
  "appearance.tag.confirm": "Удалить",
  "appearance.tag.untagged": "Без метки",
  "appearance.group.work": "Работа",
  "appearance.group.tech": "Техника",
  "appearance.group.nature": "Природа",
  "appearance.group.life": "Быт",
  "appearance.group.create": "Творчество",
  "appearance.group.misc": "Другое",
  "appearance.group.animals": "Животные",
  "appearance.group.food": "Еда",
  "appearance.group.fun": "Развлечения",
  "appearance.group.symbols": "Символы",
  "appearance.color.red": "Красный",
  "appearance.color.orange": "Оранжевый",
  "appearance.color.amber": "Янтарный",
  "appearance.color.green": "Зелёный",
  "appearance.color.teal": "Бирюзовый",
  "appearance.color.blue": "Синий",
  "appearance.color.violet": "Фиолетовый",
  "appearance.color.pink": "Розовый",
  "appearance.color.gray": "Серый"
};
var appearancePt = {
  "appearance.workspaceIcon": "Ícone do espaço de trabalho",
  "appearance.sessionColor": "Etiqueta",
  "appearance.icon.title": "Escolher um ícone",
  "appearance.color.title": "Escolher uma etiqueta",
  "appearance.icon.hint": "Aparece antes do nome",
  "appearance.color.hint": "Etiqueta esta sessão; as etiquetas agrupam a barra",
  "appearance.tab.emoji": "Emoji",
  "appearance.tab.icon": "Ícones",
  "appearance.search": "Pesquisar ícones",
  "appearance.noMatches": "Nenhum ícone",
  "appearance.reset": "Redefinir",
  "appearance.done": "Concluído",
  "appearance.noColor": "Sem etiqueta",
  "appearance.tag.name": "Nome",
  "appearance.tag.placeholder": "Dê um nome à etiqueta",
  "appearance.tag.save": "Salvar",
  "appearance.tag.create": "Criar",
  "appearance.tag.new": "Nova etiqueta",
  "appearance.tag.delete": "Excluir etiqueta",
  "appearance.cancel": "Cancelar",
  "appearance.tag.edit": "Renomear",
  "appearance.tag.editing": "Editando “{name}”",
  "appearance.tag.deleteTitle": "Excluir etiqueta",
  "appearance.tag.deleteBody": "Sessões com “{name}”: {count}. Elas ficarão sem etiqueta após excluir.",
  "appearance.tag.deleteBodyNone": "Nenhuma sessão usa “{name}”.",
  "appearance.tag.confirm": "Excluir",
  "appearance.tag.untagged": "Sem etiqueta",
  "appearance.group.work": "Trabalho",
  "appearance.group.tech": "Tecnologia",
  "appearance.group.nature": "Natureza",
  "appearance.group.life": "Vida",
  "appearance.group.create": "Criação",
  "appearance.group.misc": "Outros",
  "appearance.group.animals": "Animais",
  "appearance.group.food": "Comida",
  "appearance.group.fun": "Diversão",
  "appearance.group.symbols": "Símbolos",
  "appearance.color.red": "Vermelho",
  "appearance.color.orange": "Laranja",
  "appearance.color.amber": "Âmbar",
  "appearance.color.green": "Verde",
  "appearance.color.teal": "Turquesa",
  "appearance.color.blue": "Azul",
  "appearance.color.violet": "Violeta",
  "appearance.color.pink": "Rosa",
  "appearance.color.gray": "Cinza"
};
var zh = {
  ...appearanceZh,
  "defaultWorkspace.failed": "无法创建默认工作区，请通过“选择工作区”选择文件夹",
  "draft.workspaceRequired": "请先选择工作区",
  "draft.initializationFailed": "暂时无法填入草稿，请稍后重试",
  "group.ungrouped": "未分组",
  "session.new": "新会话",
  "session.untitled": "未命名",
  "shortcut.noSession": "请先选择一个会话",
  "shortcut.noPicker": "目录选择器不可用",
  "shortcut.directoryBusy": "正在选择或添加工作区",
  "shortcut.noCompletedTurn": "当前会话没有已结束的轮次",
  "shortcut.forkFailed": "无法分叉会话，请重试",
  "section.workspaces": "工作区",
  "section.sessions": "会话",
  "viewOptions.label": "视图选项",
  "groupBy.label": "分组方式",
  "groupBy.workspace": "按工作区",
  "groupBy.workspaceTree": "按工作区树",
  "groupBy.flat": "单列表",
  "groupBy.time": "按时间",
  "groupBy.tag": "按标签",
  "timeBucket.pinned": "置顶",
  "timeBucket.today": "今天",
  "timeBucket.yesterday": "昨天",
  "timeBucket.week": "本周",
  "timeBucket.earlier": "更早",
  "statusTabs.label": "按状态筛选",
  "statusTab.all": "全部",
  "statusTab.running": "运行中",
  "statusTab.pending": "待确认",
  "statusTab.unread": "待查看",
  "orderBy.label": "排序方式",
  "orderBy.manual": "手动排序",
  "orderBy.updated": "最近更新",
  "filterBy.label": "筛选会话",
  "viewOptions.hideArchived": "隐藏已归档",
  "viewOptions.showArchived": "全部对话（显示已归档）",
  "viewOptions.onlyArchived": "仅显示已归档",
  "textSize.label": "字号",
  "textSize.small": "小",
  "textSize.normal": "标准",
  "textSize.large": "大",
  "viewOptions.showWorkspaceName": "显示工作区名称",
  "sessions.expand": "展开其余 {n} 个会话",
  "sessions.collapse": "收起",
  "empty.none": "暂无会话",
  "empty.noneArchived": "暂无已归档会话",
  "empty.viewOthers": "查看其他会话",
  "empty.noMatches": "无匹配结果",
  "workspace.add": "添加工作区",
  "search.sessions.aria": "搜索会话",
  "search.placeholder": "搜索会话名称",
  "search.clear": "清除搜索",
  "search.results.aria": "搜索结果",
  "search.pending": "正在搜索会话历史…",
  "search.noMatches": "无匹配会话",
  "search.hasMore": "仅显示前 {n} 条结果，请缩小搜索范围。",
  "menu.addWorkspace": "添加工作区…",
  "picker.loading": "正在加载工作区…",
  "conflict.named": "已存在名为“{name}”的工作区。",
  "folderError.title": "无法打开文件夹",
  "folderError.retry": "重新选择",
  "rename": "重命名",
  "rename.workspace.title": "重命名工作区",
  "rename.session.title": "重命名会话",
  "field.workspaceName": "工作区名称",
  "field.sessionName": "会话名称",
  "delete.workspace": "删除工作区",
  "delete.desc": "将把“{name}”从工作区列表中移除。文件夹与会话记录会保留，其会话将显示在“未分组”下。",
  "delete.pending": "正在删除工作区…",
  "menu.fork": "分叉会话",
  "menu.archiveSession": "归档会话",
  "menu.unarchiveSession": "取消归档",
  "menu.pinSession": "置顶会话",
  "menu.unpinSession": "取消置顶",
  "menu.sessionId": "复制 Session ID",
  "toast.sessionIdCopied": "Session ID 已复制",
  "toast.sessionIdCopyFailed": "复制失败，请重试",
  "row.archived": "已归档",
  "row.pinned": "已置顶",
  "toast.archivedNotOpenable": "已归档对话暂时无法查看，请取消归档后查看",
  "toast.archived": "会话已归档，可",
  "toast.stoppedAndArchived": "已停止并归档，可",
  "archive.confirm.title": "停止并归档此会话？",
  "archive.confirm.desc": "“{title}”仍有正在进行的工作。归档会先停止这些工作；之后可在侧栏筛选“全部对话（显示已归档）”中恢复会话，被停止的工作不会自动继续。",
  "archive.confirm.activity": "将被停止的工作",
  "archive.confirm.turn": "进行中的回合",
  "archive.confirm.subagents.one": "{n} 个运行中的子智能体：{names}",
  "archive.confirm.subagents.other": "{n} 个运行中的子智能体：{names}",
  "archive.confirm.jobs.one": "{n} 个后台任务：{names}",
  "archive.confirm.jobs.other": "{n} 个后台任务：{names}",
  "archive.confirm.schedules.one": "{n} 条定时提醒：{names}",
  "archive.confirm.schedules.other": "{n} 条定时提醒：{names}",
  "archive.confirm.other.one": "{n} 项其他工作（{kind}）",
  "archive.confirm.other.other": "{n} 项其他工作（{kind}）",
  "archive.confirm.listSeparator": "、",
  "archive.confirm.action": "停止并归档",
  "archive.confirm.pending": "正在停止并归档…",
  "toast.archivedUndo": "撤销",
  "toast.archivedOr": "或",
  "toast.archivedFilter": "筛选已归档会话",
  "toast.pinFailed": "置顶失败，请稍后重试",
  "toast.unpinFailed": "取消置顶失败，请稍后重试",
  "toast.createFailed": "新建会话失败：{message}",
  "toast.forkRequiresOpen": "请先打开原会话完成迁移，再创建分支",
  "toast.openForkSource": "打开原会话",
  "sessions.count.one": "{n} 个会话",
  "sessions.count.other": "{n} 个会话",
  "actions.workspace.aria": "工作区“{name}”的操作",
  "actions.session.aria": "会话“{name}”的操作",
  "actions.archive": "归档会话",
  "actions.unarchive": "取消归档",
  "actions.pin": "置顶会话",
  "actions.unpin": "取消置顶",
  "actions.newSession": "新会话",
  "actions.newSession.aria": "在“{name}”中新建会话",
  "status.running": "进行中",
  "status.subagentsRunning.one": "{n} 个子智能体运行中",
  "status.subagentsRunning.other": "{n} 个子智能体运行中",
  "status.idle": "空闲",
  "status.waitingApproval": "等待审批",
  "status.planReview": "计划待审",
  "status.waitingAnswer": "等待回答",
  "status.compact.approval": "待审批",
  "status.compact.planReview": "计划待审",
  "status.compact.answer": "待回答",
  "status.completed": "已完成",
  "hover.created": "创建于 {time}",
  "hover.copied": "已复制",
  "date.ymd": "{y}年{m}月{d}日",
  "time.now": "刚刚",
  "time.minutes": "{n}分钟",
  "time.hours": "{n}小时",
  "time.days": "{n}天",
  "time.months": "{n}个月",
  "time.years": "{n}年",
  "time.ago": "{t}前"
};
var en = {
  ...appearanceEn,
  "defaultWorkspace.failed": "Unable to create default workspace. Use Choose workspace to select a folder.",
  "draft.workspaceRequired": "Choose a workspace first.",
  "draft.initializationFailed": "Could not fill the draft. Please try again shortly.",
  "group.ungrouped": "Ungrouped",
  "session.new": "New Session",
  "session.untitled": "Untitled",
  "shortcut.noSession": "Select a session first",
  "shortcut.noPicker": "Directory picker unavailable",
  "shortcut.directoryBusy": "Selecting or adding a workspace",
  "shortcut.noCompletedTurn": "This session has no completed turn",
  "shortcut.forkFailed": "Could not fork the session. Try again.",
  "section.workspaces": "Workspaces",
  "section.sessions": "Sessions",
  "viewOptions.label": "View options",
  "groupBy.label": "Group by",
  "groupBy.workspace": "WorkSpace",
  "groupBy.workspaceTree": "Workspace Tree",
  "groupBy.flat": "In one list",
  "groupBy.time": "By time",
  "groupBy.tag": "By tag",
  "timeBucket.pinned": "Pinned",
  "timeBucket.today": "Today",
  "timeBucket.yesterday": "Yesterday",
  "timeBucket.week": "This week",
  "timeBucket.earlier": "Earlier",
  "statusTabs.label": "Filter by status",
  "statusTab.all": "All",
  "statusTab.running": "Running",
  "statusTab.pending": "Awaiting",
  "statusTab.unread": "Unread",
  "orderBy.label": "Order by",
  "orderBy.manual": "Manual",
  "orderBy.updated": "Last updated",
  "filterBy.label": "Filter sessions",
  "viewOptions.hideArchived": "Hide archived",
  "viewOptions.showArchived": "All conversations (show archived)",
  "viewOptions.onlyArchived": "Archived only",
  "textSize.label": "Text size",
  "textSize.small": "Small",
  "textSize.normal": "Default",
  "textSize.large": "Large",
  "viewOptions.showWorkspaceName": "Show workspace names",
  "sessions.expand": "Show {n} more sessions",
  "sessions.collapse": "Show less",
  "empty.none": "No sessions yet",
  "empty.noneArchived": "No archived sessions yet",
  "empty.viewOthers": "View other sessions",
  "empty.noMatches": "No matches",
  "workspace.add": "Add workspace",
  "search.sessions.aria": "Search sessions",
  "search.placeholder": "Search session names",
  "search.clear": "Clear search",
  "search.results.aria": "Search results",
  "search.pending": "Searching session history…",
  "search.noMatches": "No matching sessions",
  "search.hasMore": "Showing the first {n} results. Narrow your search.",
  "menu.addWorkspace": "Add workspace…",
  "picker.loading": "Loading workspaces…",
  "conflict.named": "A workspace named “{name}” already exists.",
  "folderError.title": "Couldn’t open folder",
  "folderError.retry": "Choose again",
  "rename": "Rename",
  "rename.workspace.title": "Rename workspace",
  "rename.session.title": "Rename session",
  "field.workspaceName": "Workspace name",
  "field.sessionName": "Session name",
  "delete.workspace": "Delete workspace",
  "delete.desc": "This removes “{name}” from the workspace list. The folder and session logs will be kept. Its sessions will appear under Ungrouped.",
  "delete.pending": "Deleting workspace…",
  "menu.fork": "Fork session",
  "menu.archiveSession": "Archive session",
  "menu.unarchiveSession": "Unarchive session",
  "menu.pinSession": "Pin session",
  "menu.unpinSession": "Unpin session",
  "menu.sessionId": "Copy Session ID",
  "toast.sessionIdCopied": "Session ID copied",
  "toast.sessionIdCopyFailed": "Copy failed. Try again.",
  "row.archived": "Archived",
  "row.pinned": "Pinned",
  "toast.archivedNotOpenable": "Archived sessions cannot be opened. Unarchive it to view.",
  "toast.archived": "Session archived. You can ",
  "toast.stoppedAndArchived": "Session stopped and archived. You can ",
  "archive.confirm.title": "Stop and archive this session?",
  "archive.confirm.desc": "“{title}” still has work in progress. Archiving stops it first; you can restore the session later from the “All conversations (show archived)” filter in the sidebar, and the stopped work will not resume on its own.",
  "archive.confirm.activity": "Work that will be stopped",
  "archive.confirm.turn": "The turn in progress",
  "archive.confirm.subagents.one": "{n} running subagent: {names}",
  "archive.confirm.subagents.other": "{n} running subagents: {names}",
  "archive.confirm.jobs.one": "{n} background job: {names}",
  "archive.confirm.jobs.other": "{n} background jobs: {names}",
  "archive.confirm.schedules.one": "{n} scheduled reminder: {names}",
  "archive.confirm.schedules.other": "{n} scheduled reminders: {names}",
  "archive.confirm.other.one": "{n} other item of work ({kind})",
  "archive.confirm.other.other": "{n} other items of work ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Stop and archive",
  "archive.confirm.pending": "Stopping and archiving…",
  "toast.archivedUndo": "undo",
  "toast.archivedOr": " or ",
  "toast.archivedFilter": "filter archived sessions",
  "toast.pinFailed": "Pin failed. Try again later.",
  "toast.unpinFailed": "Unpin failed. Try again later.",
  "toast.createFailed": "New session failed: {message}",
  "toast.forkRequiresOpen": "Open the original session to complete migration before creating a branch.",
  "toast.openForkSource": "Open original session",
  "sessions.count.one": "{n} session",
  "sessions.count.other": "{n} sessions",
  "actions.workspace.aria": "Workspace actions for {name}",
  "actions.session.aria": "Session actions for {name}",
  "actions.archive": "Archive",
  "actions.unarchive": "Unarchive",
  "actions.pin": "Pin",
  "actions.unpin": "Unpin",
  "actions.newSession": "New session",
  "actions.newSession.aria": "New session in {name}",
  "status.running": "Running",
  "status.subagentsRunning.one": "{n} subagent running",
  "status.subagentsRunning.other": "{n} subagents running",
  "status.idle": "Idle",
  "status.waitingApproval": "Waiting for approval",
  "status.planReview": "Plan awaiting review",
  "status.waitingAnswer": "Waiting for answer",
  "status.compact.approval": "Approval",
  "status.compact.planReview": "Plan review",
  "status.compact.answer": "Answer",
  "status.completed": "Completed",
  "hover.created": "Created {time}",
  "hover.copied": "Copied",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "now",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "{t} ago"
};
var ja = {
  ...appearanceJa,
  "defaultWorkspace.failed": "デフォルトのワークスペースを作成できません。ワークスペースを選択してフォルダーを選んでください。",
  "draft.workspaceRequired": "先にワークスペースを選択してください。",
  "draft.initializationFailed": "下書きを埋め込めませんでした。しばらくしてからもう一度お試しください。",
  "group.ungrouped": "グループなし",
  "session.new": "新しいセッション",
  "session.untitled": "無題",
  "shortcut.noSession": "先にセッションを選択してください",
  "shortcut.noPicker": "ディレクトリピッカーを利用できません",
  "shortcut.directoryBusy": "ワークスペースを選択または追加しています",
  "shortcut.noCompletedTurn": "このセッションには完了したターンがありません",
  "shortcut.forkFailed": "セッションをフォークできませんでした。もう一度お試しください。",
  "section.workspaces": "ワークスペース",
  "section.sessions": "セッション",
  "viewOptions.label": "表示オプション",
  "groupBy.label": "グループ化",
  "groupBy.workspace": "ワークスペース",
  "groupBy.workspaceTree": "ワークスペースツリー",
  "groupBy.flat": "1つのリスト",
  "groupBy.time": "時間別",
  "groupBy.tag": "タグ別",
  "timeBucket.pinned": "ピン留め",
  "timeBucket.today": "今日",
  "timeBucket.yesterday": "昨日",
  "timeBucket.week": "今週",
  "timeBucket.earlier": "それ以前",
  "statusTabs.label": "ステータスで絞り込み",
  "statusTab.all": "すべて",
  "statusTab.running": "実行中",
  "statusTab.pending": "確認待ち",
  "statusTab.unread": "未読",
  "orderBy.label": "並び順",
  "orderBy.manual": "手動",
  "orderBy.updated": "最終更新",
  "filterBy.label": "セッションを絞り込む",
  "viewOptions.hideArchived": "アーカイブを非表示",
  "viewOptions.showArchived": "すべての会話（アーカイブを表示）",
  "viewOptions.onlyArchived": "アーカイブのみ",
  "textSize.label": "文字サイズ",
  "textSize.small": "小",
  "textSize.normal": "標準",
  "textSize.large": "大",
  "viewOptions.showWorkspaceName": "ワークスペース名を表示",
  "sessions.expand": "さらに{n}件のセッションを表示",
  "sessions.collapse": "折りたたむ",
  "empty.none": "セッションはまだありません",
  "empty.noneArchived": "アーカイブされたセッションはまだありません",
  "empty.viewOthers": "他のセッションを表示",
  "empty.noMatches": "一致なし",
  "workspace.add": "ワークスペースを追加",
  "search.sessions.aria": "セッションを検索",
  "search.placeholder": "セッション名を検索",
  "search.clear": "検索をクリア",
  "search.results.aria": "検索結果",
  "search.pending": "セッション履歴を検索中…",
  "search.noMatches": "一致するセッションはありません",
  "search.hasMore": "最初の{n}件の結果を表示しています。検索を絞り込んでください。",
  "menu.addWorkspace": "ワークスペースを追加…",
  "picker.loading": "ワークスペースを読み込み中…",
  "conflict.named": "「{name}」という名前のワークスペースは既に存在します。",
  "folderError.title": "フォルダーを開けませんでした",
  "folderError.retry": "選び直す",
  "rename": "名前を変更",
  "rename.workspace.title": "ワークスペース名を変更",
  "rename.session.title": "セッション名を変更",
  "field.workspaceName": "ワークスペース名",
  "field.sessionName": "セッション名",
  "delete.workspace": "ワークスペースを削除",
  "delete.desc": "「{name}」をワークスペース一覧から削除します。フォルダとセッションログは保持されます。このワークスペースのセッションは「未分類」に表示されます。",
  "delete.pending": "ワークスペースを削除中…",
  "menu.fork": "セッションをフォーク",
  "menu.archiveSession": "セッションをアーカイブ",
  "menu.unarchiveSession": "セッションのアーカイブを解除",
  "menu.pinSession": "セッションをピン留め",
  "menu.unpinSession": "セッションのピン留めを解除",
  "menu.sessionId": "セッションIDをコピー",
  "toast.sessionIdCopied": "セッションIDをコピーしました",
  "toast.sessionIdCopyFailed": "コピーに失敗しました。もう一度お試しください。",
  "row.archived": "アーカイブ済み",
  "row.pinned": "ピン留め済み",
  "toast.archivedNotOpenable": "アーカイブ済みセッションは開けません。アーカイブを解除して表示してください。",
  "toast.archived": "セッションをアーカイブしました。",
  "toast.stoppedAndArchived": "セッションを停止してアーカイブしました。",
  "archive.confirm.title": "このセッションを停止してアーカイブしますか？",
  "archive.confirm.desc": "「{title}」には進行中の作業があります。アーカイブするとまず停止されます。セッションは後からサイドバーの「すべての会話（アーカイブを表示）」フィルターで復元できますが、停止された作業は自動的に再開されません。",
  "archive.confirm.activity": "停止される作業",
  "archive.confirm.turn": "進行中のターン",
  "archive.confirm.subagents.one": "実行中のサブエージェント {n} 件: {names}",
  "archive.confirm.subagents.other": "実行中のサブエージェント {n} 件: {names}",
  "archive.confirm.jobs.one": "バックグラウンドジョブ {n} 件: {names}",
  "archive.confirm.jobs.other": "バックグラウンドジョブ {n} 件: {names}",
  "archive.confirm.schedules.one": "スケジュールされたリマインダー {n} 件: {names}",
  "archive.confirm.schedules.other": "スケジュールされたリマインダー {n} 件: {names}",
  "archive.confirm.other.one": "その他の作業 {n} 件（{kind}）",
  "archive.confirm.other.other": "その他の作業 {n} 件（{kind}）",
  "archive.confirm.listSeparator": "、",
  "archive.confirm.action": "停止してアーカイブ",
  "archive.confirm.pending": "停止してアーカイブ中…",
  "toast.archivedUndo": "元に戻す",
  "toast.archivedOr": " または ",
  "toast.archivedFilter": "アーカイブ済みセッションを絞り込む",
  "toast.pinFailed": "ピン留めに失敗しました。後でもう一度お試しください。",
  "toast.unpinFailed": "ピン留めの解除に失敗しました。後でもう一度お試しください。",
  "toast.createFailed": "新しいセッションの作成に失敗しました: {message}",
  "toast.forkRequiresOpen": "ブランチを作成する前に、移行を完了するため元のセッションを開いてください。",
  "toast.openForkSource": "元のセッションを開く",
  "sessions.count.one": "セッション {n} 件",
  "sessions.count.other": "セッション {n} 件",
  "actions.workspace.aria": "{name} のワークスペース操作",
  "actions.session.aria": "{name} のセッション操作",
  "actions.archive": "アーカイブ",
  "actions.unarchive": "アーカイブを解除",
  "actions.pin": "ピン留め",
  "actions.unpin": "ピン留めを解除",
  "actions.newSession": "新しいセッション",
  "actions.newSession.aria": "{name} で新しいセッション",
  "status.running": "実行中",
  "status.subagentsRunning.one": "サブエージェント {n} 件が実行中",
  "status.subagentsRunning.other": "サブエージェント {n} 件が実行中",
  "status.idle": "待機中",
  "status.waitingApproval": "承認待ち",
  "status.planReview": "計画のレビュー待ち",
  "status.waitingAnswer": "回答待ち",
  "status.compact.approval": "承認",
  "status.compact.planReview": "計画レビュー",
  "status.compact.answer": "回答",
  "status.completed": "完了",
  "hover.created": "作成日時 {time}",
  "hover.copied": "コピーしました",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "今",
  "time.minutes": "{n}分",
  "time.hours": "{n}時間",
  "time.days": "{n}日",
  "time.months": "{n}か月",
  "time.years": "{n}年",
  "time.ago": "{t}前"
};
var es = {
  ...appearanceEs,
  "defaultWorkspace.failed": "No se puede crear el espacio de trabajo predeterminado. Utilice Elegir espacio de trabajo para seleccionar una carpeta.",
  "draft.workspaceRequired": "Elija un espacio de trabajo primero.",
  "draft.initializationFailed": "No se pudo completar el borrador. Inténtelo de nuevo en breve.",
  "group.ungrouped": "Desagrupados",
  "session.new": "Nueva sesión",
  "session.untitled": "Sin título",
  "shortcut.noSession": "Seleccione una sesión primero",
  "shortcut.noPicker": "Selector de directorio no disponible",
  "shortcut.directoryBusy": "Seleccionar o agregar un espacio de trabajo",
  "shortcut.noCompletedTurn": "Esta sesión no tiene turno completo",
  "shortcut.forkFailed": "No se pudo bifurcar la sesión. Intentar otra vez.",
  "section.workspaces": "Espacios de trabajo",
  "section.sessions": "Sesiones",
  "viewOptions.label": "Ver opciones",
  "groupBy.label": "Agrupar por",
  "groupBy.workspace": "Espacio de trabajo",
  "groupBy.workspaceTree": "Árbol del espacio de trabajo",
  "groupBy.flat": "en una lista",
  "groupBy.time": "Por tiempo",
  "groupBy.tag": "Por etiqueta",
  "timeBucket.pinned": "Fijadas",
  "timeBucket.today": "Hoy",
  "timeBucket.yesterday": "Ayer",
  "timeBucket.week": "Esta semana",
  "timeBucket.earlier": "Anteriores",
  "statusTabs.label": "Filtrar por estado",
  "statusTab.all": "Todas",
  "statusTab.running": "En ejecución",
  "statusTab.pending": "Pendientes",
  "statusTab.unread": "Sin leer",
  "orderBy.label": "Ordenar por",
  "orderBy.manual": "manuales",
  "orderBy.updated": "Última actualización",
  "filterBy.label": "Filtrar sesiones",
  "viewOptions.hideArchived": "Ocultar archivado",
  "viewOptions.showArchived": "Todas las conversaciones (mostrar archivadas)",
  "viewOptions.onlyArchived": "Sólo archivado",
  "textSize.label": "Tamaño del texto",
  "textSize.small": "Pequeño",
  "textSize.normal": "Normal",
  "textSize.large": "Grande",
  "viewOptions.showWorkspaceName": "Mostrar nombres de espacio de trabajo",
  "sessions.expand": "Mostrar {n} más sesiones",
  "sessions.collapse": "Mostrar menos",
  "empty.none": "Aún no hay sesiones",
  "empty.noneArchived": "Aún no hay sesiones archivadas",
  "empty.viewOthers": "Ver otras sesiones",
  "empty.noMatches": "No hay coincidencias",
  "workspace.add": "Agregar espacio de trabajo",
  "search.sessions.aria": "Buscar sesiones",
  "search.placeholder": "Buscar nombres de sesiones",
  "search.clear": "Borrar búsqueda",
  "search.results.aria": "Resultados de la búsqueda",
  "search.pending": "Buscando el historial de sesiones…",
  "search.noMatches": "No hay sesiones coincidentes",
  "search.hasMore": "Mostrando los primeros resultados de {n}. Limita tu búsqueda.",
  "menu.addWorkspace": "Agregar espacio de trabajo…",
  "picker.loading": "Cargando espacios de trabajo…",
  "conflict.named": 'Ya existe un espacio de trabajo denominado "{name}".',
  "folderError.title": "No se pudo abrir la carpeta",
  "folderError.retry": "Elige de nuevo",
  "rename": "Cambiar nombre",
  "rename.workspace.title": "Cambiar nombre del espacio de trabajo",
  "rename.session.title": "Cambiar nombre de sesión",
  "field.workspaceName": "Nombre del espacio de trabajo",
  "field.sessionName": "Nombre de la sesión",
  "delete.workspace": "Eliminar espacio de trabajo",
  "delete.desc": 'Esto elimina "{name}" de la lista de espacios de trabajo. Se conservarán los registros de carpetas y sesiones. Sus sesiones aparecerán en Desagrupadas.',
  "delete.pending": "Eliminando espacio de trabajo…",
  "menu.fork": "Crear una bifurcación de la sesión",
  "menu.archiveSession": "Sesión de archivo",
  "menu.unarchiveSession": "Desarchivar sesión",
  "menu.pinSession": "Fijar sesión",
  "menu.unpinSession": "Desfijar sesión",
  "menu.sessionId": "Copiar ID de sesión",
  "toast.sessionIdCopied": "ID de sesión copiada",
  "toast.sessionIdCopyFailed": "La copia falló. Intentar otra vez.",
  "row.archived": "Archivado",
  "row.pinned": "Fijado",
  "toast.archivedNotOpenable": "Las sesiones archivadas no se pueden abrir. Desarchivarlo para verlo.",
  "toast.archived": "Sesión archivada. tu puedes ",
  "toast.stoppedAndArchived": "Sesión detenida y archivada. tu puedes ",
  "archive.confirm.title": "¿Detener y archivar esta sesión?",
  "archive.confirm.desc": "“{title}” todavía tiene trabajo en progreso. Archivarlo lo detiene primero; puedes restaurar la sesión más tarde desde el filtro “Todas las conversaciones (mostrar archivadas)” en la barra lateral, y el trabajo detenido no se reanudará por sí solo.",
  "archive.confirm.activity": "Trabajo que será detenido",
  "archive.confirm.turn": "El turno en curso",
  "archive.confirm.subagents.one": "{n} ejecutando subagente: {names}",
  "archive.confirm.subagents.other": "{n} ejecutando subagentes: {names}",
  "archive.confirm.jobs.one": "Trabajo en segundo plano {n}: {names}",
  "archive.confirm.jobs.other": "Trabajos en segundo plano {n}: {names}",
  "archive.confirm.schedules.one": "Recordatorio programado {n}: {names}",
  "archive.confirm.schedules.other": "{n} recordatorios programados: {names}",
  "archive.confirm.other.one": "{n} otro elemento de trabajo ({kind})",
  "archive.confirm.other.other": "{n} otros elementos de trabajo ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Detener y archivar",
  "archive.confirm.pending": "Deteniendo y archivando…",
  "toast.archivedUndo": "deshacer",
  "toast.archivedOr": " o ",
  "toast.archivedFilter": "filtrar sesiones archivadas",
  "toast.pinFailed": "No se pudo fijar. Inténtalo de nuevo más tarde.",
  "toast.unpinFailed": "No se pudo desfijar. Inténtalo de nuevo más tarde.",
  "toast.createFailed": "Nueva sesión falló: {message}",
  "toast.forkRequiresOpen": "Abra la sesión original para completar la migración antes de crear una rama.",
  "toast.openForkSource": "Abrir sesión original",
  "sessions.count.one": "Sesión {n}",
  "sessions.count.other": "Sesiones {n}",
  "actions.workspace.aria": "Acciones del espacio de trabajo para {name}",
  "actions.session.aria": "Acciones de sesión para {name}",
  "actions.archive": "Archivo",
  "actions.unarchive": "Desarchivar",
  "actions.pin": "Fijar",
  "actions.unpin": "Desfijar",
  "actions.newSession": "Nueva sesión",
  "actions.newSession.aria": "Nueva sesión en {name}",
  "status.running": "corriendo",
  "status.subagentsRunning.one": "Subagente {n} ejecutándose",
  "status.subagentsRunning.other": "Subagentes {n} ejecutándose",
  "status.idle": "inactivo",
  "status.waitingApproval": "Esperando aprobación",
  "status.planReview": "Plan pendiente de revisión",
  "status.waitingAnswer": "esperando respuesta",
  "status.compact.approval": "Aprobación",
  "status.compact.planReview": "Revisión del plan",
  "status.compact.answer": "respuesta",
  "status.completed": "Completado",
  "hover.created": "Creado {time}",
  "hover.copied": "Copiado",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "ahora",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "Hace {t}"
};
var fr = {
  ...appearanceFr,
  "defaultWorkspace.failed": "Impossible de créer un espace de travail par défaut. Utilisez Choisir un espace de travail pour sélectionner un dossier.",
  "draft.workspaceRequired": "Choisissez d'abord un espace de travail.",
  "draft.initializationFailed": "Impossible de remplir le projet. Veuillez réessayer sous peu.",
  "group.ungrouped": "Non groupé",
  "session.new": "Nouvelle séance",
  "session.untitled": "Sans titre",
  "shortcut.noSession": "Sélectionnez d'abord une session",
  "shortcut.noPicker": "Sélecteur de répertoire indisponible",
  "shortcut.directoryBusy": "Sélection ou ajout d'un espace de travail",
  "shortcut.noCompletedTurn": "Cette session n'a pas de tour terminé",
  "shortcut.forkFailed": "Impossible de bifurquer la session. Essayer à nouveau.",
  "section.workspaces": "Espaces de travail",
  "section.sessions": "Séances",
  "viewOptions.label": "Afficher les options",
  "groupBy.label": "Regrouper par",
  "groupBy.workspace": "Espace de travail",
  "groupBy.workspaceTree": "Arborescence de l'espace de travail",
  "groupBy.flat": "Dans une liste",
  "groupBy.time": "Par date",
  "groupBy.tag": "Par étiquette",
  "timeBucket.pinned": "Épinglées",
  "timeBucket.today": "Aujourd'hui",
  "timeBucket.yesterday": "Hier",
  "timeBucket.week": "Cette semaine",
  "timeBucket.earlier": "Plus anciennes",
  "statusTabs.label": "Filtrer par état",
  "statusTab.all": "Toutes",
  "statusTab.running": "En cours",
  "statusTab.pending": "En attente",
  "statusTab.unread": "Non lues",
  "orderBy.label": "Commander par",
  "orderBy.manual": "Manuel",
  "orderBy.updated": "Dernière mise à jour",
  "filterBy.label": "Filtrer les sessions",
  "viewOptions.hideArchived": "Masquer les archives",
  "viewOptions.showArchived": "Toutes les conversations (afficher les archives)",
  "viewOptions.onlyArchived": "Archivé uniquement",
  "textSize.label": "Taille du texte",
  "textSize.small": "Petite",
  "textSize.normal": "Normale",
  "textSize.large": "Grande",
  "viewOptions.showWorkspaceName": "Afficher le nom de l’espace de travail",
  "sessions.expand": "Afficher {n} plus de sessions",
  "sessions.collapse": "Afficher moins",
  "empty.none": "Aucune séance pour l'instant",
  "empty.noneArchived": "Aucune session archivée pour l'instant",
  "empty.viewOthers": "Voir les autres séances",
  "empty.noMatches": "Aucune correspondance",
  "workspace.add": "Ajouter un espace de travail",
  "search.sessions.aria": "Rechercher des sessions",
  "search.placeholder": "Rechercher des noms de sessions",
  "search.clear": "Effacer la recherche",
  "search.results.aria": "Résultats de la recherche",
  "search.pending": "Recherche dans l'historique des sessions…",
  "search.noMatches": "Aucune session correspondante",
  "search.hasMore": "Affichage des premiers résultats {n}. Affinez votre recherche.",
  "menu.addWorkspace": "Ajouter un espace de travail…",
  "picker.loading": "Chargement des espaces de travail…",
  "conflict.named": "Un espace de travail nommé « {name} » existe déjà.",
  "folderError.title": "Impossible d'ouvrir le dossier",
  "folderError.retry": "Choisir à nouveau",
  "rename": "Renommer",
  "rename.workspace.title": "Renommer l'espace de travail",
  "rename.session.title": "Renommer la session",
  "field.workspaceName": "Nom de l'espace de travail",
  "field.sessionName": "Nom de la séance",
  "delete.workspace": "Supprimer l'espace de travail",
  "delete.desc": "Cela supprime « {name} » de la liste des espaces de travail. Les journaux de dossiers et de sessions seront conservés. Ses sessions apparaîtront sous Non groupées.",
  "delete.pending": "Suppression de l'espace de travail…",
  "menu.fork": "Créer une branche de la session",
  "menu.archiveSession": "Séance d'archivage",
  "menu.unarchiveSession": "Session de désarchivage",
  "menu.pinSession": "Épingler la session",
  "menu.unpinSession": "Désépingler la session",
  "menu.sessionId": "Copier l'ID de session",
  "toast.sessionIdCopied": "ID de session copié",
  "toast.sessionIdCopyFailed": "La copie a échoué. Essayer à nouveau.",
  "row.archived": "Archivé",
  "row.pinned": "Épinglé",
  "toast.archivedNotOpenable": "Les sessions archivées ne peuvent pas être ouvertes. Désarchivez-le pour le visualiser.",
  "toast.archived": "Séance archivée. Vous pouvez ",
  "toast.stoppedAndArchived": "Session arrêtée et archivée. Vous pouvez ",
  "archive.confirm.title": "Arrêter et archiver cette session ?",
  "archive.confirm.desc": "« {title} » a encore des travaux en cours. L'archivage l'arrête en premier ; vous pouvez restaurer la session plus tard à partir du filtre « Toutes les conversations (afficher les archives) » dans la barre latérale, et le travail arrêté ne reprendra pas de lui-même.",
  "archive.confirm.activity": "Travaux qui seront arrêtés",
  "archive.confirm.turn": "Le tour en cours",
  "archive.confirm.subagents.one": "Sous-agent en cours d'exécution {n} : {names}",
  "archive.confirm.subagents.other": "{n} exécutant des sous-agents : {names}",
  "archive.confirm.jobs.one": "Travail en arrière-plan {n} : {names}",
  "archive.confirm.jobs.other": "Travaux en arrière-plan {n} : {names}",
  "archive.confirm.schedules.one": "Rappel programmé {n} : {names}",
  "archive.confirm.schedules.other": "Rappels programmés {n} : {names}",
  "archive.confirm.other.one": "{n} autre élément de travail ({kind})",
  "archive.confirm.other.other": "{n} autres éléments de travail ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Arrêter et archiver",
  "archive.confirm.pending": "Arrêt et archivage…",
  "toast.archivedUndo": "annuler",
  "toast.archivedOr": " ou ",
  "toast.archivedFilter": "filtrer les sessions archivées",
  "toast.pinFailed": "L’épinglage a échoué. Réessayez plus tard.",
  "toast.unpinFailed": "Impossible de désépingler. Réessayez plus tard.",
  "toast.createFailed": "Échec de la nouvelle session : {message}",
  "toast.forkRequiresOpen": "Ouvrez la session d'origine pour terminer la migration avant de créer une branche.",
  "toast.openForkSource": "Ouvrir la session originale",
  "sessions.count.one": "Séance {n}",
  "sessions.count.other": "Séances {n}",
  "actions.workspace.aria": "Actions de l'espace de travail pour {name}",
  "actions.session.aria": "Actions de session pour {name}",
  "actions.archive": "Archiver",
  "actions.unarchive": "Désarchiver",
  "actions.pin": "Épingler",
  "actions.unpin": "Désépingler",
  "actions.newSession": "Nouvelle séance",
  "actions.newSession.aria": "Nouvelle séance dans {name}",
  "status.running": "Courir",
  "status.subagentsRunning.one": "Sous-agent {n} en cours d'exécution",
  "status.subagentsRunning.other": "Sous-agents {n} en cours d'exécution",
  "status.idle": "Inactif",
  "status.waitingApproval": "En attente d'approbation",
  "status.planReview": "Plan en attente d'examen",
  "status.waitingAnswer": "En attente de réponse",
  "status.compact.approval": "Approbation",
  "status.compact.planReview": "Révision des plans",
  "status.compact.answer": "Réponse",
  "status.completed": "Terminé",
  "hover.created": "Créé {time}",
  "hover.copied": "Copié",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "maintenant",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "Il y a {t}"
};
var de = {
  ...appearanceDe,
  "defaultWorkspace.failed": "Der Standardarbeitsbereich kann nicht erstellt werden. Verwenden Sie „Arbeitsbereich auswählen“, um einen Ordner auszuwählen.",
  "draft.workspaceRequired": "Wählen Sie zunächst einen Arbeitsbereich.",
  "draft.initializationFailed": "Der Entwurf konnte nicht ausgefüllt werden. Bitte versuchen Sie es in Kürze noch einmal.",
  "group.ungrouped": "Nicht gruppiert",
  "session.new": "Neue Sitzung",
  "session.untitled": "Ohne Titel",
  "shortcut.noSession": "Wählen Sie zunächst eine Sitzung aus",
  "shortcut.noPicker": "Verzeichnisauswahl nicht verfügbar",
  "shortcut.directoryBusy": "Auswählen oder Hinzufügen eines Arbeitsbereichs",
  "shortcut.noCompletedTurn": "Diese Sitzung hat keine abgeschlossene Runde",
  "shortcut.forkFailed": "Die Sitzung konnte nicht aufgeteilt werden. Versuchen Sie es erneut.",
  "section.workspaces": "Arbeitsbereiche",
  "section.sessions": "Sitzungen",
  "viewOptions.label": "Optionen anzeigen",
  "groupBy.label": "Gruppieren nach",
  "groupBy.workspace": "WorkSpace",
  "groupBy.workspaceTree": "Arbeitsbereichsbaum",
  "groupBy.flat": "In einer Liste",
  "groupBy.time": "Nach Zeit",
  "groupBy.tag": "Nach Tag",
  "timeBucket.pinned": "Angeheftet",
  "timeBucket.today": "Heute",
  "timeBucket.yesterday": "Gestern",
  "timeBucket.week": "Diese Woche",
  "timeBucket.earlier": "Älter",
  "statusTabs.label": "Nach Status filtern",
  "statusTab.all": "Alle",
  "statusTab.running": "Laufend",
  "statusTab.pending": "Wartend",
  "statusTab.unread": "Ungelesen",
  "orderBy.label": "Bestellen nach",
  "orderBy.manual": "Handbuch",
  "orderBy.updated": "Zuletzt aktualisiert",
  "filterBy.label": "Sitzungen filtern",
  "viewOptions.hideArchived": "Archiviert ausblenden",
  "viewOptions.showArchived": "Alle Gespräche (archiviert anzeigen)",
  "viewOptions.onlyArchived": "Nur archiviert",
  "textSize.label": "Schriftgröße",
  "textSize.small": "Klein",
  "textSize.normal": "Standard",
  "textSize.large": "Groß",
  "viewOptions.showWorkspaceName": "Arbeitsbereichsnamen anzeigen",
  "sessions.expand": "Weitere Sitzungen anzeigen {n}",
  "sessions.collapse": "Weniger anzeigen",
  "empty.none": "Noch keine Sitzungen",
  "empty.noneArchived": "Noch keine archivierten Sitzungen",
  "empty.viewOthers": "Andere Sitzungen anzeigen",
  "empty.noMatches": "Keine Übereinstimmungen",
  "workspace.add": "Arbeitsbereich hinzufügen",
  "search.sessions.aria": "Sitzungen suchen",
  "search.placeholder": "Suchen Sie nach Sitzungsnamen",
  "search.clear": "Suche löschen",
  "search.results.aria": "Suchergebnisse",
  "search.pending": "Sitzungsverlauf wird durchsucht…",
  "search.noMatches": "Keine passenden Sitzungen",
  "search.hasMore": "Zeigt die ersten {n}-Ergebnisse. Grenzen Sie Ihre Suche ein.",
  "menu.addWorkspace": "Arbeitsbereich hinzufügen…",
  "picker.loading": "Arbeitsbereiche werden geladen…",
  "conflict.named": "Ein Arbeitsbereich mit dem Namen „{name}“ ist bereits vorhanden.",
  "folderError.title": "Der Ordner konnte nicht geöffnet werden",
  "folderError.retry": "Wählen Sie erneut",
  "rename": "Umbenennen",
  "rename.workspace.title": "Arbeitsbereich umbenennen",
  "rename.session.title": "Sitzung umbenennen",
  "field.workspaceName": "Name des Arbeitsbereichs",
  "field.sessionName": "Sitzungsname",
  "delete.workspace": "Arbeitsbereich löschen",
  "delete.desc": "Dadurch wird „{name}“ aus der Arbeitsbereichsliste entfernt. Die Ordner- und Sitzungsprotokolle werden aufbewahrt. Seine Sitzungen werden unter „Nicht gruppiert“ angezeigt.",
  "delete.pending": "Arbeitsbereich wird gelöscht…",
  "menu.fork": "Sitzung abzweigen",
  "menu.archiveSession": "Archivsitzung",
  "menu.unarchiveSession": "Sitzung dearchivieren",
  "menu.pinSession": "Sitzung anheften",
  "menu.unpinSession": "Sitzung lösen",
  "menu.sessionId": "Sitzungs-ID kopieren",
  "toast.sessionIdCopied": "Sitzungs-ID kopiert",
  "toast.sessionIdCopyFailed": "Der Kopiervorgang ist fehlgeschlagen. Versuchen Sie es erneut.",
  "row.archived": "Archiviert",
  "row.pinned": "Angepinnt",
  "toast.archivedNotOpenable": "Archivierte Sitzungen können nicht geöffnet werden. Entpacken Sie es zur Ansicht.",
  "toast.archived": "Sitzung archiviert. Du kannst ",
  "toast.stoppedAndArchived": "Sitzung gestoppt und archiviert. Du kannst ",
  "archive.confirm.title": "Diese Sitzung stoppen und archivieren?",
  "archive.confirm.desc": "„{title}“ ist noch in Arbeit. Die Archivierung stoppt es zunächst; Sie können die Sitzung später über den Filter „Alle Konversationen (archivierte anzeigen)“ in der Seitenleiste wiederherstellen, und die angehaltene Arbeit wird nicht von alleine fortgesetzt.",
  "archive.confirm.activity": "Arbeiten, die gestoppt werden",
  "archive.confirm.turn": "Die laufende Runde",
  "archive.confirm.subagents.one": "{n}, laufender Subagent: {names}",
  "archive.confirm.subagents.other": "{n}, auf dem Subagenten ausgeführt werden: {names}",
  "archive.confirm.jobs.one": "{n} Hintergrundjob: {names}",
  "archive.confirm.jobs.other": "{n} Hintergrundjobs: {names}",
  "archive.confirm.schedules.one": "{n} geplante Erinnerung: {names}",
  "archive.confirm.schedules.other": "{n} geplante Erinnerungen: {names}",
  "archive.confirm.other.one": "{n} sonstiger Arbeitsgegenstand ({kind})",
  "archive.confirm.other.other": "{n} sonstige Arbeiten ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Stoppen und archivieren",
  "archive.confirm.pending": "Stoppen und archivieren…",
  "toast.archivedUndo": "rückgängig machen",
  "toast.archivedOr": " oder ",
  "toast.archivedFilter": "Archivierte Sitzungen filtern",
  "toast.pinFailed": "Anheften fehlgeschlagen. Versuchen Sie es später erneut.",
  "toast.unpinFailed": "Lösen fehlgeschlagen. Versuchen Sie es später erneut.",
  "toast.createFailed": "Neue Sitzung fehlgeschlagen: {message}",
  "toast.forkRequiresOpen": "Öffnen Sie die ursprüngliche Sitzung, um die Migration abzuschließen, bevor Sie einen Zweig erstellen.",
  "toast.openForkSource": "Öffnen Sie die ursprüngliche Sitzung",
  "sessions.count.one": "{n}-Sitzung",
  "sessions.count.other": "{n}-Sitzungen",
  "actions.workspace.aria": "Arbeitsbereichsaktionen für {name}",
  "actions.session.aria": "Sitzungsaktionen für {name}",
  "actions.archive": "Archiv",
  "actions.unarchive": "Dearchivieren",
  "actions.pin": "Anheften",
  "actions.unpin": "Lösen",
  "actions.newSession": "Neue Sitzung",
  "actions.newSession.aria": "Neue Sitzung in {name}",
  "status.running": "Laufen",
  "status.subagentsRunning.one": "{n}-Subagent läuft",
  "status.subagentsRunning.other": "{n} Subagenten laufen",
  "status.idle": "Leerlauf",
  "status.waitingApproval": "Warten auf Genehmigung",
  "status.planReview": "Plan wartet auf Überprüfung",
  "status.waitingAnswer": "Warte auf Antwort",
  "status.compact.approval": "Zustimmung",
  "status.compact.planReview": "Planüberprüfung",
  "status.compact.answer": "Antwort",
  "status.completed": "Abgeschlossen",
  "hover.created": "Erstellt {time}",
  "hover.copied": "Kopiert",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "jetzt",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "Vor {t}"
};
var ru = {
  ...appearanceRu,
  "defaultWorkspace.failed": "Невозможно создать рабочую область по умолчанию. Используйте «Выбрать рабочее пространство», чтобы выбрать папку.",
  "draft.workspaceRequired": "Сначала выберите рабочее место.",
  "draft.initializationFailed": "Не удалось заполнить черновик. Пожалуйста, повторите попытку в ближайшее время.",
  "group.ungrouped": "Разгруппировано",
  "session.new": "Новая сессия",
  "session.untitled": "Без названия",
  "shortcut.noSession": "Сначала выберите сеанс",
  "shortcut.noPicker": "Выбор каталога недоступен.",
  "shortcut.directoryBusy": "Выбор или добавление рабочего пространства",
  "shortcut.noCompletedTurn": "В этой сессии нет завершенных ходов",
  "shortcut.forkFailed": "Не удалось разветвить сеанс. Попробуйте еще раз.",
  "section.workspaces": "Рабочие пространства",
  "section.sessions": "Сессии",
  "viewOptions.label": "Посмотреть варианты",
  "groupBy.label": "Группировать по",
  "groupBy.workspace": "Рабочее пространство",
  "groupBy.workspaceTree": "Дерево рабочей области",
  "groupBy.flat": "В одном списке",
  "groupBy.time": "По времени",
  "groupBy.tag": "По метке",
  "timeBucket.pinned": "Закреплённые",
  "timeBucket.today": "Сегодня",
  "timeBucket.yesterday": "Вчера",
  "timeBucket.week": "На этой неделе",
  "timeBucket.earlier": "Раньше",
  "statusTabs.label": "Фильтр по статусу",
  "statusTab.all": "Все",
  "statusTab.running": "Активные",
  "statusTab.pending": "Ожидают",
  "statusTab.unread": "Непрочитанные",
  "orderBy.label": "Заказать по",
  "orderBy.manual": "Руководство",
  "orderBy.updated": "Последнее обновление",
  "filterBy.label": "Фильтровать сеансы",
  "viewOptions.hideArchived": "Скрыть в архиве",
  "viewOptions.showArchived": "Все разговоры (показать в архиве)",
  "viewOptions.onlyArchived": "Только в архиве",
  "textSize.label": "Размер текста",
  "textSize.small": "Мелкий",
  "textSize.normal": "Обычный",
  "textSize.large": "Крупный",
  "viewOptions.showWorkspaceName": "Показывать названия рабочих областей",
  "sessions.expand": "Показать больше сеансов {n}",
  "sessions.collapse": "Показать меньше",
  "empty.none": "Сеансов пока нет",
  "empty.noneArchived": "Архивированных сессий пока нет",
  "empty.viewOthers": "Посмотреть другие сессии",
  "empty.noMatches": "Нет совпадений",
  "workspace.add": "Добавить рабочую область",
  "search.sessions.aria": "Поиск сеансов",
  "search.placeholder": "Поиск названий сеансов",
  "search.clear": "Очистить поиск",
  "search.results.aria": "Результаты поиска",
  "search.pending": "Поиск истории сеансов…",
  "search.noMatches": "Нет подходящих сеансов",
  "search.hasMore": "Показаны первые результаты {n}. Сузьте область поиска.",
  "menu.addWorkspace": "Добавить рабочее пространство…",
  "picker.loading": "Загрузка рабочих областей…",
  "conflict.named": "Рабочая область с именем «{name}» уже существует.",
  "folderError.title": "Не удалось открыть папку",
  "folderError.retry": "Выбрать еще раз",
  "rename": "Переименовать",
  "rename.workspace.title": "Переименовать рабочую область",
  "rename.session.title": "Переименовать сеанс",
  "field.workspaceName": "Имя рабочей области",
  "field.sessionName": "Имя сеанса",
  "delete.workspace": "Удалить рабочую область",
  "delete.desc": "Это удалит «{name}» из списка рабочей области. Журналы папок и сеансов будут сохранены. Его сеансы появятся в разделе «Разгруппировано».",
  "delete.pending": "Удаление рабочей области…",
  "menu.fork": "Создать ответвление сеанса",
  "menu.archiveSession": "Архив сеанса",
  "menu.unarchiveSession": "Разархивировать сеанс",
  "menu.pinSession": "Закрепить сеанс",
  "menu.unpinSession": "Открепить сеанс",
  "menu.sessionId": "Копировать идентификатор сеанса",
  "toast.sessionIdCopied": "Идентификатор сеанса скопирован.",
  "toast.sessionIdCopyFailed": "Копировать не удалось. Попробуйте еще раз.",
  "row.archived": "В архиве",
  "row.pinned": "Закреплено",
  "toast.archivedNotOpenable": "Архивированные сеансы невозможно открыть. Разархивируйте его для просмотра.",
  "toast.archived": "Сессия заархивирована. Вы можете ",
  "toast.stoppedAndArchived": "Сеанс остановлен и заархивирован. Вы можете ",
  "archive.confirm.title": "Остановить и заархивировать этот сеанс?",
  "archive.confirm.desc": "Над «{title}» все еще ведется работа. Архивирование останавливает его первым; восстановить сессию можно позже из фильтра «Все разговоры (показать в архиве)» в боковой панели, при этом остановленная работа не возобновится сама по себе.",
  "archive.confirm.activity": "Работа, которая будет остановлена",
  "archive.confirm.turn": "Текущий ход",
  "archive.confirm.subagents.one": "{n} работающий субагент: {names}",
  "archive.confirm.subagents.other": "{n} работающие субагенты: {names}",
  "archive.confirm.jobs.one": "{n} фоновое задание: {names}",
  "archive.confirm.jobs.other": "{n} фоновые задания: {names}",
  "archive.confirm.schedules.one": "Запланированное напоминание {n}: {names}",
  "archive.confirm.schedules.other": "Запланированные напоминания {n}: {names}",
  "archive.confirm.other.one": "{n} другой элемент работы ({kind})",
  "archive.confirm.other.other": "{n} прочие работы ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Остановить и заархивировать",
  "archive.confirm.pending": "Остановка и архивирование…",
  "toast.archivedUndo": "отменить",
  "toast.archivedOr": " или ",
  "toast.archivedFilter": "фильтровать архивированные сеансы",
  "toast.pinFailed": "Не удалось закрепить. Повторите попытку позже.",
  "toast.unpinFailed": "Не удалось открепить. Повторите попытку позже.",
  "toast.createFailed": "Не удалось создать новый сеанс: {message}.",
  "toast.forkRequiresOpen": "Откройте исходный сеанс, чтобы завершить миграцию, прежде чем создавать ветку.",
  "toast.openForkSource": "Открыть исходный сеанс",
  "sessions.count.one": "Сеанс {n}",
  "sessions.count.other": "Сессии {n}",
  "actions.workspace.aria": "Действия рабочей области для {name}",
  "actions.session.aria": "Действия сеанса для {name}",
  "actions.archive": "Архив",
  "actions.unarchive": "Разархивировать",
  "actions.pin": "Закрепить",
  "actions.unpin": "Открепить",
  "actions.newSession": "Новая сессия",
  "actions.newSession.aria": "Новая сессия в {name}",
  "status.running": "Бег",
  "status.subagentsRunning.one": "Субагент {n} работает",
  "status.subagentsRunning.other": "Субагенты {n} работают",
  "status.idle": "Простой",
  "status.waitingApproval": "Ожидание одобрения",
  "status.planReview": "План ожидает рассмотрения",
  "status.waitingAnswer": "Ожидание ответа",
  "status.compact.approval": "Одобрение",
  "status.compact.planReview": "Обзор плана",
  "status.compact.answer": "Ответ",
  "status.completed": "Завершено",
  "hover.created": "Создано {time}",
  "hover.copied": "Скопировано",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "сейчас",
  "time.minutes": "{n}мин",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "{t} назад"
};
var pt = {
  ...appearancePt,
  "defaultWorkspace.failed": "Não foi possível criar o espaço de trabalho padrão. Use Escolher espaço de trabalho para selecionar uma pasta.",
  "draft.workspaceRequired": "Escolha um espaço de trabalho primeiro.",
  "draft.initializationFailed": "Não foi possível preencher o rascunho. Por favor, tente novamente em breve.",
  "group.ungrouped": "Desagrupado",
  "session.new": "Nova sessão",
  "session.untitled": "Sem título",
  "shortcut.noSession": "Selecione uma sessão primeiro",
  "shortcut.noPicker": "Seletor de diretório indisponível",
  "shortcut.directoryBusy": "Selecionando ou adicionando um espaço de trabalho",
  "shortcut.noCompletedTurn": "Esta sessão não tem turno concluído",
  "shortcut.forkFailed": "Não foi possível bifurcar a sessão. Tente novamente.",
  "section.workspaces": "Espaços de trabalho",
  "section.sessions": "Sessões",
  "viewOptions.label": "Ver opções",
  "groupBy.label": "Agrupar por",
  "groupBy.workspace": "Espaço de trabalho",
  "groupBy.workspaceTree": "Árvore do espaço de trabalho",
  "groupBy.flat": "Em uma lista",
  "groupBy.time": "Por tempo",
  "groupBy.tag": "Por etiqueta",
  "timeBucket.pinned": "Fixadas",
  "timeBucket.today": "Hoje",
  "timeBucket.yesterday": "Ontem",
  "timeBucket.week": "Esta semana",
  "timeBucket.earlier": "Anteriores",
  "statusTabs.label": "Filtrar por status",
  "statusTab.all": "Todas",
  "statusTab.running": "Em execução",
  "statusTab.pending": "Aguardando",
  "statusTab.unread": "Não lidas",
  "orderBy.label": "Encomendar por",
  "orderBy.manual": "Manuais",
  "orderBy.updated": "Última atualização",
  "filterBy.label": "Filtrar sessões",
  "viewOptions.hideArchived": "Ocultar arquivado",
  "viewOptions.showArchived": "Todas as conversas (mostrar arquivadas)",
  "viewOptions.onlyArchived": "Somente arquivado",
  "textSize.label": "Tamanho do texto",
  "textSize.small": "Pequeno",
  "textSize.normal": "Padrão",
  "textSize.large": "Grande",
  "viewOptions.showWorkspaceName": "Mostrar nomes do espaço de trabalho",
  "sessions.expand": "Mostrar mais {n} sessões",
  "sessions.collapse": "Mostrar menos",
  "empty.none": "Ainda não há sessões",
  "empty.noneArchived": "Ainda não há sessões arquivadas",
  "empty.viewOthers": "Ver outras sessões",
  "empty.noMatches": "Nenhuma correspondência",
  "workspace.add": "Adicionar espaço de trabalho",
  "search.sessions.aria": "Buscar sessões",
  "search.placeholder": "Pesquisar nomes de sessões",
  "search.clear": "Limpar pesquisa",
  "search.results.aria": "Resultados da pesquisa",
  "search.pending": "Pesquisando histórico da sessão…",
  "search.noMatches": "Nenhuma sessão correspondente",
  "search.hasMore": "Mostrando os primeiros {n} resultados. Restrinja sua pesquisa.",
  "menu.addWorkspace": "Adicionar espaço de trabalho…",
  "picker.loading": "Carregando áreas de trabalho…",
  "conflict.named": "Já existe um espaço de trabalho chamado “{name}”.",
  "folderError.title": "Não foi possível abrir a pasta",
  "folderError.retry": "Escolha novamente",
  "rename": "Renomear",
  "rename.workspace.title": "Renomear espaço de trabalho",
  "rename.session.title": "Renomear sessão",
  "field.workspaceName": "Nome do espaço de trabalho",
  "field.sessionName": "Nome da sessão",
  "delete.workspace": "Excluir espaço de trabalho",
  "delete.desc": "Isso remove “{name}” da lista de espaços de trabalho. A pasta e os logs de sessão serão mantidos. Suas sessões aparecerão em Desagrupado.",
  "delete.pending": "Excluindo espaço de trabalho…",
  "menu.fork": "Bifurcar sessão",
  "menu.archiveSession": "Sessão de arquivamento",
  "menu.unarchiveSession": "Desarquivar sessão",
  "menu.pinSession": "Fixar sessão",
  "menu.unpinSession": "Desafixar sessão",
  "menu.sessionId": "Copiar ID da sessão",
  "toast.sessionIdCopied": "ID da sessão copiado",
  "toast.sessionIdCopyFailed": "Falha na cópia. Tente novamente.",
  "row.archived": "Arquivado",
  "row.pinned": "Fixado",
  "toast.archivedNotOpenable": "As sessões arquivadas não podem ser abertas. Desarquive-o para visualizar.",
  "toast.archived": "Sessão arquivada. Você pode ",
  "toast.stoppedAndArchived": "Sessão interrompida e arquivada. Você pode ",
  "archive.confirm.title": "Parar e arquivar esta sessão?",
  "archive.confirm.desc": "“{title}” ainda tem trabalho em andamento. O arquivamento interrompe primeiro; você pode restaurar a sessão posteriormente a partir do filtro “Todas as conversas (mostrar arquivadas)” na barra lateral, e o trabalho interrompido não será retomado por conta própria.",
  "archive.confirm.activity": "Obra que será interrompida",
  "archive.confirm.turn": "O turno em andamento",
  "archive.confirm.subagents.one": "{n} subagente em execução: {names}",
  "archive.confirm.subagents.other": "{n} executando subagentes: {names}",
  "archive.confirm.jobs.one": "{n} trabalho em segundo plano: {names}",
  "archive.confirm.jobs.other": "{n} trabalhos em segundo plano: {names}",
  "archive.confirm.schedules.one": "{n} lembrete programado: {names}",
  "archive.confirm.schedules.other": "{n} lembretes programados: {names}",
  "archive.confirm.other.one": "{n} outro item de trabalho ({kind})",
  "archive.confirm.other.other": "{n} outros itens de trabalho ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Pare e arquive",
  "archive.confirm.pending": "Parando e arquivando…",
  "toast.archivedUndo": "desfazer",
  "toast.archivedOr": " ou ",
  "toast.archivedFilter": "filtrar sessões arquivadas",
  "toast.pinFailed": "Não foi possível fixar. Tente novamente mais tarde.",
  "toast.unpinFailed": "Não foi possível desafixar. Tente novamente mais tarde.",
  "toast.createFailed": "Falha na nova sessão: {message}",
  "toast.forkRequiresOpen": "Abra a sessão original para concluir a migração antes de criar uma ramificação.",
  "toast.openForkSource": "Abrir sessão original",
  "sessions.count.one": "{n} sessão",
  "sessions.count.other": "{n} sessões",
  "actions.workspace.aria": "Ações do espaço de trabalho para {name}",
  "actions.session.aria": "Ações de sessão para {name}",
  "actions.archive": "Arquivo",
  "actions.unarchive": "Desarquivar",
  "actions.pin": "Fixar",
  "actions.unpin": "Desafixar",
  "actions.newSession": "Nova sessão",
  "actions.newSession.aria": "Nova sessão em {name}",
  "status.running": "Correndo",
  "status.subagentsRunning.one": "{n} subagente em execução",
  "status.subagentsRunning.other": "{n} subagentes em execução",
  "status.idle": "Inativo",
  "status.waitingApproval": "Aguardando aprovação",
  "status.planReview": "Plano aguardando revisão",
  "status.waitingAnswer": "Esperando por resposta",
  "status.compact.approval": "Aprovação",
  "status.compact.planReview": "Revisão do plano",
  "status.compact.answer": "Resposta",
  "status.completed": "Concluído",
  "hover.created": "Criado {time}",
  "hover.copied": "Copiado",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "agora",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n} mês",
  "time.years": "{n}s",
  "time.ago": "{t} atrás"
};

// src/client/seat.tsx
var name = "dsh-sidebar-view";
var inject = [
  "slots",
  "contextMenus",
  "sessions",
  "workspaces",
  "locale",
  "remote",
  "remote.directoryPicker",
  "layout",
  "shortcuts",
  "remoteAccess"
];
var SLOT = "sidebar.workspaces";
var MAX_APPEARANCE_ENTRIES = 400;
var PLUS_KEY = "dsh.workspace.view.sidebar-view.v1";
var PLUS_INIT = {
  timeMode: false,
  statusFilter: "all",
  timeBucketExpansion: {},
  textScale: "normal",
  showWorkspaceName: false,
  workspaceIcons: {},
  tags: [],
  sessionTags: {},
  tagExpansion: {}
};
function migrateSessionColors(legacy) {
  const colors = readAppearanceRecord(legacy, isSessionColorId);
  const tags = [];
  const byColor = /* @__PURE__ */ new Map();
  const sessionTags = {};
  for (const [sessionId, color] of Object.entries(colors)) {
    let tag = byColor.get(color);
    if (tag === void 0) {
      tag = { id: `color-${color}`, name: "", color };
      byColor.set(color, tag);
      tags.push(tag);
    }
    sessionTags[sessionId] = tag.id;
  }
  return { tags, sessionTags };
}
function readAppearanceRecord(raw, valid) {
  if (typeof raw !== "object" || raw === null) return {};
  const out = {};
  let kept = 0;
  for (const [key, value] of Object.entries(raw)) {
    if (kept >= MAX_APPEARANCE_ENTRIES) break;
    if (typeof value === "string" && valid(value)) {
      out[key] = value;
      kept += 1;
    }
  }
  return out;
}
function readFoldRecord(raw) {
  if (typeof raw !== "object" || raw === null) return {};
  const out = {};
  for (const [key, value] of Object.entries(raw)) {
    if (typeof value === "boolean") out[key] = value;
  }
  return out;
}
function readPlus() {
  try {
    const raw = globalThis.localStorage?.getItem(PLUS_KEY);
    if (raw === null || raw === void 0) return PLUS_INIT;
    const parsed = JSON.parse(raw);
    const storedTags = readTagDefinitions(parsed.tags);
    const migrated = storedTags.length === 0 ? migrateSessionColors(parsed.sessionColors) : void 0;
    const tags = migrated?.tags ?? storedTags;
    const tagIds = new Set(tags.map((tag) => tag.id));
    const plus = {
      timeMode: parsed.timeMode === true,
      statusFilter: typeof parsed.statusFilter === "string" ? parsed.statusFilter : "all",
      timeBucketExpansion: typeof parsed.timeBucketExpansion === "object" && parsed.timeBucketExpansion !== null ? parsed.timeBucketExpansion : {},
      textScale: isTextScale(parsed.textScale) ? parsed.textScale : PLUS_INIT.textScale,
      showWorkspaceName: parsed.showWorkspaceName === true,
      workspaceIcons: readAppearanceRecord(parsed.workspaceIcons, (value) => parseIconSpec(value) !== null),
      tags,
      sessionTags: migrated?.sessionTags ?? readAppearanceRecord(parsed.sessionTags, (value) => tagIds.has(value)),
      tagExpansion: readFoldRecord(parsed.tagExpansion)
    };
    if (migrated !== void 0) {
      try {
        globalThis.localStorage?.setItem(PLUS_KEY, JSON.stringify(plus));
      } catch {
      }
    }
    return plus;
  } catch {
    return PLUS_INIT;
  }
}
var plusState = readPlus();
var plusListeners = /* @__PURE__ */ new Set();
function plusSubscribe(fn) {
  plusListeners.add(fn);
  return () => {
    plusListeners.delete(fn);
  };
}
function setPlus(patch) {
  plusState = { ...plusState, ...patch };
  try {
    globalThis.localStorage?.setItem(PLUS_KEY, JSON.stringify(plusState));
  } catch {
  }
  for (const fn of [...plusListeners]) fn();
}
var PICKED = [
  "groupBy.time",
  "groupBy.tag",
  "timeBucket.pinned",
  "timeBucket.today",
  "timeBucket.yesterday",
  "timeBucket.week",
  "timeBucket.earlier",
  "statusTabs.label",
  "statusTab.all",
  "statusTab.running",
  "statusTab.pending",
  "statusTab.unread",
  "textSize.label",
  "textSize.small",
  "textSize.normal",
  "textSize.large",
  "viewOptions.showWorkspaceName",
  "empty.noMatches",
  "appearance.workspaceIcon",
  "appearance.sessionColor",
  "appearance.icon.title",
  "appearance.color.title",
  "appearance.icon.hint",
  "appearance.color.hint",
  "appearance.tab.emoji",
  "appearance.tab.icon",
  "appearance.search",
  "appearance.noMatches",
  "appearance.reset",
  "appearance.done",
  "appearance.noColor",
  "appearance.tag.name",
  "appearance.tag.placeholder",
  "appearance.tag.save",
  "appearance.tag.create",
  "appearance.tag.new",
  "appearance.tag.untagged",
  "appearance.tag.delete",
  "appearance.tag.edit",
  "appearance.tag.editing",
  "appearance.tag.deleteTitle",
  "appearance.tag.deleteBody",
  "appearance.tag.deleteBodyNone",
  "appearance.tag.confirm",
  "appearance.cancel",
  "appearance.group.work",
  "appearance.group.tech",
  "appearance.group.nature",
  "appearance.group.life",
  "appearance.group.create",
  "appearance.group.misc",
  "appearance.group.animals",
  "appearance.group.food",
  "appearance.group.fun",
  "appearance.group.symbols",
  "appearance.color.red",
  "appearance.color.orange",
  "appearance.color.amber",
  "appearance.color.green",
  "appearance.color.teal",
  "appearance.color.blue",
  "appearance.color.violet",
  "appearance.color.pink",
  "appearance.color.gray"
];
function pick(dict) {
  const out = {};
  for (const key of PICKED) {
    const value = dict[key];
    if (value !== void 0) out[key] = value;
  }
  return out;
}
var SHIPPED_FLAT = {
  zh: "单列表",
  en: "In one list",
  ja: "単一リスト",
  es: "En una lista",
  fr: "Liste unique",
  de: "In einer Liste",
  ru: "Одним списком",
  pt: "Em uma lista"
};
var DICT_BY_LANG = {
  zh: pick(zh),
  en: pick(en),
  ja: pick(ja),
  es: pick(es),
  fr: pick(fr),
  de: pick(de),
  ru: pick(ru),
  pt: pick(pt)
};
var LANG_BY_FLAT = new Map(Object.entries(SHIPPED_FLAT).map(([lang, flat]) => [flat, DICT_BY_LANG[lang]]));
function translateFor(shipped) {
  let dict = DICT_BY_LANG.zh;
  try {
    dict = LANG_BY_FLAT.get(shipped("groupBy.flat")) ?? DICT_BY_LANG.zh;
  } catch {
    dict = DICT_BY_LANG.zh;
  }
  return (key, params) => {
    const local = dict[key];
    if (local !== void 0) {
      if (params === void 0) return local;
      return local.replace(/\{(\w+)\}/g, (token, name2) => {
        const value = params[name2];
        return value === void 0 ? token : String(value);
      });
    }
    try {
      return shipped(key, params);
    } catch {
      return key;
    }
  };
}
function useCompositeT(shipped) {
  return React2.useMemo(() => translateFor(shipped), [shipped]);
}
function anchorFor(rowKey) {
  const row = document.querySelector(`[data-row-key="${CSS.escape(rowKey)}"]`);
  if (row === null) return void 0;
  const rect = row.getBoundingClientRect();
  return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom };
}
function PaletteIcon() {
  return React2.createElement(AppearanceIcon, { spec: { kind: "icon", value: "palette" }, size: 16 });
}
function SessionTagMenuItem(props) {
  const { sessionId, displayTitle: displayTitle2, t, useMenuOpenState } = props;
  const [, setMenuOpen] = useMenuOpenState();
  return React2.createElement(import_dsh_client_ui_primitives6.MenuItemButton, {
    icon: React2.createElement(PaletteIcon),
    onSelect: () => {
      setMenuOpen(false);
      requestAppearance({ kind: "session-tag", sessionId, displayTitle: displayTitle2, anchor: anchorFor("session:" + sessionId) });
    }
  }, t("appearance.sessionColor"));
}
function makeSelectorHook(snapRef, hub) {
  const subscribe = (fn) => {
    hub.listeners.add(fn);
    return () => {
      hub.listeners.delete(fn);
    };
  };
  return function useStore(sel, eq) {
    const cache = React2.useRef(void 0);
    const get = () => {
      const next = sel(snapRef.current);
      const prev = cache.current;
      if (prev !== void 0 && (prev.value === next || eq !== void 0 && eq(prev.value, next))) return prev.value;
      cache.current = { value: next };
      return next;
    };
    return React2.useSyncExternalStore(subscribe, get);
  };
}
var SeatBoundary = class extends React2.Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    try {
      console.error("[dsh-sidebar-view] seat crashed; falling back to the shipped browser", error);
    } catch {
    }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
};
function Seat(props) {
  const { Shipped, ...rest } = props;
  const shippedState = rest.useStore((state) => state);
  const plus = React2.useSyncExternalStore(plusSubscribe, () => plusState);
  const snapshot = React2.useMemo(() => ({
    ...shippedState,
    groupBy: plus.timeMode ? "time" : shippedState["groupBy"],
    statusFilter: plus.statusFilter,
    timeBucketExpansion: plus.timeBucketExpansion,
    textScale: plus.textScale,
    showWorkspaceName: plus.showWorkspaceName,
    workspaceIcons: plus.workspaceIcons,
    tags: plus.tags,
    sessionTags: plus.sessionTags,
    tagExpansion: plus.tagExpansion
  }), [shippedState, plus]);
  const snapRef = React2.useRef(snapshot);
  snapRef.current = snapshot;
  const hub = React2.useRef({ listeners: /* @__PURE__ */ new Set() }).current;
  React2.useEffect(() => {
    for (const fn of [...hub.listeners]) fn();
  }, [hub, snapshot]);
  const useStore = React2.useMemo(() => makeSelectorHook(snapRef, hub), [hub, snapRef]);
  const shippedActions = rest.actions;
  const actions = React2.useMemo(() => ({
    ...shippedActions,
    setGroupBy: (mode) => {
      if (mode === "time") {
        setPlus({ timeMode: true });
        return;
      }
      if (plusState.timeMode) setPlus({ timeMode: false });
      shippedActions["setGroupBy"]?.(mode);
    },
    setStatusFilter: (filter) => setPlus({ statusFilter: filter }),
    setTimeBucketExpanded: (key, expanded) => {
      setPlus({ timeBucketExpansion: { ...plusState.timeBucketExpansion, [key]: expanded } });
    },
    setTagExpanded: (key, expanded) => {
      setPlus({ tagExpansion: { ...plusState.tagExpansion, [key]: expanded } });
    },
    setTextScale: (scale) => setPlus({ textScale: scale }),
    setShowWorkspaceName: (show) => setPlus({ showWorkspaceName: show }),
    setWorkspaceIcon: (workspaceId, spec) => {
      const next = { ...plusState.workspaceIcons };
      if (spec === null) delete next[workspaceId];
      else next[workspaceId] = spec;
      setPlus({ workspaceIcons: next });
    },
    setSessionTag: (sessionId, tagId) => {
      const next = { ...plusState.sessionTags };
      if (tagId === null) delete next[sessionId];
      else next[sessionId] = tagId;
      setPlus({ sessionTags: next });
    },
    createTag: (sessionId, name2, color) => {
      const id = `tag-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
      const tag = { id, name: name2.slice(0, MAX_TAG_NAME), color };
      setPlus({
        tags: [...plusState.tags, tag],
        sessionTags: { ...plusState.sessionTags, [sessionId]: id }
      });
    },
    updateTag: (tagId, name2, color) => {
      setPlus({
        tags: plusState.tags.map((tag) => tag.id === tagId ? { ...tag, name: name2.slice(0, MAX_TAG_NAME), color } : tag)
      });
    },
    deleteTag: (tagId) => {
      const nextSessionTags = { ...plusState.sessionTags };
      for (const [sessionId, id] of Object.entries(nextSessionTags)) {
        if (id === tagId) delete nextSessionTags[sessionId];
      }
      setPlus({ tags: plusState.tags.filter((tag) => tag.id !== tagId), sessionTags: nextSessionTags });
    }
  }), [shippedActions]);
  const t = useCompositeT(rest.t);
  return React2.createElement(WorkspaceBrowser, {
    ...rest,
    useStore,
    actions,
    t
  });
}
function apply(ctx) {
  const slots = ctx.get("slots");
  if (slots === void 0) {
    console.info("[dsh-sidebar-view] slots service unavailable; leaving the shipped sidebar in place");
    return;
  }
  const seated = /* @__PURE__ */ new Map();
  const locale = ctx.get("locale");
  const contextMenus = ctx.get("contextMenus");
  let t = translateFor(() => {
    throw new Error("shipped locale unavailable");
  });
  try {
    if (locale !== void 0) t = translateFor(locale.bind("workspace"));
  } catch {
  }
  if (contextMenus !== void 0) {
    ctx.effect(() => contextMenus.register({
      id: "workspace.appearance",
      target: "workspace",
      order: 150,
      resolve: ({ workspaceId, displayTitle: displayTitle2 }) => [{
        id: "icon",
        label: t("appearance.workspaceIcon"),
        icon: { key: "workspace.appearance" },
        run: () => {
          requestAppearance({ kind: "workspace-icon", workspaceId, displayTitle: displayTitle2, anchor: anchorFor("workspace:" + workspaceId) });
        }
      }]
    }), "dsh-sidebar-view: workspace icon menu action");
  }
  try {
    slots.inject("contextMenu.icon", () => slots.register(
      { name: "contextMenu.icon", key: "workspace.appearance" },
      PaletteIcon
    ));
  } catch (error) {
    console.warn("[dsh-sidebar-view] shipped context-menu icon slot unavailable", error);
  }
  try {
    slots.inject("sidebar.workspaces.session.menu.item", () => slots.register(
      { name: "sidebar.workspaces.session.menu.item", id: "dsh-sidebar-view-session-tag", order: 250 },
      (props) => React2.createElement(SessionTagMenuItem, { ...props, t })
    ));
  } catch (error) {
    console.warn("[dsh-sidebar-view] shipped session menu slot unavailable", error);
  }
  const forceRerender = () => {
    try {
      const off = slots.register({ name: SLOT, id: "dsh-sidebar-view-repaint", priority: 9999 }, () => null);
      off();
    } catch {
    }
  };
  const seat = () => {
    const entry = slots.entries(SLOT)[0];
    if (entry === void 0 || seated.has(entry)) return;
    const Shipped = entry.component;
    if (typeof Shipped !== "function") return;
    const Seated = (props) => React2.createElement(
      SeatBoundary,
      { fallback: React2.createElement(Shipped, props) },
      React2.createElement(Seat, { ...props, Shipped })
    );
    seated.set(entry, Shipped);
    entry.component = Seated;
    forceRerender();
  };
  seat();
  const timer = setTimeout(() => {
    seat();
  }, 1200);
  ctx.effect(() => slots.subscribe(SLOT, () => {
    seat();
  }), "dsh-sidebar-view: seat watcher");
  ctx.effect(() => () => {
    clearTimeout(timer);
    for (const [entry, Shipped] of seated) entry.component = Shipped;
    seated.clear();
  }, "dsh-sidebar-view: restore shipped component");
}

;(function () {
  var id = "dsh-sidebar-view"
  var existing = document.querySelector('style[data-plugin="' + id + '"]')
  if (existing) return
  var el = document.createElement('style')
  el.setAttribute('data-plugin', id)
  el.textContent = "/* src/browser/rows/AppearanceDialogs.module.css */\n.AppearanceDialogs_panel {\n  position: fixed;\n  z-index: 1200;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 272px;\n  padding: 6px;\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-menu-surface-fill, var(--dsw-alias-bg-layer-2));\n  backdrop-filter: var(--dsw-menu-backdrop-filter, blur(20px));\n  box-shadow: var(--dsw-elevation-prominent);\n  color: var(--dsw-alias-label-primary);\n  outline: none;\n}\n.AppearanceDialogs_head {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  min-width: 0;\n  padding: 2px 4px 0;\n}\n.AppearanceDialogs_headTitle {\n  flex: none;\n  color: var(--dsw-alias-label-primary);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 16px;\n}\n.AppearanceDialogs_headScope {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  line-height: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.AppearanceDialogs_toolbar {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.AppearanceDialogs_tabs {\n  display: flex;\n  flex: none;\n  gap: 2px;\n  padding: 2px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.AppearanceDialogs_tab {\n  height: 22px;\n  padding: 0 8px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: inherit;\n  font-size: 11px;\n  line-height: 16px;\n  cursor: pointer;\n}\n.AppearanceDialogs_tabOn {\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: var(--dsw-elevation-soft);\n  color: var(--dsw-alias-label-primary);\n}\n.AppearanceDialogs_search {\n  flex: 1;\n  min-width: 0;\n  height: 24px;\n  padding: 0 6px;\n  border: 0.5px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 11px;\n}\n.AppearanceDialogs_scroll {\n  max-height: 224px;\n  margin: 0 -4px;\n  padding: 0 4px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n.AppearanceDialogs_groupLabel {\n  margin: 6px 2px 3px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 14px;\n}\n.AppearanceDialogs_groupLabel:first-child {\n  margin-top: 0;\n}\n.AppearanceDialogs_grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.AppearanceDialogs_cell {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font-size: 16px;\n  line-height: 1;\n  cursor: pointer;\n}\n.AppearanceDialogs_cellOn {\n  background: var(--dsw-alias-interactive-bg-hover);\n  box-shadow: inset 0 0 0 1px var(--dsw-alias-state-business-primary);\n  color: var(--dsw-alias-label-primary);\n}\n.AppearanceDialogs_empty {\n  padding: 16px 8px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  text-align: center;\n}\n.AppearanceDialogs_footer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 6px;\n  border-top: 0.5px solid var(--dsw-alias-border-l1);\n}\n.AppearanceDialogs_textButton {\n  height: 24px;\n  padding: 0 6px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: inherit;\n  font-size: 11px;\n  cursor: pointer;\n}\n.AppearanceDialogs_currentGlyph {\n  display: inline-flex;\n  align-items: center;\n  margin-inline-start: auto;\n  color: var(--dsw-alias-label-tertiary);\n}\n.AppearanceDialogs_primaryButton {\n  height: 24px;\n  padding: 0 12px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-label-primary);\n  color: var(--dsw-alias-bg-base);\n  font: inherit;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.AppearanceDialogs_swatches {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 6px;\n  padding: 2px 0;\n}\n.AppearanceDialogs_swatchButton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  cursor: pointer;\n}\n.AppearanceDialogs_swatch {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n.AppearanceDialogs_swatchOn {\n  background: var(--dsw-alias-interactive-bg-hover);\n  box-shadow: inset 0 0 0 1.5px var(--dsw-alias-label-primary);\n}\n.AppearanceDialogs_tagRows {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  max-height: 148px;\n  margin: 0 -2px;\n  padding: 0 2px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n.AppearanceDialogs_tagRow {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n  border-radius: var(--dsw-radius-sm);\n}\n.AppearanceDialogs_tagRowOn {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.AppearanceDialogs_tagRowEditing {\n  background: var(--dsw-alias-interactive-bg-hover);\n  box-shadow: inset 0 0 0 1px var(--dsw-alias-border-l4);\n}\n.AppearanceDialogs_tagRowMain {\n  flex: 1;\n  min-width: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 26px;\n  padding: 0 6px;\n  border: 0;\n  border-radius: inherit;\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: inherit;\n  font-size: 11px;\n  line-height: 16px;\n  text-align: start;\n  cursor: pointer;\n}\n.AppearanceDialogs_tagRowOn .AppearanceDialogs_tagRowMain {\n  color: var(--dsw-alias-label-primary);\n}\n.AppearanceDialogs_tagRowDot {\n  flex: none;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.AppearanceDialogs_tagRowLabel {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.AppearanceDialogs_tagRowAction {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  cursor: pointer;\n}\n.AppearanceDialogs_tagRowNew {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  height: 24px;\n  padding: 0 6px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  font: inherit;\n  font-size: 11px;\n  cursor: pointer;\n}\n.AppearanceDialogs_editorLabel {\n  padding-top: 2px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 10px;\n  line-height: 14px;\n}\n.AppearanceDialogs_dangerPrimary {\n  background: var(--dsw-alias-state-error-primary);\n  color: #fff;\n}\n.AppearanceDialogs_nameRow {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.AppearanceDialogs_nameLabel {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  line-height: 16px;\n}\n.AppearanceDialogs_nameInput {\n  flex: 1;\n  min-width: 0;\n  height: 26px;\n  padding: 0 8px;\n  border: 0.5px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 12px;\n}\n.AppearanceDialogs_nameInput::placeholder {\n  color: var(--dsw-alias-label-tertiary);\n}\n@media (hover: hover) {\n  .AppearanceDialogs_tab:hover,\n  .AppearanceDialogs_textButton:hover,\n  .AppearanceDialogs_tagRowMain:hover,\n  .AppearanceDialogs_tagRowNew:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n  .AppearanceDialogs_tagRowAction:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n    color: var(--dsw-alias-label-primary);\n  }\n  .AppearanceDialogs_tagRowDanger:hover {\n    color: var(--dsw-alias-state-error-primary);\n  }\n  .AppearanceDialogs_cell:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n    color: var(--dsw-alias-label-primary);\n  }\n  .AppearanceDialogs_swatchButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.AppearanceDialogs_tab:focus-visible,\n.AppearanceDialogs_cell:focus-visible,\n.AppearanceDialogs_swatchButton:focus-visible,\n.AppearanceDialogs_tagRowMain:focus-visible,\n.AppearanceDialogs_tagRowAction:focus-visible,\n.AppearanceDialogs_tagRowNew:focus-visible,\n.AppearanceDialogs_nameInput:focus-visible,\n.AppearanceDialogs_textButton:focus-visible,\n.AppearanceDialogs_primaryButton:focus-visible,\n.AppearanceDialogs_search:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n\n/* src/browser/rows/WorkspaceBrowser.module.css */\n.WorkspaceBrowser_root {\n  --workspace-toolbar-height: 36px;\n  --workspace-toolbar-gap: 0px;\n  position: relative;\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) {\n  flex: none;\n  max-height: 100cqh;\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail):has(.WorkspaceBrowser_searchExpanded) {\n  height: 100cqh;\n}\n.WorkspaceBrowser_iconButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-secondary);\n}\n.WorkspaceBrowser_iconButton:focus-visible,\n.WorkspaceBrowser_searchButton:focus-visible,\n.WorkspaceBrowser_clearButton:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_iconButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.WorkspaceBrowser_viewOptionsMenu {\n  min-width: 200px;\n}\n.WorkspaceBrowser_textScaleRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 30px;\n  padding: 4px 8px;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_textScaleLabel {\n  flex: none;\n}\n.WorkspaceBrowser_textScaleTrack {\n  display: flex;\n  flex: none;\n  gap: 2px;\n  margin-inline-start: auto;\n  padding: 2px;\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.WorkspaceBrowser_textScaleOption {\n  height: 22px;\n  padding: 0 8px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: inherit;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color 120ms ease;\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_textScaleOption:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n.WorkspaceBrowser_textScaleOptionOn {\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: var(--dsw-elevation-soft);\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_textScaleOption:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n.WorkspaceBrowser_sectionHeader {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  height: var(--workspace-toolbar-height);\n  padding-left: var(--dsh-sidebar-row-padding);\n  margin-bottom: var(--workspace-toolbar-gap);\n  box-sizing: border-box;\n  border-radius: var(--dsw-radius-md);\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader.WorkspaceBrowser_searchSpacingMotion {\n  transition:\n    margin-right 180ms var(--ds-ease-in-out),\n    padding-inline 180ms var(--ds-ease-in-out),\n    gap 180ms var(--ds-ease-in-out);\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader:not(:has(.WorkspaceBrowser_searchExpanded)) {\n  margin-right: -4px;\n  padding-right: 1px;\n}\n.WorkspaceBrowser_sectionLabel {\n  position: relative;\n  left: -1px;\n  flex: none;\n  max-width: 45%;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 20px;\n  opacity: 1;\n  visibility: visible;\n  transition:\n    max-width 180ms var(--ds-ease-in-out),\n    margin-right 180ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out),\n    transform 180ms var(--ds-ease-in-out),\n    visibility 0s linear;\n}\n.WorkspaceBrowser_sectionLabelHidden {\n  max-width: 0;\n  margin-right: -4px;\n  opacity: 0;\n  transform: translateX(-4px);\n  visibility: hidden;\n  transition-delay:\n    0s,\n    0s,\n    0s,\n    0s,\n    180ms;\n}\n.WorkspaceBrowser_searchSlot {\n  flex: 1;\n  max-width: 28px;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  padding-left: 0;\n  box-sizing: border-box;\n  transition: max-width 180ms var(--ds-ease-in-out), padding-left 180ms var(--ds-ease-in-out);\n}\n.WorkspaceBrowser_searchSlotExpanded {\n  max-width: 100%;\n  padding-left: 0;\n}\n.WorkspaceBrowser_headerActions {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  max-width: 60px;\n  opacity: 1;\n  overflow: hidden;\n  visibility: visible;\n  transition:\n    max-width 180ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out),\n    transform 180ms var(--ds-ease-in-out),\n    visibility 0s linear;\n}\n.WorkspaceBrowser_headerActionsHidden {\n  max-width: 0;\n  opacity: 0;\n  transform: translateX(4px);\n  visibility: hidden;\n  pointer-events: none;\n  transition-delay:\n    0s,\n    0s,\n    0s,\n    180ms;\n}\n.WorkspaceBrowser_search {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  width: 100%;\n  height: 28px;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  cursor: text;\n  color: var(--dsw-alias-label-secondary);\n  overflow: hidden;\n  transition:\n    width 180ms var(--ds-ease-in-out),\n    padding 180ms var(--ds-ease-in-out),\n    border-color 180ms var(--ds-ease-in-out),\n    background-color 180ms var(--ds-ease-in-out);\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader:has(.WorkspaceBrowser_searchExpanded) {\n  margin-right: 0;\n  padding-inline: calc(var(--dsh-sidebar-paint-inset) + 1px);\n  gap: 0;\n}\n.WorkspaceBrowser_sectionHeader:has(.WorkspaceBrowser_searchExpanded) .WorkspaceBrowser_sectionLabelHidden {\n  margin-right: 0;\n}\n.WorkspaceBrowser_searchExpanded {\n  width: 100%;\n  height: 32px;\n  margin-inline: 0;\n  padding: 0 4px 0 0;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  color: var(--dsw-alias-label-caption);\n}\n.WorkspaceBrowser_searchButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: inherit;\n}\n.WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchButton {\n  width: 28px;\n  height: 32px;\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_searchButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n  .WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchButton:hover {\n    background: transparent;\n  }\n}\n.WorkspaceBrowser_searchInput {\n  flex: 1;\n  width: 0;\n  min-width: 0;\n  border: none;\n  outline: none;\n  background: transparent;\n  opacity: 0;\n  pointer-events: none;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-primary);\n  transition: opacity 120ms var(--ds-ease-in-out);\n}\n.WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchInput {\n  margin-left: -2px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.WorkspaceBrowser_searchInput::placeholder {\n  color: var(--dsw-alias-label-tertiary);\n}\n.WorkspaceBrowser_clearButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-secondary);\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_clearButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_sectionHeader {\n  gap: 0;\n  padding-left: 0;\n  margin-bottom: 12px;\n  justify-content: flex-start;\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_headerActions {\n  max-width: none;\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_iconButton {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--dsw-radius-md);\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_search {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0 0 12px;\n  gap: 0;\n  border-radius: var(--dsw-radius-md);\n  border-color: transparent;\n  background: transparent;\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_searchButton {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--dsw-radius-md);\n  color: var(--dsw-alias-label-primary);\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_rail .WorkspaceBrowser_searchButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.WorkspaceBrowser_statusTabs {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  height: 28px;\n  padding-inline: var(--dsh-sidebar-row-padding);\n  margin-bottom: 2px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.WorkspaceBrowser_statusTabs::-webkit-scrollbar {\n  display: none;\n}\n.WorkspaceBrowser_statusTab {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 22px;\n  padding-inline: 8px;\n  border: none;\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  font: inherit;\n  font-size: 12px;\n  line-height: 22px;\n  cursor: pointer;\n}\n.WorkspaceBrowser_statusTab:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n.WorkspaceBrowser_statusTabActive,\n.WorkspaceBrowser_statusTabActive:focus-visible {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_statusTabCount {\n  font-variant-numeric: tabular-nums;\n  color: var(--dsw-alias-label-caption);\n}\n.WorkspaceBrowser_statusTabActive .WorkspaceBrowser_statusTabCount {\n  color: var(--dsw-alias-label-secondary);\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_statusTab:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.WorkspaceBrowser_listArea {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_listArea {\n  display: block;\n  margin-left: -4px;\n  margin-right: calc(2px - var(--dsh-sidebar-inline-padding));\n  padding-left: 4px;\n  padding-right: calc(var(--dsh-sidebar-inline-padding) - var(--dsh-scrollbar-width) - 2px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-gutter: stable;\n}\n@container scroll-state(scrollable: bottom) {\n  .WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_listArea {\n    overflow-y: hidden;\n  }\n}\n.WorkspaceBrowser_treeBody {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.WorkspaceBrowser_wide {\n  animation: WorkspaceBrowser_wide-in 200ms var(--ds-ease-in-out);\n}\n@keyframes WorkspaceBrowser_wide-in {\n  from {\n    opacity: 0;\n  }\n}\n.WorkspaceBrowser_list {\n  flex: 1;\n  min-height: 0;\n  overflow: visible;\n  padding-bottom: 16px;\n}\n.WorkspaceBrowser_flatList > * + *,\n.WorkspaceBrowser_searchTree > [role=treeitem] + [role=treeitem],\n.WorkspaceBrowser_groupSection > * + * {\n  margin-top: var(--dsh-sidebar-row-gap, 2px);\n}\n.WorkspaceBrowser_searchStatus {\n  padding: 10px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.WorkspaceBrowser_skeletonRow {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--dsh-sidebar-label-gap);\n  box-sizing: border-box;\n  min-height: 48px;\n  padding: 6px var(--dsh-sidebar-row-padding) 7px;\n}\n.WorkspaceBrowser_skeletonDot {\n  flex: none;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  corner-shape: round;\n}\n.WorkspaceBrowser_skeletonBars {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.WorkspaceBrowser_skeletonDot,\n.WorkspaceBrowser_skeletonBar {\n  background: var(--dsw-alias-bg-skeleton);\n  animation: WorkspaceBrowser_search-skeleton 2s cubic-bezier(0.36, 0, 0.64, 1) infinite;\n}\n.WorkspaceBrowser_skeletonBar {\n  width: 65%;\n  height: 16px;\n  border-radius: var(--dsw-radius-xs);\n}\n.WorkspaceBrowser_skeletonBarWide {\n  width: 90%;\n  height: 13px;\n}\n@keyframes WorkspaceBrowser_search-skeleton {\n  0% {\n    opacity: 1;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  80%, 100% {\n    opacity: 1;\n  }\n}\n.WorkspaceBrowser_groupSection {\n  position: relative;\n}\n.WorkspaceBrowser_groupSection + .WorkspaceBrowser_groupSection {\n  margin-top: var(--dsh-sidebar-group-gap, 4px);\n}\n.WorkspaceBrowser_listTopDropIndicator,\n.WorkspaceBrowser_workspaceDropBefore::before,\n.WorkspaceBrowser_workspaceDropAfter::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  height: 12px;\n  background:\n    linear-gradient(\n      55deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)) 0 0 / 5px 7px no-repeat,\n    linear-gradient(\n      125deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)) 0 5px / 5px 7px no-repeat,\n    linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px / calc(100% - 4px) 2px no-repeat;\n  pointer-events: none;\n}\n.WorkspaceBrowser_listTopDropIndicator {\n  top: -8px;\n}\n.WorkspaceBrowser_listTopDropActive > .WorkspaceBrowser_workspaceDropBefore:first-child::before {\n  display: none;\n}\n.WorkspaceBrowser_workspaceDropBefore::before {\n  top: -8px;\n}\n.WorkspaceBrowser_workspaceDropAfter::after {\n  bottom: -8px;\n}\n.WorkspaceBrowser_sessionOverflowButton {\n  width: 100%;\n  height: var(--dsh-sidebar-row-height, 28px);\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0 var(--dsh-sidebar-row-padding) 0 calc(var(--dsh-sidebar-row-padding) + 16px + var(--dsh-sidebar-label-gap) + var(--dsh-workspace-indent, 0px));\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  font-size: var(--dsh-sidebar-meta-size, 12px);\n  color: var(--dsw-alias-label-tertiary);\n}\n.WorkspaceBrowser_groupSection > .WorkspaceBrowser_sessionOverflowButton {\n  margin-top: 0;\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_sessionOverflowButton:hover {\n    background: transparent;\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n.WorkspaceBrowser_empty {\n  padding: 16px 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 13px;\n}\n.WorkspaceBrowser_emptyState {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  margin-top: 80px;\n  padding: 0 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 13px;\n  line-height: 20px;\n}\n.WorkspaceBrowser_emptyState > svg {\n  margin-bottom: 4px;\n  color: var(--dsw-alias-label-caption);\n}\n.WorkspaceBrowser_emptyAction {\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-link);\n}\n.WorkspaceBrowser_renameInput {\n  box-sizing: border-box;\n  width: 100%;\n  height: 44px;\n  padding: 7px 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-lg);\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22px;\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_renameInput:disabled {\n  color: var(--dsw-alias-label-dimmed);\n}\n.WorkspaceBrowser_renameError {\n  margin-top: 8px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-state-error-primary);\n}\n.WorkspaceBrowser_deleteAction:not(:disabled) {\n  color: var(--dsw-alias-state-error-primary);\n}\n.WorkspaceBrowser_deleteStatus {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n}\n.WorkspaceBrowser_archiveActivity {\n  margin: 0 0 8px;\n  padding-left: 18px;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_archiveActivity li {\n  overflow-wrap: anywhere;\n}\n@media (pointer: coarse) {\n  .WorkspaceBrowser_searchInput,\n  .WorkspaceBrowser_renameInput {\n    font-size: 16px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .WorkspaceBrowser_wide {\n    animation: none;\n  }\n  .WorkspaceBrowser_skeletonDot,\n  .WorkspaceBrowser_skeletonBar {\n    animation: none;\n  }\n  .WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader.WorkspaceBrowser_searchSpacingMotion,\n  .WorkspaceBrowser_search,\n  .WorkspaceBrowser_sectionLabel,\n  .WorkspaceBrowser_searchSlot,\n  .WorkspaceBrowser_searchInput,\n  .WorkspaceBrowser_headerActions {\n    transition: none;\n  }\n}\n\n/* src/browser/rows/Rows.module.css */\n.Rows_projectRow,\n.Rows_sessionRow {\n  display: flex;\n  align-items: center;\n  gap: var(--dsh-sidebar-label-gap);\n  border-radius: var(--dsw-radius-md);\n  border-inline: var(--dsh-sidebar-paint-inset) solid transparent;\n  background-clip: padding-box;\n  box-sizing: border-box;\n  padding: 0 8px;\n  padding-inline-start: calc(var(--dsh-sidebar-row-padding) - var(--dsh-sidebar-paint-inset) + var(--dsh-workspace-indent, 0px));\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  color: var(--dsw-alias-label-primary);\n}\n@media (hover: hover) {\n  .Rows_projectRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.Rows_sessionRow.Rows_selected {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n.Rows_dragPreview {\n  background: var(--dsw-specific-sidebar-fill);\n}\n.Rows_searchResultRow {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  min-height: 48px;\n  box-sizing: border-box;\n  border: none;\n  border-radius: var(--dsw-radius-lg);\n  padding: 4px calc(var(--dsh-sidebar-row-padding) - var(--dsh-sidebar-paint-inset));\n  border-inline: var(--dsh-sidebar-paint-inset) solid transparent;\n  background: transparent;\n  background-clip: padding-box;\n  cursor: pointer;\n  text-align: left;\n  color: var(--dsw-alias-label-primary);\n}\n@media (hover: hover) {\n  .Rows_searchResultRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.Rows_searchResultRow.Rows_selected {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n.Rows_searchResultHeading {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n.Rows_searchResultTitle {\n  flex: 0 1 auto;\n  min-width: 0;\n  margin: 0 var(--dsh-sidebar-label-gap);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-title-size, 14px);\n  line-height: var(--dsh-sidebar-title-line, 20px);\n}\n.Rows_searchResultMeta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  margin-left: calc(16px + var(--dsh-sidebar-label-gap));\n}\n.Rows_searchResultWorkspace,\n.Rows_searchResultSnippet {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-meta-size, 12px);\n  line-height: 17px;\n}\n.Rows_searchResultWorkspace {\n  flex: none;\n  max-width: 40%;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_searchResultWorkspace:only-child {\n  max-width: 100%;\n}\n.Rows_searchResultSnippet {\n  flex: 1;\n  min-width: 0;\n  color: var(--dsw-alias-label-secondary);\n}\n.Rows_projectRow {\n  height: var(--dsh-sidebar-row-height, 28px);\n  align-items: center;\n  box-sizing: border-box;\n}\n.Rows_projectRow .Rows_rowActions {\n  height: 20px;\n}\n.Rows_sessionRow {\n  height: var(--dsh-sidebar-row-height, 28px);\n  gap: 0;\n}\n.Rows_sessionRow .Rows_title {\n  margin: 0 6px 0 var(--dsh-sidebar-label-gap);\n}\n.Rows_slot {\n  flex: none;\n  width: 16px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_visuallyHidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n}\n.Rows_folderActive {\n  color: var(--dsw-alias-state-business-primary);\n}\n.Rows_folderCustom {\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_sessionRow.Rows_tagged {\n  position: relative;\n}\n.Rows_tagTab {\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: calc(var(--dsh-sidebar-row-padding) - var(--dsh-sidebar-paint-inset) + var(--dsh-workspace-indent, 0px) - 7px);\n  width: 3px;\n  height: 14px;\n  border-radius: 2px;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.Rows_bucketDot {\n  flex: none;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.Rows_projectRow .Rows_chevron {\n  display: none;\n}\n@media (hover: hover) {\n  .Rows_projectRow:hover .Rows_chevron {\n    display: inline-flex;\n  }\n  .Rows_projectRow:hover .Rows_folder {\n    display: none;\n  }\n}\n.Rows_arrow {\n  transition: transform 150ms var(--ds-ease-in-out);\n}\n.Rows_arrowOpen {\n  transform: rotate(90deg);\n}\n.Rows_projectText {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.Rows_title {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-title-size, 14px);\n  line-height: var(--dsh-sidebar-title-line, 20px);\n}\n.Rows_renameInput {\n  min-width: 0;\n  font-size: var(--dsh-sidebar-title-size, 14px);\n  line-height: var(--dsh-sidebar-title-line, 20px);\n  padding: 0 2px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-button-elevated-fill);\n  color: inherit;\n  outline: none;\n}\n.Rows_sessionRow .Rows_title {\n  flex: 1;\n}\n.Rows_sessionRow .Rows_title[data-scrolled] {\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12px);\n}\n.Rows_sessionRow .Rows_title[data-clipped] {\n  mask-image:\n    linear-gradient(\n      to left,\n      transparent,\n      #000 12px);\n}\n.Rows_sessionRow .Rows_title[data-scrolled][data-clipped] {\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12px,\n      #000 calc(100% - 12px),\n      transparent);\n}\n.Rows_meta {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-meta-size, 12px);\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_workspaceChip {\n  flex: none;\n  max-width: 72px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-time-size, 10px);\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_time {\n  flex: none;\n  font-size: var(--dsh-sidebar-time-size, 10px);\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n  margin-inline-end: -1px;\n}\n.Rows_pinIndicator {\n  display: inline-flex;\n  flex: none;\n  width: 16px;\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n  color: var(--dsw-alias-label-caption);\n}\n.Rows_sessionRow.Rows_archived .Rows_title,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultTitle,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultWorkspace,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultSnippet {\n  color: var(--dsw-alias-label-caption);\n}\n.Rows_dot {\n  flex: none;\n}\n.Rows_rowActions {\n  flex: none;\n  display: none;\n  align-items: center;\n  gap: 13px;\n}\n@media (hover: hover) {\n  .Rows_projectRow:hover .Rows_rowActions,\n  .Rows_searchResultRow:hover .Rows_rowActions {\n    display: inline-flex;\n  }\n}\n.Rows_projectRow.Rows_menuOpen .Rows_rowActions {\n  display: inline-flex;\n}\n.Rows_rowQuickActions {\n  display: contents;\n}\n.Rows_searchResultHeading .Rows_rowActions {\n  margin-left: auto;\n}\n.Rows_rowResting {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_rowResting .Rows_pinIndicator {\n  margin-left: 0;\n}\n@media (hover: hover) {\n  .Rows_sessionRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n  .Rows_sessionRow:hover .Rows_rowActions,\n  .Rows_sessionRow.Rows_menuOpen .Rows_rowActions,\n  html[data-input-modality=keyboard] .Rows_sessionRow:focus-within .Rows_rowActions {\n    display: inline-flex;\n  }\n  .Rows_sessionRow:hover .Rows_rowResting,\n  .Rows_sessionRow.Rows_menuOpen .Rows_rowResting,\n  html[data-input-modality=keyboard] .Rows_sessionRow:focus-within .Rows_rowResting {\n    display: none;\n  }\n  .Rows_sessionRow:hover .Rows_title,\n  .Rows_sessionRow.Rows_menuOpen .Rows_title {\n    text-overflow: clip;\n  }\n}\n@media (hover: none) {\n  .Rows_projectRow .Rows_rowActions,\n  .Rows_searchResultRow .Rows_rowActions,\n  .Rows_sessionRow .Rows_rowActions {\n    display: inline-flex;\n  }\n  .Rows_sessionRow .Rows_timestamp,\n  .Rows_sessionRow:has(.Rows_pinnedAction) .Rows_pinIndicator,\n  .Rows_sessionRow .Rows_rowQuickActions > [data-slot] > :not(.Rows_pinnedAction),\n  .Rows_projectRow[aria-expanded=false] .Rows_rowActions {\n    display: none;\n  }\n  .Rows_sessionRow .Rows_pinnedAction {\n    order: -1;\n  }\n}\n.Rows_projectRow.Rows_menuOpen,\n.Rows_sessionRow.Rows_menuOpen {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n.Rows_sessionRow.Rows_dropBefore,\n.Rows_sessionRow.Rows_dropAfter {\n  position: relative;\n}\n.Rows_sessionRow.Rows_dropBefore::before,\n.Rows_sessionRow.Rows_dropAfter::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  left: calc(-1 * var(--dsh-sidebar-paint-inset));\n  right: calc(4px - var(--dsh-sidebar-paint-inset));\n  height: 12px;\n  background:\n    linear-gradient(\n      55deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)) 0 0 / 5px 7px no-repeat,\n    linear-gradient(\n      125deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)) 0 5px / 5px 7px no-repeat,\n    linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px / calc(100% - 4px) 2px no-repeat;\n  pointer-events: none;\n}\n.Rows_sessionRow.Rows_dropBefore::before {\n  top: -7px;\n}\n.Rows_sessionRow.Rows_dropAfter::after {\n  bottom: -7px;\n}\n.Rows_hoverContent {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.Rows_hoverTitle {\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--dsw-alias-hovercard-label-primary);\n  overflow-wrap: break-word;\n}\n.Rows_hoverPath {\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-hovercard-label-secondary);\n  word-break: break-all;\n}\n.Rows_hoverTag {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-hovercard-label-secondary);\n}\n.Rows_hoverTagDot {\n  flex: none;\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n}\n.Rows_hoverTime {\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-hovercard-label-secondary);\n}\n.Rows_hoverStatus {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  line-height: 20px;\n  color: var(--dsw-alias-hovercard-label-tertiary);\n}\n.Rows_hoverArchived svg {\n  flex-shrink: 0;\n  margin: 0 -4px;\n}\n.Rows_iconButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  margin: -4px;\n  border: none;\n  border-radius: var(--dsw-radius-xs);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_iconButton:focus-visible {\n  outline-offset: -2px;\n}\n@media (hover: hover) {\n  .Rows_iconButton:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n.Rows_chevron {\n  color: var(--dsw-alias-label-caption);\n}\n.Rows_bucketRow .Rows_chevron {\n  display: inline-flex;\n}\n.Rows_bucketRow .Rows_title {\n  color: var(--dsw-alias-label-secondary);\n}\n@media (prefers-reduced-motion: reduce) {\n  .Rows_arrow {\n    animation: none;\n    transition: none;\n  }\n}\n\n/* src/browser/WorkspacePicker.module.css */\n.WorkspacePicker_modalAction {\n  min-width: 72px;\n}\n.WorkspacePicker_modalError,\n.WorkspacePicker_menuStatus {\n  margin-top: 8px;\n  font-size: 12px;\n  line-height: 18px;\n}\n.WorkspacePicker_modalError {\n  color: var(--dsw-alias-state-error-primary);\n}\n.WorkspacePicker_menuStatus,\n.WorkspacePicker_pathSuffix {\n  color: var(--dsw-alias-label-secondary);\n}\n.WorkspacePicker_disambiguated {\n  display: flex;\n  gap: 4px;\n  min-width: 0;\n}\n.WorkspacePicker_title,\n.WorkspacePicker_pathSuffix {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.WorkspacePicker_pathSuffix {\n  flex: none;\n  max-width: 75%;\n}\n"
  document.head.append(el)
})();

;return module.exports}})
