import axios from 'axios'
import React,{useState} from 'react'

const Update = () => {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState("");

  const BASE_URL = "https://aadhaar-backend-production.up.railway.app";

  const get = async () => {
      try {
      const res = await axios.get(
        `${BASE_URL}/aadhar/${aadhar}`,
        { headers: { "Cache-Control": "no-cache" } }
      );
      setData(res.data);
      setName(res.data.name);
      setMobile(res.data.mobile);
      setAddress(res.data.address);
      setDob(res.data.dateofbirth);
      setMsg("Aadhaar fetched successfully ✅");
    } catch {
      setMsg("Aadhaar not found ❌");
      setData(null);
    }
  };

  
  const updateDetails = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/aadhar/${aadhar}`, {
        name,
        mobile,
        address,
        dateofbirth: dob,
      });

      const res = await axios.get(
        `${BASE_URL}/aadhar/${aadhar}`,
        { headers: { "Cache-Control": "no-cache" } }
      );

      setData(res.data);
      setMsg("Aadhaar updated successfully ");
    } catch {
      setMsg("Update failed");
    }
  };


  return (
    <div>

        <h3>Update your details here...</h3>
        
        <form action="" onSubmit={updateDetails}>
            <input type="text" placeholder='Aahaar Number' onInput={e=> setNum(e.target.value)}/> <br /><br />
            <input type="text" placeholder='Name' onInput={e=> setName(e.target.value)}/> <br /><br />
            <input type="text" placeholder='Mobile' onInput={e=> setMobile(e.target.value)}/> <br /><br />
            <input type="text" placeholder='Address' onInput={e=> setAddress(e.target.value)}/> <br /> <br />
            <input type="date" placeholder='Dob' onInput={e=> setDob(e.target.value)}/> <br /><br />

           <button type='submit'>Update</button>
        </form>

        {msg && <p>{msg}</p>}
      
    </div>
  )
}

export default Update
