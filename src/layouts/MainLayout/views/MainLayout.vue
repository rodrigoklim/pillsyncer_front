<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import MenuDrawer from '../components/menu-drawer/MenuDrawer.vue';
import LocaleMenu from 'src/components/LocaleMenu/IndexPage.vue';
import { useMainStore } from 'stores/main-store';
import { useRouter } from 'vue-router';

const { locale } = useI18n({ useScope: 'global' });
const router = useRouter();
const store = useMainStore();
const loading = ref(false);

onMounted(() => {
  locale.value = 'pt-BR';
});

const logout = async () => {
  loading.value = true;
  await store.logout();

  await router.push('/login');
  loading.value = false;
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      bordered
      class="tw-bg-white tw-text-gray-600 poppins-semibold tw-py-1"
    >
      <q-toolbar>
        <img alt="dosediary" class="tw-h-[60px]" src="/logo.png" />
        <q-space />
        <locale-menu />
        <q-btn
          :loading="loading"
          class="tw-rounded-xl tw-mr-4 tw-justify-center"
          color="primary"
          flat
          round
        >
          <div class="tw-text-sm row justify-center">
            <span v-if="store.user.name">{{ store.user.name }}</span>
            <q-avatar v-else size="lg">
              <q-icon name="fa-regular fa-circle-user" />
            </q-avatar>
          </div>
          <q-menu class="tw-rounded-xl" style="width: 200px">
            <q-list>
              <q-item v-close-popup clickable>
                <q-item-section avatar>
                  <q-avatar
                    icon="fa-solid fa-user"
                    size="xl"
                    text-color="primary"
                  />
                </q-item-section>

                <q-item-section>My Account</q-item-section>
              </q-item>

              <q-item v-close-popup clickable @click="logout">
                <q-item-section avatar>
                  <q-avatar
                    class="tw-rotate-180"
                    icon="fa solid fa-arrow-right-from-bracket"
                    size="xl"
                    text-color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <menu-drawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
