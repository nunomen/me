<script setup>
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { OrbitControls, Text3D, Reflector, MeshWobbleMaterial, Stars } from '@tresjs/cientos';


import {
    shallowRef,
} from 'vue';


const { onLoop } = useRenderLoop();

const props = defineProps({
    name: {
        type: String,
        default: 'TresJS',
    },
});

const torusRef = shallowRef();

const fontPath = ref('https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json');

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
</script>

<template>
    <div class="header">
        <TresCanvas
            ref="canvasRef"
            clear-color="#111"
            shadows
            id="canvas"
        >
            <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />
            <OrbitControls />
            <Stars />
            <Suspense>
                <TresMesh ref="torusRef">
                    <MeshWobbleMaterial
                        color="orange"
                        :speed="1"
                        :factor="2"
                    />
                    <Text3D 
                        :font="fontPath"
                        :text="name"
                        :options="fontOptions"
                    />
                    
                </TresMesh>
            </Suspense>
            <!-- <TresAmbientLight :intensity="1" /> -->
            <!-- <TresGridHelper :size="10" :divisions="10" /> -->
        </TresCanvas>
    </div>
</template>

<style scoped>
.header {
    height: 200px;
    width: 100%;
}

</style>