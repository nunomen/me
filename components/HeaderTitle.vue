<script setup lang="ts">
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { OrbitControls, Text3D, Stars, MeshGlassMaterial } from '@tresjs/cientos';


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

onMounted(() => {
    
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
            <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 2]" />
            <OrbitControls />
            <Stars />
            <Suspense>
                <TresMesh ref="torusRef">
                    <Text3D 
                        :font="fontPath"
                        :text="name"
                        :color="'red'"
                    />
                </TresMesh>
            </Suspense>
            <TresAmbientLight :color="0xffffff" :intensity="1" />
            <TresHemisphereLight :color="0xff0000" :intensity="1" />
        </TresCanvas>
    </div>
</template>

<style scoped>
.header {
    height: 200px;
    width: 100%;
}

</style>