<script setup>
import { useWindowScroll } from '@vueuse/core';
import NavBar from '~/components/NavBar.vue';

const { y } = useWindowScroll();
</script>

<template>
        <SpaceBackground>
            <NavBar/>
            <TypeWriter
                words="Hey  👋  I'm Nuno!"
                class="pt-20"
            />
            <!-- <PersonalAvatar /> -->
            <ScrollBarCircle :scroll="y" />
            <div class="pt-5 pb-20">
                <slot />
            </div>
            <SocialBar />
        </SpaceBackground>
</template>
