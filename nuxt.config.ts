// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@tresjs/nuxt',
        '@nuxt/devtools',
    ],
    tres: {
        glsl: true,
    },
    pages: false,
    app: {
        baseURL: '/me/',
    },
    devtools: { enabled: true },
    vite: {
        vue: {},
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});