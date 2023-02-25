module.exports = {
    // ...
    plugins: ['react', 'react-native', "eslint-plugin-import"],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        es6: true,
        node: true,
        'react-native/react-native': true
    },
    rules: {
        // ...
        "react/prop-types":0,
        "react-native/sort-styles": 0,
        "react-native/no-raw-text":0,
       "react-native/no-color-literals":0,
       "react/no-unescaped-entities":0
    }
};
