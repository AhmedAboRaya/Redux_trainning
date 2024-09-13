import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  value: number[],
}

const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actionPayload: PayloadAction<number>) => {
      state.value.push(actionPayload.payload) ;
    },
    decFromCart: (state, actionPayload: PayloadAction<number>) => {
        const index = state.value.indexOf(actionPayload.payload);
        if (index !== -1) {
            state.value.splice(index, 1);
        }
      },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions
export const { decFromCart } = cartSlice.actions

export default cartSlice.reducer