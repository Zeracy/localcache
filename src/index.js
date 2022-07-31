import {
    handlers,
    HANDLE_DEFAULT,
    HANDLE_ARRAY,
    HANDLE_OBJECT,
    HANDLE_OPTION_KEY_EMPTY,
    HANDLE_OPTION_KEY_SET,
    HANDLE_OPTION_KEY_GET,
} from './handlers';

/**
 * @typedef {import('./handlers.js').HandleDefault|import('./handlers.js').HandleArray|import('./handlers.js').HandleObject} handlerType
 */

/**
 * @typedef {Object} LocalCacheEntryOptions
 * @property {Value} defaultValue
 * @property {handlerType} handleAs
 */

/**
 * @param {handlerType} handleAs
 * @param {Value} value
 * @param {boolean} [set]
 * @returns {Value}
 */
const handleValue = (handleAs, value = null, set = false) => {
    const option = set ? HANDLE_OPTION_KEY_SET : HANDLE_OPTION_KEY_GET;
    const handler = value === null ? handlers[handleAs][HANDLE_OPTION_KEY_EMPTY][option] : handlers[handleAs][option];

    if (handler) {
        return handler(value);
    }

    return value;
};

class LocalCacheEntry {
    /**
     * @param {string} key
     * @param {LocalCacheEntryOptions} options
     */
    constructor (key, { defaultValue = null, handleAs = HANDLE_DEFAULT } = {}) {
        this.key = key;
        this.handleAs = handleAs;

        /**
         * @type {Value}
         */
        this.value = handleValue(handleAs, localStorage.getItem(key));

        if (this.value === null && defaultValue !== null) {
            this.value = defaultValue;
        }
    }

    /**
     * @returns {Value}
     */
    get () {
        return this.value;
    }

    /**
     * @param {Value} value
     * @returns {LocalCacheEntry}
     */
    set (value) {
        this.value = value;
        localStorage.setItem(this.key, handleValue(this.handleAs, value, true));

        return this;
    }

    /**
     * @returns {LocalCacheEntry}
     */
    remove () {
        localStorage.removeItem(this.key);

        return this;
    }
}

/**
 * @type {Map}
 */
const entries = new Map();

export {
    HANDLE_ARRAY,
    HANDLE_OBJECT,
};

/**
 * @param {string} key
 * @param {LocalCacheEntryOptions} options
 * @returns {LocalCacheEntry}
 */
export default (key, options) => {
    if (!entries.has(key)) {
        entries.set(key, new LocalCacheEntry(key, options));
    }

    return entries.get(key);
};
