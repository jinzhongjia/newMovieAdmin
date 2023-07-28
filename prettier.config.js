// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Options} */
const config = {
    printWidth: 80,
    trailingComma: 'all',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: [
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-packagejson',
    ],
}

export default config
