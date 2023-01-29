import laravel from 'laravel-vite-plugin'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/sass/app.scss',
            'resources/js/app.js',
        ]),
    ],
});