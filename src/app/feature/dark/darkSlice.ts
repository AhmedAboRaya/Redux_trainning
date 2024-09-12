import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean,
  text: string, 
}

const initialState: CounterState = {
  value: true,
  text: "Change mode..."
}

export const counterSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.value = !state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeMode } = counterSlice.actions

export default counterSlice.reducer