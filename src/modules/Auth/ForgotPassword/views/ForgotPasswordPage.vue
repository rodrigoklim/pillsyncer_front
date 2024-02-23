<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import AuthCard from 'components/AuthCard/AuthCard.vue';
import { emailValidation } from 'src/composables/validation';
import { useForgotPasswordStore } from 'src/modules/Auth/ForgotPassword/store';

const email = ref('');
const errorMessage = ref('');
const store = useForgotPasswordStore();
const forgotPassword = async () => {
  if (messages.value) return;

  await store.forgotPassword({ email: email.value });
};

const showErrorMessage = (message: string) => {
  errorMessage.value = message;
};

const messages = computed(() => {
  if (!store.errorResponse || errorMessage.value) return errorMessage.value;

  return `forgotPassword.messages.${store.errorResponse}`;
});

watch(email, (e) => {
  if (e) {
    errorMessage.value = '';
    store.errorResponse = '';
  }
});
</script>

<template>
  <auth-card
    :title="$t('forgotPassword.words.forgotPassword')"
    :error-message="`${$t(messages)}`"
    :success-message="`${$t(store.successResponse)}`"
    :loading="store.loading"
    :primary-btn-title="$t('forgotPassword.words.forgotPassword')"
    @primary-btn-click="forgotPassword"
  >
    <q-card-section class="tw-mt-4 tw-mx-4">
      <div class="tw-flex tw-flex-row tw-w-full text-center tw-items-center">
        <span class="tw-text-lg">
          {{ $t('forgotPassword.messages.next_steps') }}
        </span>
      </div>
    </q-card-section>

    <q-card-section class="tw-mx-4">
      <q-input
        v-model="email"
        outlined
        :label="$t('forgotPassword.words.email')"
        lazy-rules
        :rules="[
          (val) =>
            emailValidation(
              val,
              $t('forgotPassword.words.email'),
              showErrorMessage,
            ),
        ]"
        @keydown.enter="forgotPassword"
      />
      <div class="tw-flex tw-flex-row tw-w-full tw-items-center -tw-mt-4">
        <q-btn
          class="tw-text-secondary tw-text-sm tw-cursor-pointer tw-underline"
          :label="$t('forgotPassword.words.back_to_login')"
          no-caps
          dense
          flat
          to="/login"
        />
      </div>
    </q-card-section>
  </auth-card>
</template>

<style scoped></style>
