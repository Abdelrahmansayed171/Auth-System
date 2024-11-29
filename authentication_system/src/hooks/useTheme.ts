import React from 'react'
import { useState, useEffect } from 'react'

// Creatign a custom theme

type Theme = 'light' | 'dark'

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'dark' || savedTheme === 'light') 
            return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    })

    // Track theme variable, on every value change apply that side effect
    useEffect(() =>{
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
        localStorage.setItem('theme',theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark': 'light')
    return {theme, toggleTheme}
}

export default useTheme
