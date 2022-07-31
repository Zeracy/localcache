import { HandleDefault, HandleArray, HandleObject, Value, HANDLE_ARRAY, HANDLE_OBJECT } from './handlers';

type handlerType = HandleDefault | HandleArray | HandleObject;

type LocalCacheEntryOptions = {
    defaultValue: Value;
    handleAs: handlerType;
};
declare function _default(key: string, options: LocalCacheEntryOptions): LocalCacheEntry;

declare class LocalCacheEntry {
    constructor(key: string, { defaultValue, handleAs }?: LocalCacheEntryOptions);
    key: string;
    handleAs: handlerType;
    value: Value;
    get(): Value;
    set(value: Value): LocalCacheEntry;
    remove(): LocalCacheEntry;
}
export {
    LocalCacheEntryOptions,
    Value,
    handlerType,
    HANDLE_ARRAY,
    HANDLE_OBJECT,
};

export default _default;
// # sourceMappingURL=index.d.ts.map
