<script setup>
import { useWindowScroll } from '@vueuse/core';
import { job } from './components/jobs.js';

const { y } = useWindowScroll();
</script>

<template>
    <SpaceBackground>
        <BannerAnnouncement />
        <TypeWriter words="Hey 👋 I'm Nuno, a Full Stack Developer!" />
        <!-- <PersonalAvatar /> -->
        <ScrollBarCircle :scroll="y"/>
        <div class="mt-8">
            <JobSection :="job"/>
        </div>
    </SpaceBackground>
</template>

<style scoped>

</style>