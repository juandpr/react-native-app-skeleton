import { createStore } from 'redux';
import rootReducer from './modules';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'app',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
