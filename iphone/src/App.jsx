import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlits from './components/Highlits'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlits/>
    </main>
  )
}

export default App