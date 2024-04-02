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
    app: {
        baseURL: '/me/',
    },
    devtools: { enabled: true },
    vite: {
        vue: {},
    },
    css: [
        '~/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});