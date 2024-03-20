<script setup>
import { ref, onMounted } from 'vue';

const stars = ref([]);

function generateStars() {
    stars.value = []; // Reset stars before generating new ones
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 100 + 'vw';
        const y = -10 + 'vh'; // Start above the viewport to make the effect continuous
        const yEnd = Math.random() * 100 + 120 + 'vh'; // Ensure stars move downwards
        const animationDuration = 2 + Math.random() * 3 + 's'; // Each star falls at its own pace
        const animationDelay = Math.random() * 5 + 's'; // Start at different times for a continuous effect
        const color = `hsl(${Math.random() * 360}, 100%, 75%)`; // Generate a random hue with full saturation and lightness at 75%
        const size = 2 + Math.random() * 3 + 'px'; // Random size between 2px and 5px
        stars.value.push({
            id: i,
            x: x,
            y: y,
            yEnd: yEnd,
            animationDuration: animationDuration,
            animationDelay: animationDelay,
            color: color,
            size: size
        });
    }
}


onMounted(generateStars);
</script>

<template>
    <div class="content">
        <slot></slot>
    </div>
    <div class="space">
        <div v-for="star in stars" :key="star.id" class="star" :style="{
            '--x': star.x,
            '--y': star.y,
            '--yEnd': star.yEnd,
            'animation-duration': star.animationDuration,
            'animation-delay': star.animationDelay,
            'background-color': star.color,
            'width': star.size,
            'height': star.size,
        }" />
    </div>
</template>

<style scoped>
.space {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 1;
}

.star {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
    animation: cruise linear infinite;
}

@keyframes cruise {
    from {
        transform: translate3d(var(--x), var(--y), 0);
        opacity: 1;
    }

    to {
        transform: translate3d(var(--x), var(--yEnd), 0);
        opacity: 0;
    }
}

.content {
    padding-top: 10vh;
    position: relative;
    z-index: 2;
}
</style>