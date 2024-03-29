import path from 'path'

import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
    resolve: {
        alias: {
            firmament: path.resolve(__dirname, '../src/index.ts'),
        },
    },
    base: process.env.NODE_ENV === 'production' ? '/firmament/' : '/',
    plugins: [
        Vue({ include: [/\.vue$/, /\.md$/] }),
        Pages({
            pagesDir: [
                {
                    dir: 'src/pages',
                    baseRoute:
                        process.env.NODE_ENV === 'production'
                            ? 'firmament'
                            : '',
                },
            ],
            extensions: ['vue', 'md'],
        }),
    ],
})
