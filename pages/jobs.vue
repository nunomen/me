<script setup>
import { jobs } from '~/components/jobs.js';
</script>

<template>
    <JobSection v-for="job in jobs" :="job" />
</template>
