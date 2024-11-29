import React from 'react'
import {Sun, MoonStar} from 'lucide-react'
import useTheme from '../hooks/useTheme'

const ThemeToggler = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div>
        <button className='fixed top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700'
            onClick={toggleTheme}
            aria-label='toggleTheme'
            >
             {theme === 'light' ? (
                <MoonStar className='w-5 h-5'/>
             ):
             (
                <Sun className='w-5 h-5'/>
             )}   
        </button>
    </div>
  )
}

export default ThemeToggler