import { useState } from 'react'
import Words from './assets/Words'

function App() {

const words = Words()

  return (
    <>
    <div className='flex justify-center items-center h-screen w-full'>
      <h1 className='text-white text-4xl  '>{words}</h1>

    </div>
    </>
  )
}

export default App
