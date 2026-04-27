import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // On mount, check localStorage
    const saved = localStorage.getItem('pickai-theme')
    const shouldBeDark = saved === 'dark'
    
    console.log('Component mounted. Theme:', saved)
    console.log('Current HTML dark class:', document.documentElement.classList.contains('dark'))
    
    setIsDark(shouldBeDark)
  }, [])

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev
      console.log('Toggling theme to:', newValue)
      
      // Apply immediately to DOM
      if (newValue) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('pickai-theme', 'dark')
        console.log('Dark class force added')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('pickai-theme', 'light')
        console.log('Dark class force removed')
      }
      
      // Log the result
      setTimeout(() => {
        console.log('After toggle - HTML has dark class:', document.documentElement.classList.contains('dark'))
      }, 100)
      
      return newValue
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

