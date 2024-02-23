<script setup lang="ts">
import LocaleMenu from 'components/LocaleMenu/IndexPage.vue';
defineProps<{
  primaryBtnTitle: string;
  secondaryBtnTitle?: string;
  errorMessage: string;
  successMessage?: string;
  loading: boolean;
  title: string;
}>();
</script>

<template>
  <q-card flat class="tw-w-1/2 tw-rounded-xl">
    <q-card-section
      class="tw-bg-secondary tw-rounded-xl tw-full tw-flex tw-justify-between tw-items-center"
    >
      <div class="tw-text-2xl blacker-extrabold tw-uppercase">
        {{ title }}
      </div>
      <locale-menu />
    </q-card-section>

    <slot />

    <q-card-section class="tw-pt-0 tw-mx-4">
      <div
        v-if="successMessage"
        class="tw-text-positive tw-text-center tw-text-sm"
      >
        {{ successMessage }}
      </div>
      <div
        v-else
        class="tw-text-negative tw-text-center tw-text-sm"
        :class="{ 'tw-opacity-0': !errorMessage }"
      >
        {{ errorMessage ? $t(errorMessage) : 'placeholder' }}
      </div>
    </q-card-section>

    <q-card-actions class="tw-flex tw-flex-col tw-mb-4" align="center">
      <q-btn
        class="tw-w-3/4 tw-rounded-lg poppins-regular"
        text-color="black"
        color="secondary"
        unelevated
        :label="primaryBtnTitle"
        size="lg"
        :loading="loading"
        @click="$emit('primaryBtnClick')"
      />
      <div
        v-if="secondaryBtnTitle"
        class="tw-w-full tw-items-center text-center tw-mt-4"
      >
        <span
          class="tw-text-secondary tw-text-sm tw-cursor-pointer tw-underline"
          @click="$emit('secondaryBtnClick')"
        >
          {{ secondaryBtnTitle }}
        </span>
      </div>
    </q-card-actions>
  </q-card>
</template>

<style scoped></style>
