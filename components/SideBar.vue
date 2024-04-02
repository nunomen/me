<template>
    <nav class="sticky v-screen h-screen top-3 left-3 z-20 flex flex-col text-white rounded-md bg-gray-900  shadow-xl shadow-purple-700"
        :class="{ 'max-w-[80px]': isCollapsed, 'w-[18rem]': !isCollapsed }">
        <div class="flex justify-between items-center px-4 mt-2 relative">
            <NuxtLink to="/" class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-code" class="text-purple-300 text-2xl" />
                <span class="text-purple-300 font-bold" v-show="!isCollapsed">Discover Me</span>
            </NuxtLink>
            <button @click="toggleCollapse"
                class="absolute border border-purple-700 bg-[#2C2C3C] w-8 h-8 mt-2 rounded-md flex justify-center items-center right-[-1.5rem] transform">
                <font-awesome-icon :icon="isCollapsed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'" />
            </button>
        </div>
        <div v-for="(section, index) in sections" :key="index" class="pt-6 flex flex-col justify-between">
            <h2 class="text-gray-400 text-sm font-medium mb-2 px-2" v-show="!isCollapsed">{{ section.title }}</h2>
            <ul class="space-y-1">
                <li v-for="item in section.items" :key="item.href"
                    class="text-gray-300 px-2 flex flex-row justify-center">
                    <NuxtLink :to="item.link" :title="item.title"
                        class="flex items-center gap-3 py-2 rounded-md hover:bg-purple-700 hover:text-white">
                        <font-awesome-icon :icon="item.icon" />
                        <span v-show="!isCollapsed" class="text-sm">{{ item.title }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isCollapsed = ref(true);
const sections = [
    {
        title: 'Main',
        items: [
            { link: '/jobs', title: 'Jobs', icon: 'fa-solid fa-briefcase' },
            { link: '/projects', title: 'Projects', icon: 'fa-solid fa-project-diagram' },
        ],
    },
    {
        title: 'Social',
        items: [
            { link: 'mailto:nuno.men@outlook.com', title: 'Email', icon: 'fa-solid fa-envelope' },
            { link: 'https://www.linkedin.com/in/nuno-laurent', title: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
            { link: 'https://github.com/littlebrat', title: 'GitHub', icon: 'fa-brands fa-github' },
        ],
    }
];

const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
};

const expandSidebar = () => {
    isCollapsed.value = false;
};

const setActiveLink = (href) => {
    // Logic to set an active link
};
</script>

<style scoped>
/* Custom styles if needed */
</style>