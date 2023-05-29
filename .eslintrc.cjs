/* eslint-env node */
module.exports = {
    rules:{
        '@typescript-eslint/no-var-requires': 0,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
};
