/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Storage Folder - Folder for storing documents. Defaults to iCloud Drive if not set. */
  "syncFolder"?: string,
  /** Default Editor - Application to open documents in (e.g., 'Visual Studio Code'). Leave empty for system default. */
  "defaultEditor"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `list-documents` command */
  export type ListDocuments = ExtensionPreferences & {}
  /** Preferences accessible in the `create-document` command */
  export type CreateDocument = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-search` command */
  export type QuickSearch = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `list-documents` command */
  export type ListDocuments = {}
  /** Arguments passed to the `create-document` command */
  export type CreateDocument = {}
  /** Arguments passed to the `quick-search` command */
  export type QuickSearch = {
  /** ags: search term */
  "query": string
}
}

