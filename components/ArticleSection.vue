<script setup>
import { defaultTitle, defaultBody } from './text';


</script>
<template>
    <div class="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
        <div class="md:flex">
            <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-400 font-semibold">Title</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-white hover:text-indigo-300">
                    {{ defaultTitle }}
                </a>
                <p class="mt-2 text-gray-300">
                    {{ defaultBody }}
                </p>
            </div>
        </div>
    </div>
</template>