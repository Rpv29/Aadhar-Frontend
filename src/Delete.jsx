import React,{useState} from 'react'
import axios from 'axios'

const Delete = () => {

    const [id,setid]=useState("")
    const[text,settext]=useState("")

    const Base_url="https://aadhaar-backend-production.up.railway.app";

    const deleteAadhar=async()=>{
        if(!id){
            settext("Please enter Aadhar number ")
            return
        }
        try{
            await axios.delete(`${Base_url}/aadhar/${id}`)
            settext("Aadhar deactivated successfully")
        }catch(err){
            settext("Delete failed")
        }
    }
  return (
    <div>
        <h3>Delete Aadhar</h3>

        <input type="text" placeholder='Enter the Aadhar Number' value={id} onInput={(e)=>setid(e.target.value)} />
        <br /><br />

        <button onClick={deleteAadhar}>Delete</button>

        {text && <p>{text}</p>}
      
    </div>
  )
}

export default Delete
