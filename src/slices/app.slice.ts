import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

// Definicja stanu Slice'a
export interface AppSlice {
  user: AppUser | null;
  isLogged: boolean;
}

const initialState: AppSlice = {
  user: null,
  isLogged: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AppUser>) => {
      state = {
        user: action.payload,
        isLogged: true,
      };
    },
    removeUser: (state) => {
      state = {
        user: null,
        isLogged: false,
      };
    },
  },
});

export const { setUser, removeUser } = appSlice.actions;

// Selektory
export const selectUserInfo = (state: RootState): AppUser | null =>
  state.app.user;
export const selectIsUserLogged = (state: RootState): boolean =>
  state.app.isLogged;

export default appSlice.reducer;
