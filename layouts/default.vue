<script setup>
import { useWindowScroll } from '@vueuse/core';
import NavBar from '~/components/NavBar.vue';

const { y } = useWindowScroll();
</script>

<template>
        <SpaceBackground>
            <NavBar/>
            <SocialBar />
            <TypeWriter
                words="Hey  👋  I'm Nuno!"
                class="pt-6"
            />
            <!-- <PersonalAvatar /> -->
            <ScrollBarCircle :scroll="y" />
            <div class="pt-8">
                <slot />
            </div>
        </SpaceBackground>
</template>
