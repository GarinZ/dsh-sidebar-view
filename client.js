window.__ModuleLoader__.load({id:"dsh-sidebar-view",factory:require=>{var module={exports:{}};var exports=module.exports;
;try{console.info('[dsh-sidebar-view] build 2026-11-19T10:59:09.327Z')}catch(e){}
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
var React = __toESM(require("react"), 1);

// src/browser/rows/WorkspaceBrowser.tsx
var import_react4 = require("react");

// node_modules/clsx/dist/clsx.mjs
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

// src/browser/rows/WorkspaceDialogs.tsx
var import_react = require("react");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

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
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_dsh_client_ui_primitives.Modal,
      {
        open: renameTarget !== null,
        onClose: closeRename,
        closeLabel: t("close"),
        title: t("rename.workspace.title"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", disabled: renaming, onClick: closeRename, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "primary", disabled: renameBlocked, onClick: confirmRename, children: t("rename") })
        ] }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
          renameDuplicate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: t("conflict.named", { name: renameTrimmed }) }),
          renameError !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: renameError })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_dsh_client_ui_primitives.Modal,
      {
        open: deleteTarget !== null,
        onClose: closeDelete,
        closeLabel: t("close"),
        title: t("delete.workspace"),
        ...deleteTarget === null ? {} : { description: t("delete.desc", { name: deleteTarget.displayTitle }) },
        footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", disabled: deleting, onClick: closeDelete, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_dsh_client_ui_primitives.Button,
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
          deleting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: WorkspaceBrowser_default.deleteStatus, role: "status", children: t("delete.pending") }),
          deleteError !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: deleteError })
        ]
      }
    )
  ] });
}

// src/browser/rows/WorkspaceBrowser.tsx
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");

// node_modules/@deepseek-ai/dsh-api-workspace-controller/lib/types/default-workspace.js
var DEFAULT_WORKSPACE_DIRECTORY = "default-workspace";
function workspaceDisplayTitle(title, localizedDefault) {
  return title === DEFAULT_WORKSPACE_DIRECTORY ? localizedDefault : title;
}

// node_modules/@deepseek-ai/dsh-util-values/lib/index.js
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

// node_modules/@deepseek-ai/dsh-util-workspace-path/lib/index.js
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
function sessionVisible(session, current, archived, archivedFilter) {
  if (session.origin === "subagent") return false;
  if (session.blank && session.id !== current) return false;
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
  const current = mainSessionId(list);
  const groups = [];
  const accounted = /* @__PURE__ */ new Set();
  for (const workspace of workspaces) {
    const members = [];
    for (const id of workspace.sessionIds) {
      const summary = list.byId[id];
      if (summary === void 0) continue;
      accounted.add(id);
      if (!sessionVisible(summary, current, archived, archivedFilter)) continue;
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
  const stray = list.ids.map((id) => list.byId[id]).filter((s) => s !== void 0 && !accounted.has(s.id) && sessionVisible(s, current, archived, archivedFilter));
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
  const current = mainSessionId(list);
  const currentGroup = current === void 0 ? void 0 : owningGroupKey(workspaces, current);
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
  const current = mainSessionId(list);
  return list.ids.filter((id) => {
    const s = list.byId[id];
    return s !== void 0 && sessionVisible(s, current, archived, archivedFilter);
  });
}
function deriveFlat(list, sessionIds, rowState, statuses, statusFilter = "all") {
  const archived = new Set(rowState.archivedSessionIds);
  const pinned = new Set(rowState.pinnedSessionIds);
  const current = mainSessionId(list);
  const members = sessionIds.flatMap((id) => {
    const session = list.byId[id];
    return session !== void 0 && sessionVisible(session, current, archived, rowState.archivedFilter) ? [session] : [];
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
function deriveSearchResults(list, workspaces, query, archivedSessionIds, archivedFilter, statuses, content, limit) {
  const q = query.trim().toLowerCase();
  if (q === "") return { items: [], hasMore: false };
  const archived = new Set(archivedSessionIds);
  const current = mainSessionId(list);
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
    if (summary === void 0 || summary.blank || !sessionVisible(summary, current, archived, archivedFilter)) continue;
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
    if (summary !== void 0 && !summary.blank && sessionVisible(summary, current, archived, archivedFilter)) include(summary);
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
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

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
  hoverTime: "Rows_hoverTime",
  hoverStatus: "Rows_hoverStatus",
  hoverArchived: "Rows_hoverArchived",
  iconButton: "Rows_iconButton",
  bucketRow: "Rows_bucketRow"
};

// src/browser/rows/Rows.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const { unit, n } = (0, import_dsh_client_ui_primitives2.relativeTime)(updatedAt, now);
  return unit === "now" ? t("time.now") : t(`time.${unit}`, { n });
}
function hoverTimeLabel(updatedAt, now, t) {
  const { unit, n } = (0, import_dsh_client_ui_primitives2.relativeTime)(updatedAt, now);
  return unit === "now" ? t("time.now") : t("time.ago", { t: t(`time.${unit}`, { n }) });
}
function createdLabel(createdAt, t) {
  const d = new Date(createdAt);
  const pad2 = (v) => String(v).padStart(2, "0");
  const date = t("date.ymd", { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() });
  return t("hover.created", { time: `${date} ${pad2(d.getHours())}:${pad2(d.getMinutes())}` });
}
function WorkspaceHoverContent({ label, cwd, createdAt, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: Rows_default.hoverContent, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverTitle, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverPath, children: cwd }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverTime, children: createdLabel(createdAt, t) })
  ] });
}
function rowHalf(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  return e.clientY < rect.top + rect.height / 2 ? "before" : "after";
}
function ProjectRowItem(props) {
  const workspaceId = props.group.workspaceId;
  return workspaceId === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UngroupedProjectRow, { ...props }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WorkspaceProjectRow, { ...props, workspaceId });
}
function UngroupedProjectRow(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ProjectRow, { ...props, actions: { reorder: false } });
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ProjectRow, { ...props, actions });
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
  renderFactorySlot,
  useContextMenuTarget,
  useContextMenu
}) {
  const { getTriggerProps } = useContextMenu();
  const drag = actions.reorder ? offeredDrag : void 0;
  const create = actions.create;
  const row = group;
  const label = row.workspaceId === void 0 ? t("group.ungrouped") : row.label;
  const active = containsCurrentDescendant || group.expanded && group.containsCurrent;
  const menuOpen = useContextMenuTarget((target) => target?.kind === "workspace" && target.value.workspaceId === row.workspaceId);
  const dragPreview = (0, import_dsh_client_ui_primitives2.useRowDragPreview)(Rows_default.dragPreview, DRAG_PREVIEW_PROPERTIES);
  const workspaceMenuTarget = row.workspaceId !== void 0 && row.cwd !== void 0 ? { workspaceId: row.workspaceId, path: row.cwd } : void 0;
  const ownRow = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: clsx_default(Rows_default.slot, Rows_default.folder, active && Rows_default.folderActive), children: row.expanded ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconFolderOpenRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconFolderCloseRegular, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: clsx_default(Rows_default.slot, Rows_default.chevron), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconTriangleRightFillRegular, { className: clsx_default(Rows_default.arrow, row.expanded && Rows_default.arrowOpen) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.projectText, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.title, children: label }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.rowActions, children: [
          workspaceMenuTarget !== void 0 && renderFactorySlot("contextMenu.button", {
            target: { kind: "workspace", value: { ...workspaceMenuTarget, displayTitle: label } },
            label: t("actions.workspace.aria", { name: label }),
            className: Rows_default.iconButton
          }),
          create !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("actions.newSession"), shortcutKeys: newShortcut?.keys, side: "bottom", align: "end", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconNewChatOutlineRegular, { size: 14 })
            }
          ) })
        ] })
      ]
    }
  );
  if (row.createdAt === void 0) return ownRow;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_dsh_client_ui_primitives2.HoverCard,
    {
      anchor: ownRow,
      content: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
function TimeBucketRowItem({ label, count, expanded, onToggle, rowKey }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: clsx_default(Rows_default.projectRow, Rows_default.bucketRow),
      "data-row-key": `bucket:${rowKey}`,
      role: "treeitem",
      "aria-expanded": expanded,
      onClick: onToggle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: clsx_default(Rows_default.slot, Rows_default.chevron), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconTriangleRightFillRegular, { className: clsx_default(Rows_default.arrow, expanded && Rows_default.arrowOpen) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.projectText, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.title, children: label }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.meta, children: count })
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.StateDot, { state: statuses[0].state }),
    statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.visuallyHidden, children: status.label }, status.label))
  ] });
}
function PinnedIndicator({ t }) {
  const label = t("row.pinned");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.pinIndicator, role: "img", "aria-label": label, title: label, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconPinFillRegular, { size: 14 }) });
}
function SessionHoverContent({ node, cwd, now, renderSlot, t }) {
  const statuses = sessionStatuses(node, t).filter((status) => !(node.archived && (status.state === "done" || status.state === "idle")));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: Rows_default.hoverContent, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverTitle, children: displayTitle(node, t) }),
    cwd !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverPath, children: cwd }),
    !node.blank && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverTime, children: hoverTimeLabel(node.updatedAt, now, t) }),
    renderSlot("sidebar.session.row.hover", { sessionId: node.id }),
    statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: Rows_default.hoverStatus, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.StateDot, { state: status.state }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: status.label })
    ] }, status.label)),
    node.archived && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: clsx_default(Rows_default.hoverStatus, Rows_default.hoverArchived), children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconArchiveOutlineRegular, { size: 14 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("row.archived") })
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.searchResultHeading, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.slot, children: !result.archived && primaryStatus.state !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SessionStatusDots, { statuses }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.searchResultTitle, children: result.title || t("session.untitled") }),
          result.archived && canUnarchive && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.rowActions, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("actions.unarchive"), side: "bottom", align: "end", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: Rows_default.iconButton,
              "aria-label": t("menu.unarchiveSession"),
              onClick: (e) => {
                e.stopPropagation();
                onUnarchive(result.id);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconUnarchiveOutlineRegular, { size: 14 })
            }
          ) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.searchResultMeta, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.searchResultWorkspace, children: result.workspace || t("group.ungrouped") }),
          result.snippet !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.searchResultSnippet, children: result.snippet })
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
  workspaceLabel: workspaceLabel2
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
  const dragPreview = (0, import_dsh_client_ui_primitives2.useRowDragPreview)(Rows_default.dragPreview, DRAG_PREVIEW_PROPERTIES);
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
  const ownRow = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      ref: rowRef,
      "data-row-key": `session:${node.id}`,
      className: clsx_default(
        Rows_default.sessionRow,
        selected && Rows_default.selected,
        menuOpen && Rows_default.menuOpen,
        row.archived && Rows_default.archived,
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.slot, children: !row.archived && !row.blank && (showStatus ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SessionStatusDots, { statuses }) : renderSlot("sidebar.session.row.leading", { sessionId: node.id })) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        !row.blank && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.rowResting, children: [
          workspaceLabel2 !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.workspaceChip, title: workspaceLabel2, children: workspaceLabel2 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "span",
            {
              className: clsx_default(Rows_default.time, primaryStatus.trailingLabel === void 0 && Rows_default.timestamp),
              "aria-hidden": primaryStatus.trailingLabel === void 0 ? void 0 : true,
              children: primaryStatus.trailingLabel ?? timeLabel(row.updatedAt, now, t)
            }
          ),
          renderSlot("sidebar.session.row.trailing", { sessionId: node.id }),
          row.pinned && !row.archived && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PinnedIndicator, { t })
        ] }),
        !row.blank && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.rowActions, onClick: (e) => {
          e.stopPropagation();
        }, children: [
          renderFactorySlot("contextMenu.button", {
            target: { kind: "session", value: { sessionId: node.id, displayTitle: row.title } },
            label: t("actions.session.aria", { name: title }),
            className: Rows_default.iconButton
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.rowQuickActions, children: renderSlot("sidebar.workspaces.session.row.action", { sessionId: node.id, displayTitle: row.title }) })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_dsh_client_ui_primitives2.HoverCard,
    {
      anchor: ownRow,
      content: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        SessionHoverContent,
        {
          node,
          cwd: row.cwd === void 0 ? void 0 : abbreviateHomePath(row.cwd, home),
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
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");

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
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  const addEntries = flowAvailable ? [{ id: ADD_WORKSPACE, label: t("menu.addWorkspace"), icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.IconPlusOutlineRegular, { size: 16 }), disabled: flowBusy }] : [];
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
    label: suffix === void 0 ? title : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: WorkspacePicker_default.disambiguated, title: path, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: WorkspacePicker_default.title, children: title }),
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: WorkspacePicker_default.pathSuffix, children: suffix })
    ] }),
    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.IconFolderCloseRegular, { size: 16 }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_dsh_client_ui_primitives3.Menu,
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
    open && !addIsTheOnlyEntry && !menuIsEmpty && workspaceSnapshot.phase === "pending" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: WorkspacePicker_default.menuStatus, role: "status", children: t("picker.loading") }),
    renderDirectoryFlow(flowOwner),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_dsh_client_ui_primitives3.Modal,
      {
        open: errorOpen,
        onClose: closeModal,
        closeLabel: t("close"),
        title: t("folderError.title"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.Button, { variant: "outline", className: WorkspacePicker_default.modalAction, onClick: closeModal, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.Button, { variant: "primary", className: WorkspacePicker_default.modalAction, disabled: !flowAvailable, onClick: openDirectoryFlow, children: t("folderError.retry") })
        ] }),
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: WorkspacePicker_default.modalError, role: "alert", children: modalError })
      }
    )
  ] });
}

// src/browser/rows/WorkspaceBrowser.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var EXPAND_SLIDE_MS = 300;
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
function requiredWatermark(sessions, current, revealSessionId) {
  let index = 0;
  let required = 0;
  for (const session of sessions) {
    if (session.blank) continue;
    index += 1;
    const attention = index <= SESSION_WATERMARK_AUTO_MAX && (session.running || session.runningSubagentCount > 0 || session.pendingInteraction !== void 0 || session.completed || session.id === current);
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dsh_client_ui_primitives4.Menu,
    {
      open,
      onClose: () => {
        setOpen(false);
      },
      items: [
        { type: "label", id: "group-by", text: t("groupBy.label") },
        { id: "workspace", label: t("groupBy.workspace"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconFolderCloseRegular, {}) },
        { id: "workspace-tree", label: t("groupBy.workspaceTree"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconWorkspaceTreeOutlineRegular, {}) },
        { id: "flat", label: t("groupBy.flat"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconFlatListOutlineRegular, {}) },
        { id: "time", label: t("groupBy.time"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconClockOutlineRegular, {}) },
        { type: "separator", id: "order-by-separator" },
        { type: "label", id: "order-by", text: t("orderBy.label") },
        { id: "manual", label: t("orderBy.manual"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconChevronsUpDownOutlineRegular, {}) },
        { id: "updated", label: t("orderBy.updated"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconClockOutlineRegular, {}) },
        { type: "separator", id: "display-separator" }
      ],
      selectedIds: [
        groupBy,
        orderBy,
        ...showWorkspaceName ? ["show-workspace-name"] : [],
        { default: "hide-archived", show: "show-archived", only: "only-archived" }[archivedFilter]
      ],
      onSelect: (id) => {
        if (id === "workspace" || id === "workspace-tree" || id === "flat" || id === "time") onGroupPick(id);
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
          icon: showWorkspaceName ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconEyeOutlineRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconEyeOffOutlineRegular, {})
        },
        { type: "separator", id: "archived-filter-separator" },
        { type: "label", id: "filter-by", text: t("filterBy.label") },
        { id: "hide-archived", label: t("viewOptions.hideArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconArchiveOffOutlineRegular, {}) },
        { id: "show-archived", label: t("viewOptions.showArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconQueueOutlineRegular, {}) },
        { id: "only-archived", label: t("viewOptions.onlyArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconArchiveCheckOutlineRegular, {}) }
      ],
      align: "end",
      dense: true,
      listClassName: WorkspaceBrowser_default.viewOptionsMenu,
      portal: true,
      anchor: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.Tooltip, { label: t("viewOptions.label"), side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "button",
        {
          type: "button",
          className: clsx_default(WorkspaceBrowser_default.iconButton, WorkspaceBrowser_default.wide),
          "aria-label": t("viewOptions.label"),
          onClick: () => {
            setOpen((v) => !v);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconSlidersTwoOutlineRegular, {})
        }
      ) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: WorkspaceBrowser_default.textScaleRow, role: "group", "aria-label": t("textSize.label"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.textScaleLabel, children: t("textSize.label") }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.textScaleTrack, children: TEXT_SCALES.map(({ value, key }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: WorkspaceBrowser_default.emptyState, "data-row-key": "empty", children: [
    archivedOnly ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconArchiveOutlineRegular, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconQueueOutlineRegular, { size: 24 }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: archivedOnly ? t("empty.noneArchived") : filtered ? t("empty.noMatches") : t("empty.none") }),
    archivedOnly && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: WorkspaceBrowser_default.emptyAction, onClick: onLeaveArchivedOnly, children: t("empty.viewOthers") })
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
  shortcuts
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const statuses = useSessionStatus((s) => s);
  const current = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const revealGroup = revealSessionId === void 0 || !workspaceReady ? void 0 : owningGroupKey(workspaces, revealSessionId);
  const [storedWatermarks, setStoredWatermarks] = (0, import_react4.useState)({});
  const [watermarkMotionKey, setWatermarkMotionKey] = (0, import_react4.useState)(0);
  const [drag, setDrag] = (0, import_react4.useState)(null);
  const sessionDropCommitted = (0, import_react4.useRef)(false);
  const [workspaceDrag, setWorkspaceDrag] = (0, import_react4.useState)(null);
  const workspaceDropCommitted = (0, import_react4.useRef)(false);
  const nativeDragActive = drag !== null || workspaceDrag !== null;
  useNativeDragAcceptance(nativeDragActive);
  const currentGroup = current === void 0 || !workspaceReady ? void 0 : owningGroupKey(workspaces, current);
  (0, import_react4.useEffect)(() => {
    if (current === void 0 || currentGroup === void 0 || Object.hasOwn(groupExpansion, currentGroup)) return;
    setGroupExpanded(currentGroup, true);
  }, [current, currentGroup, setGroupExpanded, groupExpansion]);
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
    current,
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
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              ProjectRowItem,
              {
                newShortcut: shortcuts.find((row) => row.id === "session.new"),
                group,
                renderFactorySlot,
                useContextMenu,
                useContextMenuTarget,
                useWorkspaceAccess,
                containsCurrentDescendant: currentAncestors.has(group.key),
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
            childRows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { role: "group", children: childRows }),
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
              return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                SessionNodeItem,
                {
                  node,
                  currentId: current,
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
                  t
                },
                node.id
              );
            }),
            collapsed.hiddenCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_dsh_client_ui_primitives4.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: [
    workspaceDropAtListStart && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.listTopDropIndicator, "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_dsh_client_ui_primitives4.AnimatedRows,
      {
        className: clsx_default(WorkspaceBrowser_default.list, workspaceDropAtListStart && WorkspaceBrowser_default.listTopDropActive),
        role: "tree",
        label: t("section.sessions"),
        rowKeys,
        ready: list.phase === "ready" && workspaceReady && !nativeDragActive,
        resetKey: JSON.stringify([animationResetKey, watermarkMotionKey]),
        children: [
          groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EmptySessions, { rowState, statusFilter, onLeaveArchivedOnly, t }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_dsh_client_ui_primitives4.AnimatedRows,
    {
      className: clsx_default(WorkspaceBrowser_default.list, WorkspaceBrowser_default.flatList),
      role: "tree",
      label: t("section.sessions"),
      rowKeys: rows.length === 0 ? ["empty"] : rows.map((row) => `session:${row.id}`),
      ready: list.phase === "ready" && workspaceReady && drag === null,
      resetKey: animationResetKey,
      children: [
        rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EmptySessions, { rowState, statusFilter, onLeaveArchivedOnly, t }),
        rows.map((node) => {
          const active = drag !== null && drag.pinned === node.pinned;
          const normalizeHalf = (half) => node.blank ? "after" : half;
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
              drag: {
                start: () => {
                  dropCommitted.current = false;
                  setDrag({ accountKey: FLAT_SESSION_ORDER_KEY, sessionId: node.id, pinned: node.pinned, over: null });
                },
                active,
                marker: active && drag.over?.id === node.id ? drag.over.half : null,
                hover: (half) => {
                  setDrag((current) => current === null ? current : {
                    ...current,
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_dsh_client_ui_primitives4.AnimatedRows,
    {
      className: clsx_default(WorkspaceBrowser_default.list, WorkspaceBrowser_default.flatList),
      role: "tree",
      label: t("section.sessions"),
      rowKeys: rowKeys.length === 0 ? ["empty"] : rowKeys,
      ready: list.phase === "ready" && workspaceReady && drag === null,
      resetKey: animationResetKey,
      children: [
        groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EmptySessions, { rowState, statusFilter, onLeaveArchivedOnly, t }),
        groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
            return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                drag: {
                  start: () => {
                    dropCommitted.current = false;
                    setDrag({ accountKey: FLAT_SESSION_ORDER_KEY, sessionId: node.id, pinned: node.pinned, over: null });
                  },
                  active,
                  marker: drag !== null && active && drag.over?.id === node.id ? drag.over.half : null,
                  hover: (side) => {
                    setDrag((current) => {
                      if (current === null) return current;
                      if (bucketOf.get(current.sessionId) !== group.key) {
                        return current.over === null ? current : { ...current, over: null };
                      }
                      const next = { id: node.id, half: half(side) };
                      if (current.over?.id === next.id && current.over.half === next.half) return current;
                      return { ...current, over: next };
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
function StatusTabs({ counts, value, onChange, t }) {
  const tabs = [
    { id: "all", label: t("statusTab.all") },
    { id: "running", label: t("statusTab.running") },
    { id: "pending", label: t("statusTab.pending") },
    { id: "unread", label: t("statusTab.unread") }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.statusTabs, role: "tablist", "aria-label": t("statusTabs.label"), children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: tab.label }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.statusTabCount, children: counts[tab.id] })
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: WorkspaceBrowser_default.list, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.searchTree, role: "tree", "aria-label": t("search.results.aria"), children: results.items.map((result) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { role: "status", "aria-label": t("search.pending"), children: (results.items.length === 0 ? [0, 1] : [0]).map((i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: WorkspaceBrowser_default.skeletonRow, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.skeletonDot }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: WorkspaceBrowser_default.skeletonBars, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.skeletonBar }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: clsx_default(WorkspaceBrowser_default.skeletonBar, WorkspaceBrowser_default.skeletonBarWide) })
      ] })
    ] }, i)) }),
    !pending && results.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.empty, children: t("search.noMatches") }),
    results.hasMore && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.searchStatus, children: t("search.hasMore", { n: resultLimit }) })
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
    setRevealSessionId((current) => current === sessionId ? void 0 : current);
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.root, !wide && WorkspaceBrowser_default.rail), style: typeScaleStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.sectionHeader, wide && searchSpacingMotionEnabled && WorkspaceBrowser_default.searchSpacingMotion), "data-sidebar-workspace-header": "", children: [
      wide && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: clsx_default(WorkspaceBrowser_default.sectionLabel, WorkspaceBrowser_default.wide, searchExpanded && WorkspaceBrowser_default.sectionLabelHidden), children: groupBy === "flat" || groupBy === "time" ? t("section.sessions") : t("section.workspaces") }),
      wide && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: clsx_default(WorkspaceBrowser_default.searchSlot, searchExpanded && WorkspaceBrowser_default.searchSlotExpanded), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.Tooltip, { label: t("search"), shortcutKeys: searchShortcut?.keys, side: "bottom", delayMs: 500, disabled: searchExpanded, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconSearchOutlineRegular, { size: searchExpanded ? 11 : 14 })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
            searchExpanded && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconCloseFillRegular, {})
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.headerActions, wide && searchExpanded && WorkspaceBrowser_default.headerActionsHidden), children: [
        wide && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        directoryFlowAvailable && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.Tooltip, { label: t("workspace.add"), shortcutKeys: addShortcut?.keys, side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconProjectAddOutlineRegular, { size: wide ? 16 : 18 })
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    wide && !searchExpanded && normalizedQuery === "" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StatusTabs, { counts: statusCounts, value: statusFilter, onChange: actions.setStatusFilter, t }),
    !wide && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.search, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.Tooltip, { label: t("search"), shortcutKeys: searchShortcut?.keys, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "button",
      {
        type: "button",
        className: WorkspaceBrowser_default.searchButton,
        "aria-label": t("search.sessions.aria"),
        "aria-keyshortcuts": searchShortcut?.aria,
        onClick: () => {
          requestSearch();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconSearchOutlineRegular, { size: 18 })
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref: wide ? bindScrollerRef : void 0, className: WorkspaceBrowser_default.listArea, "data-sidebar-list-area": "", children: wide && (normalizedQuery !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    ) : groupBy === "time" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      TimeGroups,
      {
        useSessionAccess,
        usePanelInfo,
        list,
        sessionIds: orderedFlatSessionIds,
        rowState,
        statusFilter,
        workspaceLabelOf,
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
    ) : groupBy === "flat" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      FlatList,
      {
        useSessionAccess,
        usePanelInfo,
        list,
        sessionIds: orderedFlatSessionIds,
        rowState,
        statusFilter,
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
        setSessionOrder: saveSessionOrder,
        revealSessionId,
        onSessionRevealed: acknowledgeSessionReveal,
        home,
        t
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    workspaceActionRequest !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    )
  ] });
}

// src/browser/locales.ts
var zh = {
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
var PLUS_KEY = "dsh.workspace.view.sidebar-view.v1";
var PLUS_INIT = {
  timeMode: false,
  statusFilter: "all",
  timeBucketExpansion: {},
  textScale: "normal",
  showWorkspaceName: false
};
function readPlus() {
  try {
    const raw = globalThis.localStorage?.getItem(PLUS_KEY);
    if (raw === null || raw === void 0) return PLUS_INIT;
    const parsed = JSON.parse(raw);
    return {
      timeMode: parsed.timeMode === true,
      statusFilter: typeof parsed.statusFilter === "string" ? parsed.statusFilter : "all",
      timeBucketExpansion: typeof parsed.timeBucketExpansion === "object" && parsed.timeBucketExpansion !== null ? parsed.timeBucketExpansion : {},
      textScale: isTextScale(parsed.textScale) ? parsed.textScale : PLUS_INIT.textScale,
      showWorkspaceName: parsed.showWorkspaceName === true
    };
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
  "empty.noMatches"
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
function useCompositeT(shipped) {
  return React.useMemo(() => {
    let dict = DICT_BY_LANG.zh;
    try {
      const probe = shipped("groupBy.flat");
      dict = LANG_BY_FLAT.get(probe) ?? DICT_BY_LANG.zh;
    } catch {
      dict = DICT_BY_LANG.zh;
    }
    return (key, params) => {
      const local = dict[key];
      return local !== void 0 ? local : shipped(key, params);
    };
  }, [shipped]);
}
function makeSelectorHook(snapRef, hub) {
  const subscribe = (fn) => {
    hub.listeners.add(fn);
    return () => {
      hub.listeners.delete(fn);
    };
  };
  return function useStore(sel, eq) {
    const cache = React.useRef(void 0);
    const get = () => {
      const next = sel(snapRef.current);
      const prev = cache.current;
      if (prev !== void 0 && (prev.value === next || eq !== void 0 && eq(prev.value, next))) return prev.value;
      cache.current = { value: next };
      return next;
    };
    return React.useSyncExternalStore(subscribe, get);
  };
}
var SeatBoundary = class extends React.Component {
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
  const plus = React.useSyncExternalStore(plusSubscribe, () => plusState);
  const snapshot = React.useMemo(() => ({
    ...shippedState,
    groupBy: plus.timeMode ? "time" : shippedState["groupBy"],
    statusFilter: plus.statusFilter,
    timeBucketExpansion: plus.timeBucketExpansion,
    textScale: plus.textScale,
    showWorkspaceName: plus.showWorkspaceName
  }), [shippedState, plus]);
  const snapRef = React.useRef(snapshot);
  snapRef.current = snapshot;
  const hub = React.useRef({ listeners: /* @__PURE__ */ new Set() }).current;
  React.useEffect(() => {
    for (const fn of [...hub.listeners]) fn();
  }, [hub, snapshot]);
  const useStore = React.useMemo(() => makeSelectorHook(snapRef, hub), [hub, snapRef]);
  const shippedActions = rest.actions;
  const actions = React.useMemo(() => ({
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
    setTextScale: (scale) => setPlus({ textScale: scale }),
    setShowWorkspaceName: (show) => setPlus({ showWorkspaceName: show })
  }), [shippedActions]);
  const t = useCompositeT(rest.t);
  return React.createElement(WorkspaceBrowser, {
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
    const Seated = (props) => React.createElement(
      SeatBoundary,
      { fallback: React.createElement(Shipped, props) },
      React.createElement(Seat, { ...props, Shipped })
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
  el.textContent = "/* src/browser/rows/WorkspaceBrowser.module.css */\n.WorkspaceBrowser_root {\n  --workspace-toolbar-height: 36px;\n  --workspace-toolbar-gap: 0px;\n  position: relative;\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) {\n  flex: none;\n  max-height: 100cqh;\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail):has(.WorkspaceBrowser_searchExpanded) {\n  height: 100cqh;\n}\n.WorkspaceBrowser_iconButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-secondary);\n}\n.WorkspaceBrowser_iconButton:focus-visible,\n.WorkspaceBrowser_searchButton:focus-visible,\n.WorkspaceBrowser_clearButton:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_iconButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.WorkspaceBrowser_viewOptionsMenu {\n  min-width: 200px;\n}\n.WorkspaceBrowser_textScaleRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 30px;\n  padding: 4px 8px;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_textScaleLabel {\n  flex: none;\n}\n.WorkspaceBrowser_textScaleTrack {\n  display: flex;\n  flex: none;\n  gap: 2px;\n  margin-inline-start: auto;\n  padding: 2px;\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.WorkspaceBrowser_textScaleOption {\n  height: 22px;\n  padding: 0 8px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: inherit;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color 120ms ease;\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_textScaleOption:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n.WorkspaceBrowser_textScaleOptionOn {\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: var(--dsw-elevation-soft);\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_textScaleOption:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n.WorkspaceBrowser_sectionHeader {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  height: var(--workspace-toolbar-height);\n  padding-left: var(--dsh-sidebar-row-padding);\n  margin-bottom: var(--workspace-toolbar-gap);\n  box-sizing: border-box;\n  border-radius: var(--dsw-radius-md);\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader.WorkspaceBrowser_searchSpacingMotion {\n  transition:\n    margin-right 180ms var(--ds-ease-in-out),\n    padding-inline 180ms var(--ds-ease-in-out),\n    gap 180ms var(--ds-ease-in-out);\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader:not(:has(.WorkspaceBrowser_searchExpanded)) {\n  margin-right: -4px;\n  padding-right: 1px;\n}\n.WorkspaceBrowser_sectionLabel {\n  position: relative;\n  left: -1px;\n  flex: none;\n  max-width: 45%;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 20px;\n  opacity: 1;\n  visibility: visible;\n  transition:\n    max-width 180ms var(--ds-ease-in-out),\n    margin-right 180ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out),\n    transform 180ms var(--ds-ease-in-out),\n    visibility 0s linear;\n}\n.WorkspaceBrowser_sectionLabelHidden {\n  max-width: 0;\n  margin-right: -4px;\n  opacity: 0;\n  transform: translateX(-4px);\n  visibility: hidden;\n  transition-delay:\n    0s,\n    0s,\n    0s,\n    0s,\n    180ms;\n}\n.WorkspaceBrowser_searchSlot {\n  flex: 1;\n  max-width: 28px;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  padding-left: 0;\n  box-sizing: border-box;\n  transition: max-width 180ms var(--ds-ease-in-out), padding-left 180ms var(--ds-ease-in-out);\n}\n.WorkspaceBrowser_searchSlotExpanded {\n  max-width: 100%;\n  padding-left: 0;\n}\n.WorkspaceBrowser_headerActions {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  max-width: 60px;\n  opacity: 1;\n  overflow: hidden;\n  visibility: visible;\n  transition:\n    max-width 180ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out),\n    transform 180ms var(--ds-ease-in-out),\n    visibility 0s linear;\n}\n.WorkspaceBrowser_headerActionsHidden {\n  max-width: 0;\n  opacity: 0;\n  transform: translateX(4px);\n  visibility: hidden;\n  pointer-events: none;\n  transition-delay:\n    0s,\n    0s,\n    0s,\n    180ms;\n}\n.WorkspaceBrowser_search {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  width: 100%;\n  height: 28px;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  cursor: text;\n  color: var(--dsw-alias-label-secondary);\n  overflow: hidden;\n  transition:\n    width 180ms var(--ds-ease-in-out),\n    padding 180ms var(--ds-ease-in-out),\n    border-color 180ms var(--ds-ease-in-out),\n    background-color 180ms var(--ds-ease-in-out);\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader:has(.WorkspaceBrowser_searchExpanded) {\n  margin-right: 0;\n  padding-inline: calc(var(--dsh-sidebar-paint-inset) + 1px);\n  gap: 0;\n}\n.WorkspaceBrowser_sectionHeader:has(.WorkspaceBrowser_searchExpanded) .WorkspaceBrowser_sectionLabelHidden {\n  margin-right: 0;\n}\n.WorkspaceBrowser_searchExpanded {\n  width: 100%;\n  height: 32px;\n  margin-inline: 0;\n  padding: 0 4px 0 0;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  color: var(--dsw-alias-label-caption);\n}\n.WorkspaceBrowser_searchButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: inherit;\n}\n.WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchButton {\n  width: 28px;\n  height: 32px;\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_searchButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n  .WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchButton:hover {\n    background: transparent;\n  }\n}\n.WorkspaceBrowser_searchInput {\n  flex: 1;\n  width: 0;\n  min-width: 0;\n  border: none;\n  outline: none;\n  background: transparent;\n  opacity: 0;\n  pointer-events: none;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-primary);\n  transition: opacity 120ms var(--ds-ease-in-out);\n}\n.WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchInput {\n  margin-left: -2px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.WorkspaceBrowser_searchInput::placeholder {\n  color: var(--dsw-alias-label-tertiary);\n}\n.WorkspaceBrowser_clearButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-secondary);\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_clearButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_sectionHeader {\n  gap: 0;\n  padding-left: 0;\n  margin-bottom: 12px;\n  justify-content: flex-start;\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_headerActions {\n  max-width: none;\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_iconButton {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--dsw-radius-md);\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_search {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0 0 12px;\n  gap: 0;\n  border-radius: var(--dsw-radius-md);\n  border-color: transparent;\n  background: transparent;\n}\n.WorkspaceBrowser_rail .WorkspaceBrowser_searchButton {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--dsw-radius-md);\n  color: var(--dsw-alias-label-primary);\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_rail .WorkspaceBrowser_searchButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.WorkspaceBrowser_statusTabs {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  height: 28px;\n  padding-inline: var(--dsh-sidebar-row-padding);\n  margin-bottom: 2px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.WorkspaceBrowser_statusTabs::-webkit-scrollbar {\n  display: none;\n}\n.WorkspaceBrowser_statusTab {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 22px;\n  padding-inline: 8px;\n  border: none;\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  font: inherit;\n  font-size: 12px;\n  line-height: 22px;\n  cursor: pointer;\n}\n.WorkspaceBrowser_statusTab:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n.WorkspaceBrowser_statusTabActive,\n.WorkspaceBrowser_statusTabActive:focus-visible {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_statusTabCount {\n  font-variant-numeric: tabular-nums;\n  color: var(--dsw-alias-label-caption);\n}\n.WorkspaceBrowser_statusTabActive .WorkspaceBrowser_statusTabCount {\n  color: var(--dsw-alias-label-secondary);\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_statusTab:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.WorkspaceBrowser_listArea {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_listArea {\n  display: block;\n  margin-left: -4px;\n  margin-right: calc(2px - var(--dsh-sidebar-inline-padding));\n  padding-left: 4px;\n  padding-right: calc(var(--dsh-sidebar-inline-padding) - var(--dsh-scrollbar-width) - 2px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-gutter: stable;\n}\n@container scroll-state(scrollable: bottom) {\n  .WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_listArea {\n    overflow-y: hidden;\n  }\n}\n.WorkspaceBrowser_treeBody {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.WorkspaceBrowser_wide {\n  animation: WorkspaceBrowser_wide-in 200ms var(--ds-ease-in-out);\n}\n@keyframes WorkspaceBrowser_wide-in {\n  from {\n    opacity: 0;\n  }\n}\n.WorkspaceBrowser_list {\n  flex: 1;\n  min-height: 0;\n  overflow: visible;\n  padding-bottom: 16px;\n}\n.WorkspaceBrowser_flatList > * + *,\n.WorkspaceBrowser_searchTree > [role=treeitem] + [role=treeitem],\n.WorkspaceBrowser_groupSection > * + * {\n  margin-top: var(--dsh-sidebar-row-gap, 2px);\n}\n.WorkspaceBrowser_searchStatus {\n  padding: 10px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.WorkspaceBrowser_skeletonRow {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--dsh-sidebar-label-gap);\n  box-sizing: border-box;\n  min-height: 48px;\n  padding: 6px var(--dsh-sidebar-row-padding) 7px;\n}\n.WorkspaceBrowser_skeletonDot {\n  flex: none;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  corner-shape: round;\n}\n.WorkspaceBrowser_skeletonBars {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.WorkspaceBrowser_skeletonDot,\n.WorkspaceBrowser_skeletonBar {\n  background: var(--dsw-alias-bg-skeleton);\n  animation: WorkspaceBrowser_search-skeleton 2s cubic-bezier(0.36, 0, 0.64, 1) infinite;\n}\n.WorkspaceBrowser_skeletonBar {\n  width: 65%;\n  height: 16px;\n  border-radius: var(--dsw-radius-xs);\n}\n.WorkspaceBrowser_skeletonBarWide {\n  width: 90%;\n  height: 13px;\n}\n@keyframes WorkspaceBrowser_search-skeleton {\n  0% {\n    opacity: 1;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  80%, 100% {\n    opacity: 1;\n  }\n}\n.WorkspaceBrowser_groupSection {\n  position: relative;\n}\n.WorkspaceBrowser_groupSection + .WorkspaceBrowser_groupSection {\n  margin-top: var(--dsh-sidebar-group-gap, 4px);\n}\n.WorkspaceBrowser_listTopDropIndicator,\n.WorkspaceBrowser_workspaceDropBefore::before,\n.WorkspaceBrowser_workspaceDropAfter::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  height: 12px;\n  background:\n    linear-gradient(\n      55deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)) 0 0 / 5px 7px no-repeat,\n    linear-gradient(\n      125deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)) 0 5px / 5px 7px no-repeat,\n    linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px / calc(100% - 4px) 2px no-repeat;\n  pointer-events: none;\n}\n.WorkspaceBrowser_listTopDropIndicator {\n  top: -8px;\n}\n.WorkspaceBrowser_listTopDropActive > .WorkspaceBrowser_workspaceDropBefore:first-child::before {\n  display: none;\n}\n.WorkspaceBrowser_workspaceDropBefore::before {\n  top: -8px;\n}\n.WorkspaceBrowser_workspaceDropAfter::after {\n  bottom: -8px;\n}\n.WorkspaceBrowser_sessionOverflowButton {\n  width: 100%;\n  height: var(--dsh-sidebar-row-height, 28px);\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0 var(--dsh-sidebar-row-padding) 0 calc(var(--dsh-sidebar-row-padding) + 16px + var(--dsh-sidebar-label-gap) + var(--dsh-workspace-indent, 0px));\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  font-size: var(--dsh-sidebar-meta-size, 12px);\n  color: var(--dsw-alias-label-tertiary);\n}\n.WorkspaceBrowser_groupSection > .WorkspaceBrowser_sessionOverflowButton {\n  margin-top: 0;\n}\n@media (hover: hover) {\n  .WorkspaceBrowser_sessionOverflowButton:hover {\n    background: transparent;\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n.WorkspaceBrowser_empty {\n  padding: 16px 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 13px;\n}\n.WorkspaceBrowser_emptyState {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  margin-top: 80px;\n  padding: 0 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 13px;\n  line-height: 20px;\n}\n.WorkspaceBrowser_emptyState > svg {\n  margin-bottom: 4px;\n  color: var(--dsw-alias-label-caption);\n}\n.WorkspaceBrowser_emptyAction {\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-link);\n}\n.WorkspaceBrowser_renameInput {\n  box-sizing: border-box;\n  width: 100%;\n  height: 44px;\n  padding: 7px 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-lg);\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22px;\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_renameInput:disabled {\n  color: var(--dsw-alias-label-dimmed);\n}\n.WorkspaceBrowser_renameError {\n  margin-top: 8px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-state-error-primary);\n}\n.WorkspaceBrowser_deleteAction:not(:disabled) {\n  color: var(--dsw-alias-state-error-primary);\n}\n.WorkspaceBrowser_deleteStatus {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n}\n.WorkspaceBrowser_archiveActivity {\n  margin: 0 0 8px;\n  padding-left: 18px;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-primary);\n}\n.WorkspaceBrowser_archiveActivity li {\n  overflow-wrap: anywhere;\n}\n@media (pointer: coarse) {\n  .WorkspaceBrowser_searchInput,\n  .WorkspaceBrowser_renameInput {\n    font-size: 16px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .WorkspaceBrowser_wide {\n    animation: none;\n  }\n  .WorkspaceBrowser_skeletonDot,\n  .WorkspaceBrowser_skeletonBar {\n    animation: none;\n  }\n  .WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader.WorkspaceBrowser_searchSpacingMotion,\n  .WorkspaceBrowser_search,\n  .WorkspaceBrowser_sectionLabel,\n  .WorkspaceBrowser_searchSlot,\n  .WorkspaceBrowser_searchInput,\n  .WorkspaceBrowser_headerActions {\n    transition: none;\n  }\n}\n\n/* src/browser/rows/Rows.module.css */\n.Rows_projectRow,\n.Rows_sessionRow {\n  display: flex;\n  align-items: center;\n  gap: var(--dsh-sidebar-label-gap);\n  border-radius: var(--dsw-radius-md);\n  border-inline: var(--dsh-sidebar-paint-inset) solid transparent;\n  background-clip: padding-box;\n  box-sizing: border-box;\n  padding: 0 8px;\n  padding-inline-start: calc(var(--dsh-sidebar-row-padding) - var(--dsh-sidebar-paint-inset) + var(--dsh-workspace-indent, 0px));\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  color: var(--dsw-alias-label-primary);\n}\n@media (hover: hover) {\n  .Rows_projectRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.Rows_sessionRow.Rows_selected {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n.Rows_dragPreview {\n  background: var(--dsw-specific-sidebar-fill);\n}\n.Rows_searchResultRow {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  min-height: 48px;\n  box-sizing: border-box;\n  border: none;\n  border-radius: var(--dsw-radius-lg);\n  padding: 4px calc(var(--dsh-sidebar-row-padding) - var(--dsh-sidebar-paint-inset));\n  border-inline: var(--dsh-sidebar-paint-inset) solid transparent;\n  background: transparent;\n  background-clip: padding-box;\n  cursor: pointer;\n  text-align: left;\n  color: var(--dsw-alias-label-primary);\n}\n@media (hover: hover) {\n  .Rows_searchResultRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.Rows_searchResultRow.Rows_selected {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n.Rows_searchResultHeading {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n.Rows_searchResultTitle {\n  flex: 0 1 auto;\n  min-width: 0;\n  margin: 0 var(--dsh-sidebar-label-gap);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-title-size, 14px);\n  line-height: var(--dsh-sidebar-title-line, 20px);\n}\n.Rows_searchResultMeta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  margin-left: calc(16px + var(--dsh-sidebar-label-gap));\n}\n.Rows_searchResultWorkspace,\n.Rows_searchResultSnippet {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-meta-size, 12px);\n  line-height: 17px;\n}\n.Rows_searchResultWorkspace {\n  flex: none;\n  max-width: 40%;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_searchResultWorkspace:only-child {\n  max-width: 100%;\n}\n.Rows_searchResultSnippet {\n  flex: 1;\n  min-width: 0;\n  color: var(--dsw-alias-label-secondary);\n}\n.Rows_projectRow {\n  height: var(--dsh-sidebar-row-height, 28px);\n  align-items: center;\n  box-sizing: border-box;\n}\n.Rows_projectRow .Rows_rowActions {\n  height: 20px;\n}\n.Rows_sessionRow {\n  height: var(--dsh-sidebar-row-height, 28px);\n  gap: 0;\n}\n.Rows_sessionRow .Rows_title {\n  margin: 0 6px 0 var(--dsh-sidebar-label-gap);\n}\n.Rows_slot {\n  flex: none;\n  width: 16px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_visuallyHidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n}\n.Rows_folderActive {\n  color: var(--dsw-alias-state-business-primary);\n}\n.Rows_projectRow .Rows_chevron {\n  display: none;\n}\n@media (hover: hover) {\n  .Rows_projectRow:hover .Rows_chevron {\n    display: inline-flex;\n  }\n  .Rows_projectRow:hover .Rows_folder {\n    display: none;\n  }\n}\n.Rows_arrow {\n  transition: transform 150ms var(--ds-ease-in-out);\n}\n.Rows_arrowOpen {\n  transform: rotate(90deg);\n}\n.Rows_projectText {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.Rows_title {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-title-size, 14px);\n  line-height: var(--dsh-sidebar-title-line, 20px);\n}\n.Rows_renameInput {\n  min-width: 0;\n  font-size: var(--dsh-sidebar-title-size, 14px);\n  line-height: var(--dsh-sidebar-title-line, 20px);\n  padding: 0 2px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-button-elevated-fill);\n  color: inherit;\n  outline: none;\n}\n.Rows_sessionRow .Rows_title {\n  flex: 1;\n}\n.Rows_sessionRow .Rows_title[data-scrolled] {\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12px);\n}\n.Rows_sessionRow .Rows_title[data-clipped] {\n  mask-image:\n    linear-gradient(\n      to left,\n      transparent,\n      #000 12px);\n}\n.Rows_sessionRow .Rows_title[data-scrolled][data-clipped] {\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12px,\n      #000 calc(100% - 12px),\n      transparent);\n}\n.Rows_meta {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-meta-size, 12px);\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_workspaceChip {\n  flex: none;\n  max-width: 72px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--dsh-sidebar-time-size, 10px);\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_time {\n  flex: none;\n  font-size: var(--dsh-sidebar-time-size, 10px);\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n  margin-inline-end: -1px;\n}\n.Rows_pinIndicator {\n  display: inline-flex;\n  flex: none;\n  width: 16px;\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n  color: var(--dsw-alias-label-caption);\n}\n.Rows_sessionRow.Rows_archived .Rows_title,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultTitle,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultWorkspace,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultSnippet {\n  color: var(--dsw-alias-label-caption);\n}\n.Rows_dot {\n  flex: none;\n}\n.Rows_rowActions {\n  flex: none;\n  display: none;\n  align-items: center;\n  gap: 13px;\n}\n@media (hover: hover) {\n  .Rows_projectRow:hover .Rows_rowActions,\n  .Rows_searchResultRow:hover .Rows_rowActions {\n    display: inline-flex;\n  }\n}\n.Rows_projectRow.Rows_menuOpen .Rows_rowActions {\n  display: inline-flex;\n}\n.Rows_rowQuickActions {\n  display: contents;\n}\n.Rows_searchResultHeading .Rows_rowActions {\n  margin-left: auto;\n}\n.Rows_rowResting {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_rowResting .Rows_pinIndicator {\n  margin-left: 0;\n}\n@media (hover: hover) {\n  .Rows_sessionRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n  .Rows_sessionRow:hover .Rows_rowActions,\n  .Rows_sessionRow.Rows_menuOpen .Rows_rowActions,\n  html[data-input-modality=keyboard] .Rows_sessionRow:focus-within .Rows_rowActions {\n    display: inline-flex;\n  }\n  .Rows_sessionRow:hover .Rows_rowResting,\n  .Rows_sessionRow.Rows_menuOpen .Rows_rowResting,\n  html[data-input-modality=keyboard] .Rows_sessionRow:focus-within .Rows_rowResting {\n    display: none;\n  }\n  .Rows_sessionRow:hover .Rows_title,\n  .Rows_sessionRow.Rows_menuOpen .Rows_title {\n    text-overflow: clip;\n  }\n}\n@media (hover: none) {\n  .Rows_projectRow .Rows_rowActions,\n  .Rows_searchResultRow .Rows_rowActions,\n  .Rows_sessionRow .Rows_rowActions {\n    display: inline-flex;\n  }\n  .Rows_sessionRow .Rows_timestamp,\n  .Rows_sessionRow:has(.Rows_pinnedAction) .Rows_pinIndicator,\n  .Rows_sessionRow .Rows_rowQuickActions > [data-slot] > :not(.Rows_pinnedAction),\n  .Rows_projectRow[aria-expanded=false] .Rows_rowActions {\n    display: none;\n  }\n  .Rows_sessionRow .Rows_pinnedAction {\n    order: -1;\n  }\n}\n.Rows_projectRow.Rows_menuOpen,\n.Rows_sessionRow.Rows_menuOpen {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n.Rows_sessionRow.Rows_dropBefore,\n.Rows_sessionRow.Rows_dropAfter {\n  position: relative;\n}\n.Rows_sessionRow.Rows_dropBefore::before,\n.Rows_sessionRow.Rows_dropAfter::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  left: calc(-1 * var(--dsh-sidebar-paint-inset));\n  right: calc(4px - var(--dsh-sidebar-paint-inset));\n  height: 12px;\n  background:\n    linear-gradient(\n      55deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)) 0 0 / 5px 7px no-repeat,\n    linear-gradient(\n      125deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)) 0 5px / 5px 7px no-repeat,\n    linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px / calc(100% - 4px) 2px no-repeat;\n  pointer-events: none;\n}\n.Rows_sessionRow.Rows_dropBefore::before {\n  top: -7px;\n}\n.Rows_sessionRow.Rows_dropAfter::after {\n  bottom: -7px;\n}\n.Rows_hoverContent {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.Rows_hoverTitle {\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--dsw-alias-hovercard-label-primary);\n  overflow-wrap: break-word;\n}\n.Rows_hoverPath {\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-hovercard-label-secondary);\n  word-break: break-all;\n}\n.Rows_hoverTime {\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-hovercard-label-secondary);\n}\n.Rows_hoverStatus {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  line-height: 20px;\n  color: var(--dsw-alias-hovercard-label-tertiary);\n}\n.Rows_hoverArchived svg {\n  flex-shrink: 0;\n  margin: 0 -4px;\n}\n.Rows_iconButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  margin: -4px;\n  border: none;\n  border-radius: var(--dsw-radius-xs);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-tertiary);\n}\n.Rows_iconButton:focus-visible {\n  outline-offset: -2px;\n}\n@media (hover: hover) {\n  .Rows_iconButton:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n.Rows_chevron {\n  color: var(--dsw-alias-label-caption);\n}\n.Rows_bucketRow .Rows_chevron {\n  display: inline-flex;\n}\n.Rows_bucketRow .Rows_title {\n  color: var(--dsw-alias-label-secondary);\n}\n@media (prefers-reduced-motion: reduce) {\n  .Rows_arrow {\n    animation: none;\n    transition: none;\n  }\n}\n\n/* src/browser/WorkspacePicker.module.css */\n.WorkspacePicker_modalAction {\n  min-width: 72px;\n}\n.WorkspacePicker_modalError,\n.WorkspacePicker_menuStatus {\n  margin-top: 8px;\n  font-size: 12px;\n  line-height: 18px;\n}\n.WorkspacePicker_modalError {\n  color: var(--dsw-alias-state-error-primary);\n}\n.WorkspacePicker_menuStatus,\n.WorkspacePicker_pathSuffix {\n  color: var(--dsw-alias-label-secondary);\n}\n.WorkspacePicker_disambiguated {\n  display: flex;\n  gap: 4px;\n  min-width: 0;\n}\n.WorkspacePicker_title,\n.WorkspacePicker_pathSuffix {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.WorkspacePicker_pathSuffix {\n  flex: none;\n  max-width: 75%;\n}\n"
  document.head.append(el)
})();

;return module.exports}})
