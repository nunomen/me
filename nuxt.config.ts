// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
    ],
    experimental: {
        payloadExtraction: true
    }
    ssr: true,
    devtools: { enabled: false },
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