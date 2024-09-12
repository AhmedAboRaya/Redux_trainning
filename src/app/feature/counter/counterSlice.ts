import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  text: string,
}

const initialState: CounterState = {
  value: 10,
  text: "Increaser"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, actionPayload: PayloadAction<number>) => {
      state.value = actionPayload.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

export default counterSlice.reducer