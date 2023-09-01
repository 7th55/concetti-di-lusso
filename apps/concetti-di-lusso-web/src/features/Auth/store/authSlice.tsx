import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

export type AuthState = {
  user: string | undefined;
  token: string | undefined;
};

const initialState: AuthState = {
  user: undefined,
  token: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorized: (state, action: PayloadAction<AuthState>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      console.log(current(state));
    },

  },
});

export const { authorized } = authSlice.actions;

export const useAuth = () => useSelector((state: RootState) => state.auth);
