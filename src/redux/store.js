import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { filterSlice } from './reduxSlices';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});


