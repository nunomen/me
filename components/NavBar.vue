<script setup>
const sections = [
    {
        title: 'Main',
        items: [
            { link: '/', title: 'Home', icon: 'fa-solid fa-home' },
            { link: '/jobs', title: 'Jobs', icon: 'fa-solid fa-briefcase' },
            { link: '/projects', title: 'Projects', icon: 'fa-solid fa-tasks' },
        ],
    },
];
</script>

<template>
    <div class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div class="flex flex-row items-center space-x-4 p-4 bg-gray-900 text-white shadow-purple-700 shadow-lg rounded-full">
            <div class="flex flex-row space-x-4">
                <div v-for="item in sections[0].items" :key="item.link" class="hover:text-purple-300 transition-colors duration-300">
                    <NuxtLink :to="item.link" :title="item.title" target="_blank" rel="noopener noreferrer" class="flex items-center">
                        <font-awesome-icon :icon="item.icon" class="w-8 h-8" size="lg" />
                        <span class="ml-2 font-medium text-sm">{{ item.title }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>