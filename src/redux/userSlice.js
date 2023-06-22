import { createSlice } from '@reduxjs/toolkit';
import { userRegistrations, userLogIn, userLogOut } from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: {}, isLoggedIn: false, error: null, token: null },
  extraReducers: builder => {
    builder
      .addCase(userRegistrations.pending, state => {})
      .addCase(userRegistrations.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userRegistrations.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(userLogIn.pending, state => {})
      .addCase(userLogIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userLogIn.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(userLogOut.pending, state => {})
      .addCase(userLogOut.fulfilled, (state, { payload }) => {
        state.token = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(userLogOut.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
