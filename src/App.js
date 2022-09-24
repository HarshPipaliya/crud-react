import React, { Component } from 'react'
import Crud from './components/Crud'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import View from './components/View'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route eaxct path="/" element={<Crud />} />
        <Route eaxct path="/data" element={<View />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
