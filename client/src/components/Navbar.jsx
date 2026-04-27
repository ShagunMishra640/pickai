import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Moon, Sun } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'
import { useTheme } from '../ThemeContext'

const Navbar = () => {
    const navigate=useNavigate()
    const {user} = useUser()
    const { openSignIn } = useClerk()
    const { isDark, toggleTheme } = useTheme()

  return (
    <div className='fixed z-50 w-full backdrop-blur-2xl flex justify-between 
    items-center py-3 px-4 sm:px-20 xl:px-32 bg-white/80 dark:bg-gray-900/80'>
      <img src={assets.logo} alt="Logo" className='w-32 sm:w-44 cursor-pointer' onClick={()=>
        navigate('/')}/>

        <div className='flex items-center gap-4'>
        {/* <button
            onClick={toggleTheme}
            className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            aria-label='Toggle theme'
          >
            {isDark ? <Sun className='w-5 h-5 text-yellow-500' /> : <Moon className='w-5 h-5 text-gray-700' />}
          </button>*/}

          {
            user ? <UserButton/> 
            :
            (

               <button onClick={openSignIn}className='flex items-center gap-2 rounded-full text-sm
          cursor-pointer bg-blue-500 text-white px-10 py-2.5 flex-shrink-0'>Get started <ArrowRight
           className='w-4 h-4'/> </button>
            )

          }
        </div>

       

      
    </div>
  )
}

export default Navbar
