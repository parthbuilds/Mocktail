import React from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Navbar from './components/navbar'
import Hero from './components/hero'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <div className='h-dvh bg-black'></div>
    </main>
    
  </>
  )
}

export default App