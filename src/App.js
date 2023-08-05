import './App.css';
import React from 'react'
import Home from './Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Create from './Component/Create'
import Update from './Component/Update'
import Read from './Component/Read'
import Timerwatch from './Component/Timerwatch'
import Country from './Component/Country';
import WorldMap from './Component/WorldMap';

const App = () => {
return (
    <>
<BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/Create' element ={<Create/>} />
      <Route path='/Update/:id' element ={<Update/>} />
      <Route path='/Read/:id' element ={<Read/>} />
      <Route path='/Timerwatch' element ={<Timerwatch/>} />
      <Route path='/Country' element ={<Country/>} />
      <Route path='/WorldMap' element ={<WorldMap/>} />
     
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
