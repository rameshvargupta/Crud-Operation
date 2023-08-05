import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const navigate = useNavigate()
  const {id}=useParams()
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    address:""
  })

  useEffect(() => {
    axios.get("https://648b509417f1536d65eac987.mockapi.io/crud/"+id)
    .then((res) =>{setInputData(res.data)})
           .catch(err=>console.log(err)) 
  },[])

const handelUpdate=()=>{
 axios.put("https://648b509417f1536d65eac987.mockapi.io/crud/"+id,inputData)
    .then((res) => {
      alert("data is upadated successfully")
      navigate('/')})
    .catch(err=>console.log(err))
}
  
  return (
    <div  className='my-5'>
      <h1 className='my-3' style={{color:'red'}}>Update Data</h1>
      <input type="text" name='name' value={inputData.name} placeholder='Enter Your Name' onChange={(e) => setInputData({ ...inputData, name: e.target.value })} /> <br /><br />
      <input type="text" name='email' value={inputData.email} placeholder='Enter Your Email' onChange={(e) => setInputData({ ...inputData, email: e.target.value })} /> <br /><br />
      <input type="text" name='address' value={inputData.address} placeholder='Enter Your address' onChange={(e) => setInputData({ ...inputData, address: e.target.value })} /> <br /><br />

      <button className='btn btn-success' 
      onClick={handelUpdate}>Update Data</button>
    </div>
  )
}

export default Update
