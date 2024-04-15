<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import AuthCard from 'components/AuthCard/AuthCard.vue';
import { useRouter } from 'vue-router';
import { emailValidation, lengthValidation } from 'src/composables/validation';
import { useLoginStore } from 'src/modules/Auth/Login/store';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const rememberMe = ref(false);
const router = useRouter();
const store = useLoginStore();
const passwordVisibility = ref(false);

const login = async () => {
  if (messages.value) return;

  await store.loginUser({
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

  return `login.messages.${store.errorResponse}`;
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
    :title="$t('login.words.login')"
    :error-message="messages"
    :loading="store.loading"
    :primary-btn-title="$t('login.words.login')"
    :secondary-btn-title="$t('login.words.register')"
    @primary-btn-click="login"
    @secondary-btn-click="router.push('/register')"
  >
    <q-card-section class="tw-mx-4">
      <q-input
        v-model="email"
        class="tw-mb-4 tw-mt-8"
        outlined
        :label="$t('login.words.email')"
        lazy-rules
        :rules="[
          (val) =>
            emailValidation(val, $t('login.words.email'), showErrorMessage),
        ]"
      />
      <q-input
        v-model="password"
        class="tw-mt-8"
        outlined
        :label="$t('login.words.password')"
        lazy-rules
        :rules="[
          (val) =>
            lengthValidation(
              val,
              $t('login.words.password'),
              4,
              showErrorMessage,
            ),
        ]"
        :type="passwordVisibility ? 'text' : 'password'"
        @keydown.enter="login"
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
          :label="$t('login.words.remember_me')"
        />
        <q-btn
          class="tw-text-secondary tw-text-sm tw-cursor-pointer tw-underline"
          :label="$t('login.words.forgotPassword')"
          no-caps
          dense
          flat
          to="/forgot-password"
        />
      </div>
    </q-card-section>
  </auth-card>
</template>

<style scoped></style>
