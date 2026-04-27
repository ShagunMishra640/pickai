import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import {SignIn, useUser } from '@clerk/clerk-react'


const Layout = () => {


  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const {user} = useUser()


  return user ? (
    <div className='flex flex-col items-start justify-start h-screen bg-white dark:bg-gray-900'>

      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'> 
        <img src={assets.logo} alt="" className='w-10 h-10' onClick={()=>navigate('/')} />
        {
          sidebar ? <X  onClick={()=>setSidebar(false)}  className='w-6 h-6 text-gray-600 dark:text-gray-300 sm:hidden'/>
          : <Menu onClick={()=>setSidebar(true)} className='w-6 h-6 text-gray-600 dark:text-gray-300 sm:hidden'/>
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)] bg-[#F4F7FB] dark:bg-gray-800'>
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

          <div className='flex-1 bg-[#F4F7FB] dark:bg-gray-800'>
            <Outlet />
          </div>
      </div>
      
      
    </div>
  ) :(
    <div className='flex items-center justify-center h-screen'>
      < SignIn />


    </div>
  )
}

export default Layout
