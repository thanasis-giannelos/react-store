import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type CartItem = {
  id: string;
  img: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: CartState, action: PayloadAction<CartItem>) {
      if (!state.items.find((item) => item.id === action.payload.id))
        state.items.push(action.payload);
    },
    removeFromCart(state: CartState, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increment(state: CartState, action: PayloadAction<string>) {
      const theItem = state.items.find(
        (item) => item.id === action.payload
      ) as CartItem;

      if (theItem) {
        theItem.quantity++;
        theItem.totalPrice += theItem.unitPrice;
      }
    },
    decrement(state: CartState, action: PayloadAction<string>) {
      const theItem = state.items.find(
        (item) => item.id === action.payload
      ) as CartItem;

      if (theItem) {
        if (theItem.quantity === 1) {
          cartSlice.caseReducers.removeFromCart(state, action);
        }
        theItem.quantity--;
        theItem.totalPrice -= theItem.unitPrice;
      }
    },
    clearCart(state: CartState) {
      state.items = [];
    },
  },
});

export function getCart(state: RootState) {
  return state.cart.items;
}

export function getTotalCartQuantity(state: RootState) {
  return state.cart.items.reduce(
    (sum: number, item: CartItem) => sum + item.quantity,
    0
  );
}

export function getTotalCartPrice(state: RootState) {
  return state.cart.items.reduce(
    (sum: number, item: CartItem) => sum + item.totalPrice,
    0
  );
}

export function getCurrentQuantityById(state: RootState, id: string) {
  return state.cart.items.find((item) => item.id === id)?.quantity ?? 0;
}

export const { addToCart, removeFromCart, increment, decrement, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
