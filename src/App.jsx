import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'

function App() {

  return (
    <>
    <h1>Welcome to Puppy Bowl</h1>
    <NavBar />
    <Routes>
      <Route path='/' element={ <AllPlayers /> } /> 
      <Route path='/player' element={ <SinglePlayer /> } />
      <Route path='/newplayer' element={ <NewPlayerForm /> } />  
    </Routes>  
    </>
  )
}

export default App
