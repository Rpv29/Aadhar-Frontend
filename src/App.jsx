import React from 'react'
import "./app.css"
import AadhaarForm from "./Aadhar_Form"
import Getdetails from './Getdetails'
import Update from './Update'
import Delete from './Delete'

function App() {
  <h1 style={{ color: "red" }}>VERCEL VITE TEST</h1>
  return (
    <div id='tittle'>

        <h1>Aadhaar Management System</h1>

        <div className='body'>
          <AadhaarForm></AadhaarForm><br /><br />
          <Getdetails></Getdetails>
          <Update></Update>
          <Delete></Delete>
        </div>
      
    </div>
  )
}

export default App
