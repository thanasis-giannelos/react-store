import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type User = {
  name: string;
  password: string;
};

type UserState = {
  user: User;
};

const AUTH_USER: User = {
  name: "sakis",
  password: "sakis",
};

const initialState: UserState = {
  user: { name: "", password: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticateUser(state: UserState, action: PayloadAction<User>) {
      if (
        action.payload.name === AUTH_USER.name &&
        action.payload.password === AUTH_USER.password
      ) {
        userSlice.caseReducers.setUser(state, action);
      }
      state.user;
    },
    setUser(state: UserState, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export function getUser(state: RootState) {
  return state.user.user.name;
}

export const { authenticateUser } = userSlice.actions;

export default userSlice.reducer;
