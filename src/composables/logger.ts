import { Notify } from 'quasar';

type LoggerType = 'info' | 'error' | 'warn' | 'log';

const colors = {
  info: 'info',
  error: 'negative',
  warn: 'warning',
  log: 'ongoing',
};

const icons = {
  info: 'info',
  error: 'error',
  warn: 'warning',
  log: 'ongoing',
};

export const logger = (
  type: LoggerType,
  user: string,
  action: string,
  error: any,
  triggerNotify = false,
) => {
  console.log(`${user} || ${action} || ${error}`);

  if (!triggerNotify) return;

  Notify.create({
    message: `${user} || ${action} || ${error}`,
    color: colors[type],
    position: 'top',
    icon: icons[type],
  });
};
