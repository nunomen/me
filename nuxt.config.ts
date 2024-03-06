// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
    ],
    app: {
        baseURL: '/me/', 
        // buildAssetsDir: 'assets',
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