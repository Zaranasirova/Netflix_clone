import React from 'react'
import Home from './Pages/Home';
import { Route, Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App