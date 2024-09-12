import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LanguageState {
    lang: 'ar' | 'en' | 'es' | 'fr' 
}

const initialState: LanguageState = {
  lang: 'en',
}

export const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<'ar' | 'en' | 'es' | 'fr'>) => {
      state.lang = action.payload;
    },
  },
})

export const { changeLang } = languagesSlice.actions

export default languagesSlice.reducer