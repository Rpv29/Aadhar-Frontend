import React, { useState } from 'react'
import { useEffect} from 'react'
import axios from 'axios'

const Getdetails = () => {
    const[number,setNumber]=useState("")
    const[error,setError]=useState("")
    const[data,setData]=useState(null)

    const fetcDetails=()=>{
        if(!number){
            setError("please enter Aadhar Number")
            return
        }
        axios.get(
        `https://aadhaar-backend-production.up.railway.app/aadhar/${number.trim()}`
      )
        .then((res)=>{
            setData(res.data)
            setError("")
        })

        .catch(()=>{
            setError("Aadhaar not found")
            setData(null)
        })

    }

  return (
    <div>

        <h3>Search your data</h3>
        <input type='text' placeholder='Enter the aadhaar number' value={number} onInput={(e) => setNumber(e.target.value)}></input>
        <br /><br />
        <button onClick={fetcDetails}> Search </button>

        {error && <p style={{color:"red"}}> {error} </p>}

        {data && (
            <div>
                <p>Name: {data.name}</p>
                <p>DOB: {data.dateofbirth}</p>
            </div>
        )}
    </div>
  )
}

export default Getdetails
