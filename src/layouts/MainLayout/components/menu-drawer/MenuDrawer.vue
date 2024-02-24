<script setup lang="ts">
import { menu } from './menu.ts';
</script>

<template>
  <div class="tw-bg-black tw-h-full tw-w-full text-center">
    <q-btn
      v-for="item in menu"
      :key="item.label"
      class="tw-my-4"
      dense
      flat
      round
      :icon="item.icon"
      color="white"
    />
  </div>
</template>

<style scoped></style>
