<script setup>
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
</script>

<template>
    <SpaceBackground>
        <HeaderTitle 
            id="header"
            :name="'Nuno Mendes'"
        />
        <ScrollBarCircle :scroll="y"/>
        <div>
            <ArticleSection />
        </div>
    </SpaceBackground>
</template>

<style scoped>

</style>