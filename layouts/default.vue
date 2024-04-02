<script setup>
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
</script>

<template>
    <SpaceBackground>
        <SideBar />
        <TypeWriter 
            words="Hey 👋 I'm Nuno, a Full Stack Developer!"
            class="pt-6"
        />
        <!-- <PersonalAvatar /> -->
        <ScrollBarCircle :scroll="y"/>
        <div class="mt-8">
            <slot />
        </div>
    </SpaceBackground>
</template>