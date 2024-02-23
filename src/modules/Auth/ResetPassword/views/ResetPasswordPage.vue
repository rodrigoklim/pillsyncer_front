<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import AuthCard from 'components/AuthCard/AuthCard.vue';
import { useRoute, useRouter } from 'vue-router';
import {
  confirmValidation,
  emailValidation,
  lengthValidation,
} from 'src/composables/validation';
import { useResetPasswordStore } from 'src/modules/Auth/ResetPassword/store';

const confirmPassword = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const route = useRoute();
const router = useRouter();
const store = useResetPasswordStore();
const token = ref('');
const confirmPasswordVisibility = ref(false);
const passwordVisibility = ref(false);

const resetPassword = async () => {
  if (messages.value) return;
  token.value = route.params.token as string;

  await store.resetPassword({
    email: email.value,
    password: password.value,
    password_confirmation: confirmPassword.value,
    token: token.value,
  });

  if (store.errorResponse) {
    return showErrorMessage(store.errorResponse);
  }

  await router.push({ name: 'Login' });
};

const showErrorMessage = (message: string) => {
  errorMessage.value = message;
};

const messages = computed(() => {
  if (!store.errorResponse || errorMessage.value) return errorMessage.value;

  return `resetPassword.messages.${store.errorResponse}`;
});

watch([email, password], ([e, p]) => {
  if (e && p) {
    errorMessage.value = '';
    store.errorResponse = '';
  }
});

onMounted(() => {
  email.value = route.query.email as string;
});
</script>

<template>
  <auth-card
    :title="$t('resetPassword.words.reset_password')"
    :error-message="`${$t(messages)}`"
    :loading="store.loading"
    :primary-btn-title="$t('resetPassword.words.reset_password')"
    @primary-btn-click="resetPassword"
  >
    <q-card-section class="tw-mx-4">
      <q-input
        v-model="email"
        class="tw-mb-4 tw-mt-8"
        outlined
        :label="$t('resetPassword.words.email')"
        lazy-rules
        disable
        :rules="[
          (val) =>
            emailValidation(
              val,
              $t('resetPassword.words.email'),
              showErrorMessage,
            ),
        ]"
      />
      <q-input
        v-model="password"
        class="tw-mt-8"
        outlined
        :label="$t('resetPassword.words.password')"
        lazy-rules
        :rules="[
          (val) =>
            lengthValidation(
              val,
              $t('resetPassword.words.password'),
              8,
              showErrorMessage,
            ),
        ]"
        :type="passwordVisibility ? 'text' : 'password'"
      >
        <template #append>
          <q-icon
            class="tw-cursor-pointer"
            :name="passwordVisibility ? 'visibility_off' : 'visibility'"
            @click="passwordVisibility = !passwordVisibility"
          />
        </template>
      </q-input>
      <q-input
        v-model="confirmPassword"
        class="tw-mt-8"
        outlined
        :label="$t('resetPassword.words.confirmation_password')"
        lazy-rules
        :rules="[
          (val) =>
            confirmValidation(
              val,
              $t('resetPassword.words.password'),
              showErrorMessage,
              password,
            ),
        ]"
        :type="confirmPasswordVisibility ? 'text' : 'password'"
        @keydown.enter="resetPassword"
      >
        <template #append>
          <q-icon
            class="tw-cursor-pointer"
            :name="confirmPasswordVisibility ? 'visibility_off' : 'visibility'"
            @click="confirmPasswordVisibility = !confirmPasswordVisibility"
          />
        </template>
      </q-input>
      <div class="tw-flex tw-flex-row tw-w-full tw-items-center -tw-mt-4">
        <q-btn
          class="tw-text-secondary tw-text-sm tw-cursor-pointer tw-underline"
          :label="$t('resetPassword.words.back_to_login')"
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
