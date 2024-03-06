<script setup>
const props = defineProps({
    scroll: {
        type: Number,
        default: 0,
    },
});
</script>

<template>
    <div class="fixed inset-0 w-full h-full overflow-hidden z-10">
        <div 
        :class="`absolute top-1/4 left-[-15%] w-[30vw] h-[30vw] rounded-full bg-cover bg-center transform`"
        :style="{ 'background-image': `url('https://kurzgesagt.org/_next/static/media/earth.996f2a7a.svg')`, transform: `rotate(${scroll}deg)` }"
        ></div>
    </div>
</template>