import { useState } from 'react'

import './App.css'
import Login from './login'

import { users } from './login'

function App() {
 
  return (
    <>   
    <div id='appLogin' ><Login/></div>
    <div>{users.forEach((k)=>{
     console.log(k.username)
    })}</div>
   
    </>
 
  )
}

export default App
