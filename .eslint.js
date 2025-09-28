module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': ['error', {
            semi: true,
            singleQuote: true,
            tabWidth: 1,
            useTabs: true,
            trailingComma: 'all',
        }],
        // TS/React правила
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
    settings: { react: { version: 'detect' } },
};
