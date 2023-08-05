


import React, { useState } from 'react'
var stoprun = undefined

const Timerwatch = () => {
    const [watch, setWatch] = useState(0)
    const [started, setStarted] = useState(false)

    const startWatch = () => {

        stoprun = setInterval(() => {
            setWatch((e) => e + 1)
            setStarted(true)
        }, 1000);
    }

    const stoptWatch = () => {
        setStarted(false)
        clearInterval(stoprun)
    }
    const resettWatch = () => {
        clearInterval(stoprun)
        setWatch(0)
        setStarted(false)
    }
    return (
        <div className='main'>
            <h1>{watch}</h1>
            <button className='batan' disabled={started} onClick={startWatch}>Start</button>
            <button className='batan' onClick={stoptWatch}>Stop</button>
            <button className='batan' disabled={started} onClick={resettWatch}>Reset</button>
        </div>
    )
}

export default Timerwatch
