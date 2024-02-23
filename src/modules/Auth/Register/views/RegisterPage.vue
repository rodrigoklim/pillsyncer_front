<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import AuthCard from 'components/AuthCard/AuthCard.vue';
import { useRouter } from 'vue-router';
import { emailValidation, lengthValidation } from 'src/composables/validation';
import { useRegisterStore } from 'src/modules/Auth/Register/store';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const rememberMe = ref(false);
const router = useRouter();
const store = useRegisterStore();
const passwordVisibility = ref(false);

const register = async () => {
  if (messages.value) return;

  await store.registerUser({ email: email.value, password: password.value });

  await router.push({ name: 'MainLayout' });
};

const showErrorMessage = (message: string) => {
  errorMessage.value = message;
};

const messages = computed(() => {
  if (!store.errorResponse || errorMessage.value) return errorMessage.value;

  return `signUp.messages.${store.errorResponse}`;
});

watch([email, password], ([e, p]) => {
  if (e && p) {
    errorMessage.value = '';
    store.errorResponse = '';
  }
});
</script>

<template>
  <auth-card
    :title="$t('signUp.words.register')"
    :error-message="`${$t(messages)}`"
    :loading="store.loading"
    :primary-btn-title="$t('signUp.words.register')"
    :secondary-btn-title="$t('signUp.words.login')"
    @primary-btn-click="register"
    @secondary-btn-click="router.push('/login')"
  >
    <q-card-section class="tw-mx-4">
      <q-input
        v-model="email"
        class="tw-mb-4 tw-mt-8"
        outlined
        :label="$t('signUp.words.email')"
        lazy-rules
        :rules="[
          (val) =>
            emailValidation(val, $t('signUp.words.email'), showErrorMessage),
        ]"
      />
      <q-input
        v-model="password"
        class="tw-mt-8"
        outlined
        :label="$t('signUp.words.password')"
        lazy-rules
        :rules="[
          (val) =>
            lengthValidation(
              val,
              $t('signUp.words.password'),
              8,
              showErrorMessage,
            ),
        ]"
        :type="passwordVisibility ? 'text' : 'password'"
        @keydown.enter="register"
      >
        <template #append>
          <q-icon
            class="tw-cursor-pointer"
            :name="passwordVisibility ? 'visibility_off' : 'visibility'"
            @click="passwordVisibility = !passwordVisibility"
          />
        </template>
      </q-input>
      <div
        class="tw-flex tw-flex-row tw-w-full tw-items-center tw-justify-between -tw-mt-4"
      >
        <q-checkbox
          v-model="rememberMe"
          class="-tw-ml-2"
          :label="$t('signUp.words.remember_me')"
        />
      </div>
    </q-card-section>
  </auth-card>
</template>

<style scoped></style>
