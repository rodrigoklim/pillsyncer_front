import { i18n } from 'boot/i18n';

export const requiredValidation = (
  value: string,
  label: string,
  callback: (message: string) => void,
) => {
  if (!value) {
    callback(i18n.global.t('validation.required', { label: label }));
    return false;
  }
};

export const emailValidation = (
  value: string,
  label: string,
  callback: (message: string) => void,
) => {
  if (!/.+@.+\..+/.test(value)) {
    callback(i18n.global.t('validation.email'));
    return false;
  }
};

export const lengthValidation = (
  value: string,
  label: string,
  length: number,
  callback: (message: string) => void,
) => {
  if (value.length < length) {
    callback(
      i18n.global.t('validation.length', {
        label: label,
        length: length,
      }),
    );
    return false;
  }
};

export const confirmValidation = (
  value: string,
  label: string,
  callback: (message: string) => void,
  confirmValue: string,
) => {
  if (value !== confirmValue) {
    callback(i18n.global.t('validation.confirm', { label: label }));
    return false;
  }
};
