<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useI18n } from 'vue-i18n';
import api from 'src/service/api';
import { useMainStore } from 'stores/main-store';
import { useRouter } from 'vue-router';

const { locale } = useI18n({ useScope: 'global' });
const store = useMainStore();
const router = useRouter();

onBeforeMount(async () => {
  await checkAuth();

  const userLocale = localStorage.getItem('locale');

  if (userLocale) {
    locale.value = userLocale;
  }
});

const checkAuth = async () => {
  const user = await api.auth.checkAuth();

  if (user) {
    store.setUser(user);

    await router.push({ name: 'MainLayout' });
  }
};
</script>

<template>
  <div
    class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-min-h-screen"
  >
    <div class="tw-flex tw-w-full tw-items-center tw-justify-center">
      <img alt="dosediary" src="/logo.png" />
    </div>
    <div
      class="tw-flex tw-bg-primary tw-w-full tw-min-h-screen tw-items-center tw-justify-center"
    >
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
