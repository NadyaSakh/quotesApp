import  AsyncStorage from "@react-native-community/async-storage";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from "redux";
import { RootState } from "./types";
import {
  Persistor,
  persistReducer,
  persistStore
} from 'redux-persist';
import { PersistConfig } from "redux-persist/es/types";
import thunk from "redux-thunk";
import quotes from "./reduces/quotes";

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: []
};

interface IStore {
  store: Store<RootState, AnyAction>;
  persistor: Persistor;
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers<RootState>({
    quotes
  })
);

const middlewares = [thunk];

const configureStore = (): IStore => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor }
};

export default configureStore;


