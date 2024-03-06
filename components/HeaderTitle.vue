<script setup>


const props = defineProps({
    name: {
        type: String,
        default: 'TresJS',
    },
});

</script>

<template>
    <div id="cookieBanner" class="fixed top-0 bottom-0 inset-x-0 mt-2 pb-2 sm:pb-5">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="p-2 rounded-lg bg-gray-800 shadow-lg sm:p-3">
                <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center">
                        <span class="flex p-2 rounded-lg bg-gray-900">
                            <!-- primevue icons -->
                            🏠
                            
                        </span>
                        <p class="ml-3 font-medium text-white truncate">
                            <span class="hidden md:inline">
                                Welcome, I am Nuno, a Full Stack Developer!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>