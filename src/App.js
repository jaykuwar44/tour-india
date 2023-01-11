import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Project-File/About'
import All from './Project-File/All'
import Central from './Project-File/Central'
import Home from './Project-File/Home'
import Navbar from './Project-File/Navbar'
import NoMatch from './Project-File/NoMatch'
import North from './Project-File/North'
import NorthEastern from './Project-File/NorthEastern'
import South from './Project-File/South'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        
        <Route path='' element={<Home />}>
          <Route index element={<All />}></Route>
          <Route path='north' element={<North />}></Route>
          <Route path='central' element={<Central />}></Route>
          <Route path='north-eastern' element={<NorthEastern />}></Route>
          <Route path='south' element={<South />}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </div>
  )
}

export default App