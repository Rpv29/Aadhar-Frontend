import React from 'react'
import "./app.css"
import AadhaarForm from "./Aadhar_Form"
import Getdetails from './Getdetails'
import Update from './Update'

function App() {
  return (
    <div id='tittle'>

        <h1>Aadhaar Management System</h1>

        <div className='body'>
          <AadhaarForm></AadhaarForm><br /><br />
          <Getdetails></Getdetails>
          <Update></Update>
        </div>
      
    </div>
  )
}

export default App
