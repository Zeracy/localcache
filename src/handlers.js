/**
 * @typedef {"default"} HandleDefault
 */

/**
 * @typedef {"array"} HandleArray
 */

/**
 * @typedef {"object"} HandleObject
 */

/**
 * @typedef {string|Array|Object|null} Value
 */

/**
 * @type {string}
 */
export const HANDLE_OPTION_KEY_EMPTY = 'empty';

/**
 * @type {string}
 */
export const HANDLE_OPTION_KEY_SET = 'set';

/**
 * @type {string}
 */
export const HANDLE_OPTION_KEY_GET = 'get';

/**
 * @type {HandleDefault}
 */
export const HANDLE_DEFAULT = 'default';

/**
 * @type {HandleArray}
 */
export const HANDLE_ARRAY = 'array';

/**
 * @type {HandleObject}
 */
export const HANDLE_OBJECT = 'object';

/**
 * @typedef {Function} HandlerFunction
 * @param {*} [value]
 * @returns {*}
 */

/**
 * @typedef {Object} HandlerEntry
 * @property {Object} empty
 * @property {HandlerFunction|null} empty.set
 * @property {HandlerFunction|null} empty.get
 * @property {HandlerFunction|null} set
 * @property {HandlerFunction|null} get
 */

/**
 * @typedef {Object} Handler
 * @property {HandlerEntry} default
 * @property {HandlerEntry} array
 * @property {HandlerEntry} object
 */

/**
 * @type {Handler}
 */
export const handlers = {
    [HANDLE_DEFAULT]: {
        [HANDLE_OPTION_KEY_EMPTY]: {
            [HANDLE_OPTION_KEY_SET]: null,
            [HANDLE_OPTION_KEY_GET]: null,
        },
        [HANDLE_OPTION_KEY_SET]: null,
        [HANDLE_OPTION_KEY_GET]: null,
    },
    [HANDLE_ARRAY]: {
        [HANDLE_OPTION_KEY_EMPTY]: {
            [HANDLE_OPTION_KEY_SET]: null,
            [HANDLE_OPTION_KEY_GET]: () => [],
        },
        [HANDLE_OPTION_KEY_SET]: null,
        /**
         * @param {string} value
         * @returns {Array}
         */
        [HANDLE_OPTION_KEY_GET]: (value) => value.split(','),
    },
    [HANDLE_OBJECT]: {
        [HANDLE_OPTION_KEY_EMPTY]: {
            [HANDLE_OPTION_KEY_SET]: null,
            /**
             * @returns {Object}
             */
            [HANDLE_OPTION_KEY_GET]: () => ({}),
        },
        /**
         * @param {Object} value
         * @returns {string}
         */
        [HANDLE_OPTION_KEY_SET]: (value) => JSON.stringify(value),
        /**
         * @param {string} value
         * @returns {Object}
         */
        [HANDLE_OPTION_KEY_GET]: (value) => JSON.parse(value),
    },
};
