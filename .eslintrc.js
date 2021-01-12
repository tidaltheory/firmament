module.exports = {
    extends: [
        '@zazen',
        '@zazen/eslint-config/vue',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    rules: {
        'prefer-const': 'off',
        'vue/html-indent': 'off',
    },
    overrides: [
        {
            files: ['.eslintrc.js', '*.config.js', '**/bin/*.js'],
            env: {
                node: true,
            },
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
}
