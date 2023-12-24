<script setup lang="ts">
import { computed } from 'vue';
import { TresCanvas, useRenderLoop, extend } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import {
    shallowRef,
    watchEffect
} from 'vue';

const { onLoop } = useRenderLoop();

const torusRef = shallowRef();


onLoop(({ delta, elapsed }) => {
    if (torusRef.value) {
        torusRef.value.rotation.x += delta * 1.2;
        torusRef.value.rotation.y += delta * 1.4;

        torusRef.value.position.y += 0.01 * Math.sin(elapsed * 2);

        torusRef.value.scale.set(
            0.1 * Math.sin(elapsed * 2),
            0.1 * Math.sin(elapsed * 2),
            0.1 * Math.sin(elapsed * 2),
        );
    }
});

watchEffect(() => {
});

</script>

<template>
    <div class="hey">
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <TresCanvas
            ref="canvasRef"
            clear-color="#82DBC5"
            shadows
            id="canvas"
        >
            <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />
            <OrbitControls />
            <TresMesh ref="torusRef">
                <TresTorusGeometry />
                <TresMeshBasicMaterial 
                    color="#FF0000" 
                />
            </TresMesh>
            <TresAmbientLight :intensity="1" />
            <TresGridHelper :size="10" :divisions="10" />
        </TresCanvas>
    </div>
    <!-- <DynamicIsland>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </DynamicIsland> -->
</template>

<style scoped>
.hey {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;
    height: 200px;
    width: 200px;
}

#canvas {
    border-radius: 30%;
    /* height: 50%;
    width: 50%; */
}

</style>