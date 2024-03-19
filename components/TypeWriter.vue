<template>
    <div class="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center text-white">
      <span v-for="(char, index) in wordsArray" :key="index"
        :style="{ 'animation-delay': `${index * 0.1}s` }"
        class="character-animation">
        {{ char }}
      </span>
      <span class="cursor-animation"></span>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    words: String,
  });
  
  const wordsArray = ref([...props.words]);
  </script>
  
  <style scoped>
  .character-animation {
    display: inline-block;
    opacity: 0;
    transform: translateY(-100%);
    animation: slideIn 0.6s forwards;
  }
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .cursor-animation {
    display: inline-block;
    background-color: blue;
    width: 4px;
    height: 1em;
    margin-left: 5px;
    animation: blink 1s step-start infinite;
  }
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  </style>
  