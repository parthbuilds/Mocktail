import React from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cocktails from './components/cocktails'
import About from './components/About'
import Art from './components/art'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
    </main>
    
  </>
  )
}

export default App