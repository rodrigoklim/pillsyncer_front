<script lang="ts" setup>
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

  await store.registerUser({
    email: email.value,
    password: password.value,
    remember_me: rememberMe.value,
  });

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
    :error-message="`${$t(messages)}`"
    :loading="store.loading"
    :primary-btn-title="$t('signUp.words.register')"
    :secondary-btn-title="$t('signUp.words.login')"
    :title="$t('signUp.words.register')"
    @primary-btn-click="register"
    @secondary-btn-click="router.push('/login')"
  >
    <q-card-section class="tw-mx-4">
      <q-input
        v-model="email"
        :label="$t('signUp.words.email')"
        :rules="[
          (val) =>
            emailValidation(val, $t('signUp.words.email'), showErrorMessage),
        ]"
        class="tw-mb-4 tw-mt-8"
        lazy-rules
        outlined
      />
      <q-input
        v-model="password"
        :label="$t('signUp.words.password')"
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
        class="tw-mt-8"
        lazy-rules
        outlined
        @keydown.enter="register"
      >
        <template #append>
          <q-icon
            :name="passwordVisibility ? 'visibility_off' : 'visibility'"
            class="tw-cursor-pointer"
            @click="passwordVisibility = !passwordVisibility"
          />
        </template>
      </q-input>
      <div
        class="tw-flex tw-flex-row tw-w-full tw-items-center tw-justify-between -tw-mt-4"
      >
        <q-checkbox
          v-model="rememberMe"
          :label="$t('signUp.words.remember_me')"
          class="-tw-ml-2"
        />
      </div>
    </q-card-section>
  </auth-card>
</template>

<style scoped></style>
