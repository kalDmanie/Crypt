import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services.js/cryptoAPI';
import { cryptoNewsApi } from '../services.js/cryptoNewsApi';
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
