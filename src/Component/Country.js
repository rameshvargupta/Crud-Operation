
import React from 'react'
import { useState } from 'react';
const countries = [
    {
        name: 'India',
        cities: ['Delhi', 'Lucknow', 'Noida',"Hyderabad"]
    },
    {
        name: 'Nepal',
        cities: ['Butawal', 'Bhairahva', 'Kathmandoo']
    },

];
const Country = () => {

    const [seltCountry, setSeltCountry] = useState("")
    const [seltCity, setSeltCity] = useState("")

    const handelCountry = (e) => {
        setSeltCountry(e.target.value)
        setSeltCity("")
    }
    const handelCity = (e) => {
        setSeltCity(e.target.value)
    }


    return (
        <div className='mt-5'>
            <select value={seltCountry} onChange={handelCountry}>
                <option value="">Select Country</option>
                {countries.map((country, index) => {
                    return (
                        <option key={index} value={country.name}>{country.name}</option>
                    )
                })}
            </select>

            <select  disabled={!seltCountry} value={seltCity} onChange={handelCity}>
                <option value="">Select City</option>
                {seltCountry && countries.find((city) => 
                    city.name === seltCountry
                ).cities.map((listCity,index)=>{
                    return(
                        <option key={index}  value={listCity}>{listCity}</option>
                    )
                })}
            </select>
            <div className='my-5'>
           <h2>Country Name :- <span style={{color:"g"}}> {seltCountry}</span></h2> 
           <h2>City Name :- <span style={{color:"green"}}> {seltCity}</span>  </h2> 
           </div>
        </div>

     
    )
}

export default Country
