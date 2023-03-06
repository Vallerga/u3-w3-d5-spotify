import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import homePage from "../reducers/homePage";
import albumPage from "../reducers/albumPage";

const persistConfig = {
    key: "root",
    storage,
    transforms: [
      encryptTransform({
        secretKey: process.env.REACT_APP_KEY_SEGRATA_SEGRETA_PROPRIO_SEGRETA
      })
    ]
  }

  const rootReducer = combineReducers({
    home: homePage,
    album: albumPage,
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);


  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  });

export const persistor = persistStore(store);
