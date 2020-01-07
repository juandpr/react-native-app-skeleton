import { combineReducers } from 'redux';
import language from './language/reducer';
import { i18nState } from 'redux-i18n';

const rootReducer = combineReducers({
  language,
  i18nState
});

export default rootReducer;
