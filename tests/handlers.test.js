import {
    handlers,
    HANDLE_DEFAULT,
    HANDLE_ARRAY,
    HANDLE_OBJECT,
    HANDLE_OPTION_KEY_EMPTY,
    HANDLE_OPTION_KEY_SET,
    HANDLE_OPTION_KEY_GET,
} from '../src/handlers';

describe('Handler Tests', () => {
    describe(HANDLE_DEFAULT, () => {
        describe(HANDLE_OPTION_KEY_EMPTY, () => {
            it('.set should be null', () => {
                expect(handlers[HANDLE_DEFAULT][HANDLE_OPTION_KEY_EMPTY][HANDLE_OPTION_KEY_SET]).toBeNull();
            });
            it('.get should be null', () => {
                expect(handlers[HANDLE_DEFAULT][HANDLE_OPTION_KEY_EMPTY][HANDLE_OPTION_KEY_GET]).toBeNull();
            });
        });

        it('.set should be null', () => {
            expect(handlers[HANDLE_DEFAULT][HANDLE_OPTION_KEY_SET]).toBeNull();
        });

        it('.get should be null', () => {
            expect(handlers[HANDLE_DEFAULT][HANDLE_OPTION_KEY_GET]).toBeNull();
        });
    });

    describe(HANDLE_ARRAY, () => {
        describe(HANDLE_OPTION_KEY_EMPTY, () => {
            it('.set should be null', () => {
                expect(handlers[HANDLE_ARRAY][HANDLE_OPTION_KEY_EMPTY][HANDLE_OPTION_KEY_SET]).toBeNull();
            });
            it('.get should return empty array', () => {
                expect(handlers[HANDLE_ARRAY][HANDLE_OPTION_KEY_EMPTY][HANDLE_OPTION_KEY_GET](1)).toStrictEqual([]);
            });
        });

        it('.set should be null', () => {
            expect(handlers[HANDLE_ARRAY][HANDLE_OPTION_KEY_SET]).toBeNull();
        });

        it('.get should return an array from an explosion of a string', () => {
            const value = '1,2';

            expect(handlers[HANDLE_ARRAY][HANDLE_OPTION_KEY_GET]('1,2')).toStrictEqual(value.split(','));
        });
    });

    describe(HANDLE_OBJECT, () => {
        describe(HANDLE_OPTION_KEY_EMPTY, () => {
            it('.set should be null', () => {
                expect(handlers[HANDLE_OBJECT][HANDLE_OPTION_KEY_EMPTY][HANDLE_OPTION_KEY_SET]).toBeNull();
            });
            it('.get should return empty object', () => {
                expect(handlers[HANDLE_OBJECT][HANDLE_OPTION_KEY_EMPTY][HANDLE_OPTION_KEY_GET](1)).toStrictEqual({});
            });
        });

        it('.set should return stringified object', () => {
            const value = { a: '1' };

            expect(handlers[HANDLE_OBJECT][HANDLE_OPTION_KEY_SET](value)).toStrictEqual(JSON.stringify(value));
        });

        it('.get should return parsed json from string', () => {
            const value = '{"a":"1"}';

            expect(handlers[HANDLE_OBJECT][HANDLE_OPTION_KEY_GET](value)).toStrictEqual(JSON.parse(value));
        });
    });
});
