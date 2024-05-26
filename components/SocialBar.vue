<script setup>
import { ref } from 'vue';

const socialLinks = ref([
    { link: 'mailto:nuno.men@outlook.com', title: 'Email', icon: ['fas', 'envelope'] },
    { link: 'https://www.linkedin.com/in/nuno-laurent', title: 'LinkedIn', icon: ['fab', 'linkedin'] },
    { link: 'https://github.com/nunomen', title: 'GitHub', icon: ['fab', 'github'] }
]);
</script>

<template>
    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div id="social-popover"
            class="flex flex-row items-center space-x-4 p-4 bg-gray-900 text-white shadow-purple-700 shadow-lg rounded-full">
            <div v-for="link in socialLinks" :key="link.title"
                class="hover:text-purple-300 transition-colors duration-300">
                <a :href="link.link" :title="link.title" target="_blank" rel="noopener noreferrer"
                    class="flex items-center">
                    <font-awesome-icon :icon="link.icon" class="w-8 h-8" size="lg" />
                </a>
            </div>
        </div>
    </div>
</template>