import enUS from './locale/enUS';
import esES from './locale/esES';
import frFR from './locale/frFR';
import ptBR from './locale/ptBR';
import {i18n} from 'boot/i18n';

export class MainLayoutModule {
  install() {
    i18n.global.mergeLocaleMessage('en-US', enUS);
    i18n.global.mergeLocaleMessage('es-ES', esES);
    i18n.global.mergeLocaleMessage('fr-FR', frFR);
    i18n.global.mergeLocaleMessage('pt-BR', ptBR);
  }
}
