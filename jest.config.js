module.exports = {
    verbose: true,
    testRegex: '/tests/.*\\.test\\.(jsx?|js?|tsx?|ts?|mjs?)',
    transform: {
        '^.+\\.m?js$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
    moduleFileExtensions: ['js', 'jsx', 'mjs'],
};
