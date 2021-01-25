const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        container: {
            center: true,
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

    plugins: [require('@tailwindcss/typography')],
}
