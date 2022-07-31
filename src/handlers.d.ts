export const HANDLE_OPTION_KEY_EMPTY: string;

export const HANDLE_OPTION_KEY_SET: string;

export const HANDLE_OPTION_KEY_GET: string;

export type HandleDefault = 'default';

export type HandleArray = 'array';

export type HandleObject = 'object';

export const HANDLE_DEFAULT: HandleDefault;

export const HANDLE_ARRAY: HandleArray;

export const HANDLE_OBJECT: HandleObject;

export type Value = string | unknown[] | unknown | null;

export type HandlerFunction = (value: Value) => Value;

export type HandlerEntry = {
    empty: {
        set: HandlerFunction | null;
        get: HandlerFunction | null;
    };
    set: HandlerFunction | null;
    get: HandlerFunction | null;
};

export type Handler = {
    default: HandlerEntry;
    array: HandlerEntry;
    object: HandlerEntry;
};

export const handlers: Handler;
// # sourceMappingURL=handlers.d.ts.map
