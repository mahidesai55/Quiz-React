import React, { useContext } from 'react'
import { scoreContext } from './App'

function Score() {
  const {score} = useContext(scoreContext)
  return (
    <div className='score'>
      <h1>Quiz completed</h1>
      <h1>Your score: {score} / 10</h1>

    </div>
  )
}

export default Score