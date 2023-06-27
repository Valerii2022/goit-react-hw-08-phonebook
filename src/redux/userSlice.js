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
  state.isRefreshing = false;
  state.error = payload;
  state.isLoggedIn = false;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoggedIn: false,
    error: null,
    token: null,
    isRefreshing: false,
  },
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
      .addCase(refreshContact.pending, state => {
        state.isRefreshing = true;
        // state.isLoggedIn = true;
      })
      .addCase(refreshContact.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = null;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
