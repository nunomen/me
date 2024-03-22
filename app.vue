<script setup>
import { useWindowScroll } from '@vueuse/core';
import { jobs } from './components/jobs.js';
import { projects } from './components/projects.js';

const { y } = useWindowScroll();
</script>

<template>
    <SpaceBackground>
        <BannerAnnouncement />
        <TypeWriter words="Hey 👋 I'm Nuno, a Full Stack Developer!" />
        <!-- <PersonalAvatar /> -->
        <ScrollBarCircle :scroll="y"/>
        <div class="mt-8">
            <JobSection
                v-for="job in jobs" 
                :="job"
            />
            <ProjectSection
                v-for="project in projects"
                :="project"
            />
        </div>
    </SpaceBackground>
</template>

<style scoped>

</style>