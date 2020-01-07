import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import I18n from 'redux-i18n';
import AppNavigation from './src/components/AppNavigation';
import { translations, initialLang, fallbackLang } from './src/i18n/languages';

const { store, persistor } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18n translations={translations} initialLang={initialLang} fallbackLang={fallbackLang}>
            <AppNavigation />
          </I18n>
        </PersistGate>
      </Provider>
    );
  }
}
