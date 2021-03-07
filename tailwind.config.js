const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const PSEUDO_ELEMENTS = ['before', 'after']

module.exports = {
    purge: ['src/components/**/*.ts', 'playground/**/*.vue'],

    theme: {
        container: {
            center: true,
        },

        fontMetrics: {
            sans: {
                capHeight: 2048,
                ascent: 2728,
                descent: -680,
                lineGap: 0,
                unitsPerEm: 2816,
            },
        },

        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                grey: {
                    100: '#f1f2f2',
                    200: '#e7ebed',
                    300: '#dee4e8',
                    400: '#c0c8cd',
                    500: '#949ca1',
                    600: '#62696d',
                    700: '#393e41',
                    800: '#202326',
                    900: '#16191b',
                },
                code: {
                    green: '#b5f4a5',
                    yellow: '#ffe484',
                    purple: '#d9a9ff',
                    red: '#ff8383',
                    blue: '#93ddfd',
                    white: '#fff',
                },
            },
        },
    },

    variants: {
        extend: {
            display: ['before'],
        },
    },

    plugins: [
        plugin(function ({ addUtilities, addVariant, e }) {
            addUtilities(
                {
                    '.empty-content': {
                        content: "''",
                    },
                },
                PSEUDO_ELEMENTS,
            )
            PSEUDO_ELEMENTS.forEach((pseudo) => {
                addVariant(pseudo, ({ modifySelectors, separator }) => {
                    modifySelectors(({ className }) => {
                        return `.${e(
                            `${pseudo}${separator}${className}`,
                        )}::${pseudo}`
                    })
                })
            })
        }),

        require('@tailwindcss/typography'),
        // https://github.com/stormwarning/tailwindcss-capsize
        require('tailwindcss-capsize').default(),
    ],
}
