import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type User = {
  name: string;
};

type UserState = {
  user: User;
};

const initialState: UserState = {
  user: {
    name: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<string>) {
      state.user.name = action.payload;
    },
  },
});

export function getUser(state: RootState) {
  return state.user.user.name;
}

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
