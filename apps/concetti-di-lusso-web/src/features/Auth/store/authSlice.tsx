import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

export type AuthState = {
  user: {
    email: string | null;
    id: number | null;
    accessToken: string | null;
  };
};

const initialState: AuthState = {
  user: {
    email: null,
    id: null,
    accessToken: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorized: (state, action: PayloadAction<AuthState>) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const { authorized } = authSlice.actions;

export const useAuth = () => useSelector((state: RootState) => state.auth);
