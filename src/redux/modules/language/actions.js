import {
  LANGUAGE_CHANGE
} from './const';

export const changeLanguage = (language) => (
  {
    type: LANGUAGE_CHANGE,
    payload: { 
      language 
    }
  }
);
