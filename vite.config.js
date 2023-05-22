import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/], // <--
        }),
        Markdown(),
    ],
})
