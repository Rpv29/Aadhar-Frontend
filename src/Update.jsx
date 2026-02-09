import axios from 'axios'
import React,{use, useState} from 'react'

const Update = () => {

    const[num,setnum]=useState("")
    const[name,setname]=useState("")
    const[mobile,setmobile]=useState("")
    const[address,setaddress]=useState("")
    const[dob,setdob]=useState("")
    const[msg,setmsg]=useState("")

    const updateDetails=(e)=>{
        e.preventDefault()

        axios .put(`https://aadhaar-backend-production.up.railway.app/aadhar/${num}`,
            {
                name,
                mobile,
                address,
                dob
            }
        )

        .then(()=>{
            setmsg("Aadhar updated successfully")
        })

        .catch(()=>{
            setmsg("Update failed")
        })

    }

  return (
    <div>

        <h3>Update your details here...</h3>
        
        <form action="" onSubmit={updateDetails}>
            <input type="text" placeholder='Aahaar Number' onInput={e=> setnum(e.target.value)}/> <br /><br />
            <input type="text" placeholder='Name' onInput={e=> setname(e.target.value)}/> <br /><br />
            <input type="text" placeholder='Mobile' onInput={e=> setmobile(e.target.value)}/> <br /><br />
            <input type="text" placeholder='Address' onInput={e=> setaddress(e.target.value)}/> <br /> <br />
            <input type="date" placeholder='Dob' onInput={e=> setdob(e.target.value)}/> <br /><br />

           <button>Update</button>
        </form>

        {msg && <p>{msg}</p>}
      
    </div>
  )
}

export default Update
