<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useI18n } from 'vue-i18n';
import api from 'src/service/api';

const { locale } = useI18n({ useScope: 'global' });

onBeforeMount(() => {
  api.auth.csrf();

  const userLocale = localStorage.getItem('locale');

  if (userLocale) {
    locale.value = userLocale;
  }
});
</script>

<template>
  <div
    class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-min-h-screen"
  >
    <div class="tw-flex tw-w-full tw-items-center tw-justify-center">
      <img src="/logo.png" alt="dosediary" />
    </div>
    <div
      class="tw-flex tw-bg-primary tw-w-full tw-min-h-screen tw-items-center tw-justify-center"
    >
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
