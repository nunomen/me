<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { GLTFModel, CameraControls } from '@tresjs/cientos';

</script>

<template>
  <div class="fixed inset-0 w-full h-full overflow-hidden z-50">
    <!-- Center the canvas container vertically and position it to the right -->
    <div class="absolute top-1/2 right-0 w-[30vw] h-[30vw] z-10 transform -translate-y-1/2">
      <TresCanvas>
        <TresPerspectiveCamera :position="[0, 3, 3]" />
        <CameraControls />
        <Suspense>
          <GLTFModel path="model.glb" />
        </Suspense>
        <TresDirectionalLight :intensity="2" :position="[0, 0, 3]" />
        <TresAmbientLight :intensity="3" />
      </TresCanvas>
    </div>
  </div>
</template>