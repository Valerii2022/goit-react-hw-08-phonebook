import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistrations,
  userLogIn,
  userLogOut,
  refreshContact,
} from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: { user: {}, isLoggedIn: false, error: null, token: null },
  extraReducers: builder => {
    builder
      .addCase(userRegistrations.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userLogIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userLogOut.fulfilled, (state, { payload }) => {
        state.token = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshContact.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
