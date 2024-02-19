<script setup>
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
</script>

<template>
    <div class="bg-slate-700 border-black">
        <HeaderTitle 
            id="header"
            :name="'Nuno Mendes'"
        />

        <ScrollBarCircle :scroll="y"/>
        <BodyText />
    </div>
</template>
