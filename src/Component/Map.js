import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Map() {
  const [data, setData] = useState("")
  const [passwordData, setpasswordData] = useState("")
const navigate=useNavigate();
  const HandelClick = () => {
    if (data.length <= 3 || passwordData.length <= 3) {
      alert("fill the proper details")
    }
    else {
      alert("Login Successfully")
      navigate("/Home")
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <input type="text"  name="user" onChange={(e) => { setData({ user: e.target.value }) }} /> <br /><br />

      <input type="text" required name="password" onChange={(e) => { setpasswordData({ password: e.target.value }) }} /> <br /><br />

      <button className='btn btn-success' onClick={HandelClick}>Login</button>
    </div>
  )
}
