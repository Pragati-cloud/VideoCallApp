import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Room from './pages/VideoRoom.jsx'

function App() {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/room/:roomId' element ={<Room/>}/>
     </Routes>
  )
}

export default App