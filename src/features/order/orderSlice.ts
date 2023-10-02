import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../cart/cartSlice";
import { RootState } from "../../store";

export type Order = {
  id: string;
  username: string;
  phone: string;
  address: string;
  status: "pending" | "delivered";
  price: number;
  estimatedDeliveryTime: number;
  cart: CartItem[];
};

type OrderState = {
  order: Order | undefined;
};

const initialState: OrderState = {
  order: undefined,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder(state: OrderState, action: PayloadAction<Order>) {
      state.order = action.payload;
    },
  },
});

export function getOrder(state: RootState) {
  return state.order.order;
}

export const { createOrder } = orderSlice.actions;

export default orderSlice.reducer;
