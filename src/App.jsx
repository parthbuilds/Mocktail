import React from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <>
    <div className='flex-center h-[100vh] bg-red-400'>
      <h1 className='text-4xl font-bold text-center text-black'>Hello World</h1>
    </div>
  </>
  )
}

export default App