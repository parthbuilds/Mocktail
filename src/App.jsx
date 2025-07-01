import React from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cocktails from './components/cocktails'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
    
  </>
  )
}

export default App