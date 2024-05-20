<template>
    <div class="fixed top-4 right-4 z-50">
        <!-- Button to toggle popover -->
        <button @click="togglePopover"
            class="bg-gray-900 text-white p-3 rounded-full shadow-purple-700 shadow-lg hover:bg-purple-700 transition-colors"
            :aria-expanded="isPopoverOpen.toString()" aria-controls="social-popover" aria-label="Toggle social links">
            <font-awesome-icon :icon="['fas', 'comment']" size="xl" />
        </button>

        <!-- Popover content -->
        <transition name="fade">
            <div v-if="isPopoverOpen" id="social-popover" ref="popover"
                class="absolute top-0 right-16 flex flex-row items-center space-x-4 p-4 bg-gray-900 text-white shadow-purple-700 shadow-lg rounded-full">
                <div v-for="link in socialLinks" :key="link.title"
                    class="hover:text-purple-300 transition-colors duration-300">
                    <a :href="link.link" :title="link.title" target="_blank" rel="noopener noreferrer"
                        class="flex items-center">
                        <font-awesome-icon :icon="link.icon" class="w-8 h-8" size="lg" />
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Social links data
const socialLinks = ref([
    { link: 'mailto:nuno.men@outlook.com', title: 'Email', icon: ['fas', 'envelope'] },
    { link: 'https://www.linkedin.com/in/nuno-laurent', title: 'LinkedIn', icon: ['fab', 'linkedin'] },
    { link: 'https://github.com/nunomen', title: 'GitHub', icon: ['fab', 'github'] }
]);

// State to manage popover visibility
const isPopoverOpen = ref(false);

// Reference to the popover element
const popover = ref(null);

// Method to toggle popover visibility
const togglePopover = () => {
    isPopoverOpen.value = !isPopoverOpen.value;
};

// Use onClickOutside to close the popover on outside click
onClickOutside(popover, () => {
    if (isPopoverOpen.value) {
        isPopoverOpen.value = false;
    }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>