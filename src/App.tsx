// import { useState, useCallback, useMemo } from 'react'
import './App.css'
import Counter from './components/Counter'
import DarkMode from './components/DarkMode'
import ChangeLanguage from './components/languages/ChangeLanguage'

function App() {

  return (
    <>
    
      <Counter />
      <DarkMode />
      <ChangeLanguage />
    </>
  )
}

export default App
