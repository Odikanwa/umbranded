import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Logo from './routes/logo'
import Cards from './routes/cards'
import Promotionals from './routes/promotionals'
import Flyers from './routes/flyers'
import Login from './routes/login'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='logo' element={<Logo/>}/>
      <Route path='cards' element={<Cards/>}/>
      <Route path='promotionals' element={<Promotionals/>}/>
      <Route path='flyers' element={<Flyers/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<Navigate to='/' />}/>
    </Routes>
  )
}

export default App;
