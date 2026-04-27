import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Plan from '../components/Plan'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar/>
      <Hero/>
      <AiTools/>
  
      <Plan />
      <Footer />
    </div>
  )
}

export default Home
