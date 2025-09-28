import React from 'react'
import { ThemeContext } from './ThemeContext'
import Dashboard from '../Dashboard'

const ProviderContext = () => {
    const data = {theme: 'dark'}
  return (
    <div>
        <ThemeContext.Provider value={data}>
        <Dashboard  />
        </ThemeContext.Provider>
    </div>
  )
}

export default ProviderContext