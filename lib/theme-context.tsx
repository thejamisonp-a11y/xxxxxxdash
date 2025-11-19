"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Category = 'women' | 'men' | 'trans' | 'default'

interface ThemeContextType {
  category: Category
  setCategory: (category: Category) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<Category>('default')

  useEffect(() => {
    // Apply theme class to document root
    const root = document.documentElement
    root.classList.remove('theme-women', 'theme-men', 'theme-trans', 'theme-default')
    root.classList.add(`theme-${category}`)
  }, [category])

  return (
    <ThemeContext.Provider value={{ category, setCategory }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
