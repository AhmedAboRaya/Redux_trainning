import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import counterSlice from './feature/counter/counterSlice'
import darkSlice from './feature/dark/darkSlice'
import languagesReducer from './feature/language/langSlice'
import cartSlice from './feature/cart/cartSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    mode: darkSlice,
    languages: languagesReducer,
    cart: cartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store;