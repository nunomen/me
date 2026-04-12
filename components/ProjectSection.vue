<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    mediaType: {
        type: String as PropType<'video' | 'image'>,
        required: true,
    },
    mediaLink: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        default: null,
    },
});

const config = useRuntimeConfig()
</script>

<template>
    <div class="max-w-xl mx-auto bg-opacity-80 shadow-lg rounded-xl p-6 mb-4 space-y-4 bg-gray-900">
        <div class="flex items-start justify-between gap-4">
            <h2 class="text-xl font-semibold text-purple-600">{{ title }}</h2>
            <a
                v-if="url"
                :href="url"
                target="_blank"
                rel="noreferrer"
                class="text-sm text-purple-300 hover:text-purple-400 transition duration-300 ease-in-out whitespace-nowrap"
            >
                View project
            </a>
        </div>
        <p class="text-sm text-gray-400">{{ description }}</p>
        <div v-if="mediaType === 'video'" class="relative w-full overflow-hidden" style="padding-top: 56.25%">
            <iframe class="absolute top-0 left-0 w-full h-full" :src="mediaLink" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div v-else-if="mediaType === 'image'" class="w-full">
            <img class="w-full h-auto" :src="config.app.baseURL+mediaLink" :alt="title" />
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
            <span v-for="(technology, index) in technologies" :key="index"
                class="bg-purple-700 text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                {{ technology }}
            </span>
        </div>
    </div>
</template>
