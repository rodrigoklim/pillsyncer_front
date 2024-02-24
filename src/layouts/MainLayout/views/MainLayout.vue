<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              alt="test"
            />
          </q-avatar>
          {{ $t('success') }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" mini>
      <menu-drawer />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import MenuDrawer from 'layouts/MainLayout/components/menu-drawer/MenuDrawer.vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const { locale } = useI18n({ useScope: 'global' });

onMounted(() => {
  locale.value = 'pt-BR';
});
</script>
