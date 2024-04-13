<script setup>
const props = defineProps({
    scroll: {
        type: Number,
        default: 0,
    },
});
</script>

<template>
    <div class="relative z-0">
        <!-- Fixed Rotating Earth Component -->
        <div class="fixed top-1/4 right-0 z-1 w-[30vw] h-[30vw] opacity-50 rounded-full bg-cover bg-center"
            :style="{ 
                'background-image': `url('earth.png')`,
                transform: `translateX(50%) rotate(${scroll * 0.02}deg)` 
            }">
        </div>
    </div>
</template>
