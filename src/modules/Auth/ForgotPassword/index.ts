import enUS from './locale/enUS';
import esES from './locale/esES';
import frFR from './locale/frFR';
import ptBR from './locale/ptBR';
import { i18n } from 'boot/i18n';
import { Router } from 'vue-router';
import { forgotPasswordRoute } from 'src/modules/Auth/ForgotPassword/route';

export class ForgotPasswordModule {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  install() {
    forgotPasswordRoute.forEach((item) => {
      this.router.addRoute('AuthLayout', item);
    });

    i18n.global.mergeLocaleMessage('en-US', enUS);
    i18n.global.mergeLocaleMessage('es-ES', esES);
    i18n.global.mergeLocaleMessage('fr-FR', frFR);
    i18n.global.mergeLocaleMessage('pt-BR', ptBR);
  }
}
