<script setup>
import { ref, watch } from 'vue';
import { useWindowScroll } from '@vueuse/core';

const stars = ref([]);

// Generate stars with random positions and animation properties
function generateStars() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 100 + 'vw';
    const y = -10 + 'vh'; // Start above the viewport to make the effect continuous
    const yEnd = Math.random() * 100 + 120 + 'vh'; // Ensure stars move downwards
    const animationDuration = 2 + Math.random() * 3 + 's'; // Each star falls at its own pace
    const animationDelay = Math.random() * 5 + 's'; // Start at different times for continuous effect
    stars.value.push({
      id: i,
      x: x,
      y: y,
      yEnd: yEnd,
      animationDuration: animationDuration,
      animationDelay: animationDelay
    });
  }
}

generateStars();

const { y } = useWindowScroll();
</script>

<template>
    <div class="content">
        <HeaderTitle 
            id="header"
            :name="'Nuno Mendes'"
        />
        <ScrollBarCircle :scroll="y"/>
        <div>
            <BodyText />
        </div>
    </div>

    <div class="space">
        <div
            v-for="star in stars"
            :key="star.id"
            class="star"
            :style="{
                '--x': star.x,
                '--y': star.y,
                '--yEnd': star.yEnd,
                'animation-duration': star.animationDuration,
                'animation-delay': star.animationDelay,
            }"
        />
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