<template>
    <nav class="sticky v-screen h-screen top-0 left-0 z-20 flex flex-col bg-[#1E1E2F] text-white"
        :class="{ 'max-w-[80px]': isCollapsed, 'w-[18rem]': !isCollapsed }">
        <div class="flex justify-between items-center px-4 mt-2 relative">
            <a href="#" class="flex items-center gap-2">
                <span class="text-purple-300 font-bold" v-show="!isCollapsed">Discover Me</span>
            </a>
            <button @click="toggleCollapse"
                class="absolute border border-purple-700 bg-[#2C2C3C] w-8 h-8 mt-2 rounded-md flex justify-center items-center right-[-1rem] transform">
                <!-- SVG for expand/collapse -->
            </button>
        </div>
        <div class="p-4">
            <input type="search" placeholder="Search for anything..."
                class="bg-[#2C2C3C] h-10 w-full rounded-md pl-4 pr-10 text-gray-300 placeholder-gray-500 outline-none border-none">
            <!-- Include search icon SVG positioned absolutely within the input -->
        </div>
        <div v-for="(section, index) in sections" :key="index" class="pt-4 px-4">
            <h2 class="text-gray-400 text-sm font-medium mb-2" v-show="!isCollapsed">{{ section.title }}</h2>
            <ul class="space-y-1">
                <li v-for="item in section.items" :key="item.href" class="text-gray-300">
                    <a :href="item.href" :title="item.title" @click.prevent="setActiveLink(item.href)"
                        class="flex items-center gap-3 py-2 rounded-md hover:bg-purple-700 hover:text-white">
                        <!-- Icon SVG and item title -->
                        <span class="text-sm" v-show="!isCollapsed">{{ item.title }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isCollapsed = ref(false);
const sections = [
    {
        title: 'Main',
        items: [
            { href: '#home', title: 'Home' },
            // More items...
        ],
    },
    // More sections...
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