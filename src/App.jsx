import React from 'react'
import logo from "../public/cs_white.png"
function App() {
  return (
    <div className='bg-black text-white w-full items-center justify-center flex flex-col h-screen'>
    <div className='text-center'>
        <img src={logo} className='w-52' />  
         <p className='pt-5'>SocheangDev X Electron-React</p>
     </div>
    </div>
  )
}

export default App