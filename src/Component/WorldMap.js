import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WorldMap = () => {
    const [data, setData] = useState([])
    const [selectData, setSelectData] = useState("")

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(resp => setData(resp.data)).catch(err => console.log(err))
    }, [])
    const handelsubmit = (e) => {
        setSelectData(e.target.value)
    }

    return (
        <div className='top'>
        <div className='middle'>

            <h1 style={{color:"red"}}>World Map</h1>
            <select onChange={handelsubmit}>
                <option >Select Country</option>
                {data.map((country, index) => {
                    return (<>
                        <option key={index}>{country.name.common}</option>
                    </>)
                }

                )}
            </select>

            {selectData && data.filter((country) => country.name.common === selectData).map((listItem, index) => {
                return (
                    <div className='my-4' key={index}>
                        <h2>Country Name:- <span className='fw-bolder'>{listItem.name.common}</span></h2>
                        <h2>{listItem.name.official}</h2>
                        <h2>population:- {listItem.population}</h2>
                        <h2>area:- {listItem.area}</h2>
                        <h2> continents:- {listItem.continents}</h2>

                        <img src={listItem.flags.png} alt="" />
                        <h2 className='about'>About of flage:- {listItem.flags.alt}</h2>

                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112057.38696005884!2d77.3292032!3d28.635955199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689587677851!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                    </div>
                )

            })}



        </div>
        </div>
    )
}

export default WorldMap


