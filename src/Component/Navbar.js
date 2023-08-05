import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='First'>
      <nav className="nav">
  <Link className="nav-link active" to="/"><button className='btn btn-success'>Home</button></Link>
  <Link className="nav-link active" to="/Create"> <button className='btn btn-success'>Create</button></Link>
  <Link className="nav-link active" to="/Timerwatch"><button className='btn btn-success'>Stop watch</button></Link>
  <Link className="nav-link active" to="/Country"><button className='btn btn-success'>Country</button></Link>
  <Link className="nav-link active" to="/WorldMap"><button className='btn btn-success'>WorldMap</button></Link>
</nav>
    </div>
  )
}

export default Navbar
