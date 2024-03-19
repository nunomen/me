<script setup>
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
</script>

<template>
    <SpaceBackground>
        <TypeWriter words="Welcome, I am Nuno, a Full Stack Developer!" />

        <ScrollBarCircle :scroll="y"/>
        <div>
            <ArticleSection />
        </div>
    </SpaceBackground>
</template>

<style scoped>

</style>