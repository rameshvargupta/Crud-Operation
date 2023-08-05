import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    address:""
  })

  const navigate = useNavigate()

  const handelsubmit = () => {

    var a = document.getElementById("Name").value
    var b = document.getElementById("Email").value

    if (a.length > 2 || b.length > 3) {

      axios.post("https://648b509417f1536d65eac987.mockapi.io/crud/", inputData)
        .then(resp => {
          alert("data is Added successfully")
          navigate("/")
        })
        .catch(err => console.log(err))
    }
    else {
      alert("please fill the proper details")
    }

  }

  return (
    <div>
      <h1>Create Data</h1>
      <label htmlFor='Name'>Name</label> <br />
      <input type="text" name='name' id='Name' placeholder='Enter Your Name' onChange={(e) => setInputData({ ...inputData, name: e.target.value })} /> <br /><br />

      <label htmlFor='Email'>Email</label><br />
      <input type="text" id='Email' name='email' placeholder='Enter Your Email' onChange={(e) => setInputData({ ...inputData, email: e.target.value })} /> <br /><br />
      
      <label htmlFor='address'>Address</label><br />
      <input type="text" id='address' name='address' placeholder='Enter Your address' onChange={(e) => setInputData({ ...inputData, address: e.target.value })} /> <br /><br />

      <button className='btn btn-success'
        onClick={handelsubmit}>Add Data</button>

    </div>
  )
}

export default Create
