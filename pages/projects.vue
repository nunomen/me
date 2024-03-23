<script setup>
import { projects } from '~/components/projects.js';
</script>

<template>
    <ProjectSection v-for="project in projects" :="project" />
</template>
