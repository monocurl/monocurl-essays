/* tslint:disable */
/* eslint-disable */

export class Runtime {
    free(): void;
    [Symbol.dispose](): void;
    is_playing(): boolean;
    load_source(source: string, imports_json: string): string;
    load_source_with_root_path(root_path: string, source: string, imports_json: string): string;
    needs_work(): boolean;
    constructor();
    seek_to(slide: number, time: number): void;
    set_presentation_mode(): void;
    set_preview_mode(): void;
    set_web_mode(): void;
    step(now_seconds: number): Promise<number>;
    step_json(now_seconds: number): Promise<string>;
    toggle_play(now_seconds: number): void;
    update_parameters(updates_json: string, now_seconds: number): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_runtime_free: (a: number, b: number) => void;
    readonly runtime_is_playing: (a: number) => number;
    readonly runtime_load_source: (a: number, b: number, c: number, d: number, e: number) => [number, number, number, number];
    readonly runtime_load_source_with_root_path: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number, number, number];
    readonly runtime_needs_work: (a: number) => number;
    readonly runtime_new: () => number;
    readonly runtime_seek_to: (a: number, b: number, c: number) => void;
    readonly runtime_set_presentation_mode: (a: number) => void;
    readonly runtime_set_preview_mode: (a: number) => void;
    readonly runtime_set_web_mode: (a: number) => void;
    readonly runtime_step: (a: number, b: number) => any;
    readonly runtime_step_json: (a: number, b: number) => any;
    readonly runtime_toggle_play: (a: number, b: number) => void;
    readonly runtime_update_parameters: (a: number, b: number, c: number, d: number) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h13013c3aab61c762: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h1f06b91b2aba56bf: (a: number, b: number, c: any, d: any) => void;
    readonly __wbindgen_exn_store_command_export: (a: number) => void;
    readonly __externref_table_alloc_command_export: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc_command_export: (a: number, b: number) => number;
    readonly __wbindgen_realloc_command_export: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_destroy_closure_command_export: (a: number, b: number) => void;
    readonly __externref_table_dealloc_command_export: (a: number) => void;
    readonly __wbindgen_free_command_export: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
