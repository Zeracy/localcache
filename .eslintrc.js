module.exports = {
    extends: [
        'zeracy',
        'zeracy/jsdoc',
        'zeracy/jsdoc/required',
        'zeracy/typescript',
    ],
    env: {
        'shared-node-browser': true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    globals: {
        localStorage: true,
    },
};
