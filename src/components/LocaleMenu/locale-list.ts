export interface LocaleList {
  id: number;
  countryEn: string;
  countryFr: string;
  countryEs: string;
  countryBr: string;
  value: string;
  flag: string;
}
export const localeList = [
  {
    id: 1,
    countryEn: 'Portuguese',
    countryFr: 'Portugais',
    countryEs: 'Portugués',
    countryBr: 'Português',
    value: 'pt-BR',
    flag: '🇧🇷',
  },
  {
    id: 2,
    countryEn: 'English',
    countryFr: 'Anglais',
    countryEs: 'Inglés',
    countryBr: 'Inglês',
    value: 'en-US',
    flag: '🇺🇸',
  },
  {
    id: 3,
    countryEn: 'French',
    countryFr: 'Français',
    countryEs: 'Francés',
    countryBr: 'Francês',
    value: 'fr-FR',
    flag: '🇨🇵',
  },
  {
    id: 4,
    countryEn: 'Spanish',
    countryFr: 'Espagnol',
    countryEs: 'Español',
    countryBr: 'Espanhol',
    value: 'es-ES',
    flag: '🇪🇸',
  }
]
