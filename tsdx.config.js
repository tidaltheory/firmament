const vue = require('rollup-plugin-vue')

const GLOBALS = {
    vue: 'Vue',
}

module.exports = {
    rollup(config) {
        for (let key in GLOBALS) config.output.globals[key] = GLOBALS[key]

        config.plugins.push(
            vue({
                template: {
                    isProduction: true,
                },
            }),
        )

        return config
    },
}
