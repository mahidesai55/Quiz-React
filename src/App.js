import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Score from './Score'
import Question from './Question'
import "./quiz.css"
export const scoreContext = createContext(null)

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <scoreContext.Provider value={{score , setScore}}>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Home' element={<Home />}></Route>
    <Route path='/Register' element={<Register />}></Route>
    <Route path='/Score' element={<Score />}></Route>
    <Route path='/Question' element={<Question />}></Route>
  </Routes>
  </BrowserRouter>
  </scoreContext.Provider>
  )
}