
import React, { useState } from 'react'

export default function FormValidation() {

    const [user1, setUser1] = useState("")
    const [pass1, setPass1] = useState("")
    const [usererr, setUsererr] = useState(false)
    const [pass, setPass] = useState(false)


    function sub(e) {
        e.preventDefault()
        { (user1.length < 3 || pass1.length < 3) ? alert("Please Fill the valid details") : alert("Login Successfully") }
    }

    function userhand(e) {
        var item = e.target.value
        { item.length < 3 ? setUsererr(true) : setUsererr(false) }
        setUser1(item)

    }

    function passhand(e) {
        var itempass = e.target.value
        { itempass.length < 3 ? setPass(true) : setPass(false) }
        setPass1(itempass)
    }






    return (
        <div>
            <form onSubmit={sub}>
                <h1>Login Form</h1>
                <input type="text" placeholder=' Enter User Name' onChange={userhand} />{usererr ? <span>Please Valid User name</span> : ""}
                <br /> <br />
                <input type="password" placeholder=' Enter Password' onChange={passhand} />{pass ? <span>Please Valid User name</span> : ""}
                <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
