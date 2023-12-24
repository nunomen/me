// https://nuxt.com/docs/api/configuration/nuxt-config
import { templateCompilerOptions } from '@tresjs/core';

export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    devtools: { enabled: true },
    vite: {
        vue: {
            ...templateCompilerOptions
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
