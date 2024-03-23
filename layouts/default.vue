<script setup>
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
</script>

<template>
    <SpaceBackground>
        <BannerAnnouncement />
        <TypeWriter words="Hey 👋 I'm Nuno, a Full Stack Developer!" />
        <!-- <PersonalAvatar /> -->
        <ScrollBarCircle :scroll="y"/>
        <div class="mt-8">
            <slot />
        </div>
    </SpaceBackground>
</template>