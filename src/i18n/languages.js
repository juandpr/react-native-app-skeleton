import en from './languages/en';
import es from './languages/es';
import po from './languages/po';
import de from './languages/de';

export const languages = [
  {
    id: 'en', name: 'English',
  },
  {
    id: 'es', name: 'Español',
  },
  {
    id: 'de', name: 'Deutsche',
  },
  {
    id: 'po', name: 'Português',
  }
];

export const translations = {
  en,
  es,
  po,
  de
};

export const initialLang = 'en';
export const fallbackLang = 'en';
