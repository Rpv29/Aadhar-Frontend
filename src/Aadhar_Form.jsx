import axios from "axios";
import { useState } from "react";

function AadhaarForm(){

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

    const[formdata,setformdata]=useState({
        aadharNumber:"",
        name:"",
        dateofbirth:"",
        mobile:"",
        address:""

    })

    const handleChange=(e)=>{
        setformdata({...formdata,[e.target.name]: e.target.value})
    }

    const submitdata=(e)=>{
          e.preventDefault();

          if (!/^\d{12}$/.test(formdata.aadharNumber)) {
                alert("Aadhaar must be exactly 12 digits");
                return;
          }

            if (!/^\d{10}$/.test(formdata.mobile)) {
                alert("Mobile must be exactly 10 digits");
                return;
            }

            if (!/^\d{4}-\d{2}-\d{2}$/.test(formdata.dateofbirth)) {
                alert("Date must be in yyyy-MM-dd format");
                return;
            }

        axios.post(`${API_URL}/aadhar`, {
            ...formdata,
            activeStatus: true
        })
        .then(()=>alert("Aadhaar details are saved Successfully"))
        .catch(err=>{ console.log(err) ;alert("Error in creating aadhar")})
    }

    return <div>

        <h3>Create your Aadhaar here</h3>
        <form action="" onSubmit={submitdata}> 

            <input name="aadharNumber" type="text" placeholder="Aadhaar number" onInput={handleChange}/><br /><br />
            <input name="name" type="text" placeholder="Name" onInput={handleChange} /><br /><br />
            <input name="dateofbirth" type="date" placeholder="YYYY-MM-DD" onInput={handleChange}/><br /><br />
            <input name="mobile" type="text" placeholder="Mobile" onInput={handleChange}/><br /><br />
            <input name="address" type="text" placeholder="Address" onInput={handleChange} /><br /><br />

            <button>Submit</button>
        </form>
    </div>
    
}

export default AadhaarForm