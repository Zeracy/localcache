import LocalCache, { HANDLE_DEFAULT, HANDLE_ARRAY, HANDLE_OBJECT } from '../src/index';
import LocalStorageMock from './mocks/localStorage';

const LocalStorageMockInstance = new LocalStorageMock();
let originalLocalStorage;

describe('LocalCache Tests', () => {
    beforeAll(() => {
        if (typeof global._localStorage !== 'undefined') {
            Object.defineProperty(global, '_localStorage', {
                value: LocalStorageMockInstance,
                writable: false,
            });
        } else {
            originalLocalStorage = global.localStorage;
            global.localStorage = LocalStorageMockInstance;
        }
    });

    afterAll(() => {
        if (originalLocalStorage) {
            global.localStorage = originalLocalStorage;
        }
    });

    describe(`Handle as ${HANDLE_DEFAULT}`, () => {
        beforeEach(() => {
            LocalStorageMockInstance.reset();
        });

        it('LocalCache.constructor: should call the LocalStorage.getItem function', () => {
            LocalCache('d_a');

            expect(LocalStorageMockInstance.getItem).toBeCalled();
        });

        it('LocalCache.set: should call the LocalStorage.setItem function', () => {
            const localCacheInstance = LocalCache('d_c');

            localCacheInstance.set();
            expect(LocalStorageMockInstance.setItem).toBeCalled();
        });

        it('LocalCache.get: should return null', () => {
            const localCacheInstance = LocalCache('d_b');

            expect(localCacheInstance.get()).toBeNull();
        });

        it('LocalCache.remove: should call the LocalStorage.removeItem function', () => {
            const localCacheInstance = LocalCache('d_d');

            localCacheInstance.remove();
            expect(LocalStorageMockInstance.removeItem).toBeCalled();
        });
    });

    describe(`Handle as ${HANDLE_ARRAY}`, () => {
        beforeEach(() => {
            LocalStorageMockInstance.reset();
        });

        it('LocalCache.get: default value should be empty array', () => {
            const localCacheInstance = LocalCache('a_a', { handleAs: HANDLE_ARRAY });

            expect(localCacheInstance.get()).toStrictEqual([]);
        });

        it('LocalCache.get: should internally transform a string into an array', () => {
            LocalStorageMockInstance.setValue('1,2');
            const localCacheInstance = LocalCache('a_b', { handleAs: HANDLE_ARRAY });

            expect(localCacheInstance.get()).toStrictEqual(['1', '2']);
        });
    });

    describe(`Handle as ${HANDLE_OBJECT}`, () => {
        beforeEach(() => {
            LocalStorageMockInstance.reset();
        });

        it('LocalCache.set: should internally call JSON.stringify ', () => {
            const localCacheInstance = LocalCache('o_c', { handleAs: HANDLE_OBJECT });

            const value = { a: 1 };

            localCacheInstance.set(value);
            expect(LocalStorageMockInstance.getValue()).toBe(JSON.stringify(value));
        });

        it('LocalCache.get: default value should be empty object', () => {
            const localCacheInstance = LocalCache('o_a', { handleAs: HANDLE_OBJECT });

            expect(localCacheInstance.get()).toStrictEqual({});
        });

        it('LocalCache.get: should internally call JSON.parse ', () => {
            const value = { a: 1 };

            LocalStorageMockInstance.setValue(JSON.stringify(value));
            const localCacheInstance = LocalCache('o_b', { handleAs: HANDLE_OBJECT });

            expect(localCacheInstance.get()).toStrictEqual(value);
        });
    });
});
