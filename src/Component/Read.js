import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Read = () => {
  const {id}=useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://648b509417f1536d65eac987.mockapi.io/crud/"+id)
    .then((res) => {
      setData(res.data) })
     .catch(err=>console.log(err)) 
   

  },[])


  return (
    <div>
      <h1 className='mt-5' style={{color:"red"}}>Read Your Data</h1><br />
     <h1>Name :-  <span  style={{color:"blue"}} >{data.name}</span>  </h1>
     <h1 >Email :- <span style={{color:"blue"}} >{data.email}</span> </h1>
     <h1 >Address :- <span style={{color:"blue"}} >{data.address}</span> </h1>
    </div>
  )
}

export default Read
