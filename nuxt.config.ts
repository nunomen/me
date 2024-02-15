// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        '@vueuse/nuxt',
    ],
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
