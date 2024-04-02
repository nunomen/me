<script setup>
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0">
        <SideBar />
        <SpaceBackground>
            <TypeWriter
                words="Hey 👋 I'm Nuno, a Full Stack Developer!"
                class="pt-6"
            />
            <!-- <PersonalAvatar /> -->
            <ScrollBarCircle :scroll="y" />
            <div class="pt-8">
                <slot />
            </div>
        </SpaceBackground>
    </div>
</template>
