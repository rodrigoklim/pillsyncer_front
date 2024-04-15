<script lang="ts" setup>
import { menu, MenuItem } from './menu.ts';
import { ref } from 'vue';

const drawer = ref(true);
const itemSelected = ref<MenuItem>();
const childrenDrawer = ref(false);
const selectMenu = (item: any) => {
  itemSelected.value = item;
  childrenDrawer.value = true;
};
</script>

<template>
  <div>
    <q-drawer
      v-model="drawer"
      :mini="!childrenDrawer"
      class="tw-bg-primary text-center"
      show-if-above
      side="left"
    >
      <div class="tw-flex tw-flex-row tw-h-full tw-w-full">
        <div class="tw-flex tw-flex-col tw-mx-auto tw-px-2">
          <q-btn
            v-for="item in menu"
            :key="item.label"
            :class="{
              'tw-bg-secondary':
                itemSelected?.label === item.label && childrenDrawer,
            }"
            :icon="item.icon"
            class="tw-my-4 tw-rounded-xl"
            color="white"
            dense
            flat
            size="lg"
            @click="selectMenu(item)"
          >
            <q-tooltip
              v-if="!childrenDrawer"
              class="tw-p-2 tw-text-lg tw-bg-gray-300 tw-text-gray-800"
              self="center right"
            >
              {{ $t(`mainMenu.words.${item.label}`) }}
            </q-tooltip>
          </q-btn>
        </div>

        <div class="tw-bg-white tw-h-full tw-w-full tw-border-r-2">
          <q-btn
            v-if="childrenDrawer"
            class="tw-absolute tw-top-[15px] tw-right-[-17px]"
            color="primary"
            dense
            icon="chevron_left"
            round
            unelevated
            @click="childrenDrawer = false"
          />
          <div
            v-for="(item, index) in menu"
            :key="item.label"
            :class="index === 0 ? 'tw-pt-6' : ''"
            class="tw-text-lg text-left poppins-regular tw-w-full tw-py-4 tw-pl-6 tw-cursor-pointer hover:tw-bg-gray-100"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </q-drawer>
  </div>
</template>

<style scoped></style>
