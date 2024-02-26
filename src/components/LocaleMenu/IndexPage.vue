<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { LocaleList, localeList } from 'components/LocaleMenu/locale-list';
import { useI18n } from 'vue-i18n';
import filter from 'lodash/filter';

const listing = localeList as LocaleList[];
const localeSelected = ref<LocaleList>();
const menuListing = ref<LocaleList[]>([]);
const { locale } = useI18n({ useScope: 'global' });

onBeforeMount(() => {
  setMenuListing();
});

const setMenuListing = () => {
  menuListing.value = filter(listing, (item) => {
    if (item.value === locale.value) {
      localeSelected.value = item as LocaleList;
    } else {
      return true;
    }
  });
};
const changeLocale = (item: LocaleList) => {
  locale.value = item.value;
  localStorage.setItem('locale', item.value);
  setMenuListing();
};
</script>

<template>
  <div>
    <q-btn :label="localeSelected?.flag" class="tw-text-2xl" dense flat round>
      <q-menu class="tw-rounded-xl" fit>
        <q-list style="min-width: 100px">
          <q-item
            v-for="item in menuListing"
            :key="item.id"
            v-close-popup
            class="text-center"
            clickable
            @click="changeLocale(item)"
          >
            <q-item-section class="tw-text-2xl">{{ item.flag }}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<style scoped></style>
