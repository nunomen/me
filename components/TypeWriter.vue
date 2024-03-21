<template>
    <div class="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center text-white flex justify-center">
        <div class="inline-block">
            <span v-for="(char, index) in animatedChars" :key="index" class="inline-block typewriter-text opacity-0"
                v-html="char === ' ' ? '&nbsp;' : char"></span>
            <span class="cursor bg-violet-800 inline-block w-1 h-[1em]"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    words: String,
});

const fullText = ref(props.words);
const animatedChars = ref([]);

onMounted(() => {
    const chars = Array.from(fullText.value);
    const timeInterval = 50;
    let i = 0;
    const interval = setInterval(() => {
        if (i < chars.length) {
            animatedChars.value.push(chars[i] === ' ' ? '&nbsp;' : chars[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, timeInterval);
});
</script>

<style scoped>
.typewriter-text {
    animation: fadeIn 0.05s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.cursor {
    animation: blink 1s step-start infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>