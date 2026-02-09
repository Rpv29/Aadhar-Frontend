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

  const updateDetails = async (e) => {
    e.preventDefault();

    try {
      // 🔹 PUT (update)
      await axios.put(
        `https://aadhaar-backend-production.up.railway.app/aadhar/${num}`,
        {
          name,
          mobile,
          address,
          dateofbirth: dob,
        }
      );

      // 🔹 GET (fetch updated data)
      const res = await axios.get(
        `https://aadhaar-backend-production.up.railway.app/aadhar/${num}`
      );

      setData(res.data);
      setMsg("Aadhaar updated");
    } catch (err) {
      setMsg("Update failed");
      setData(null);
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
