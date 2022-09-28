import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'

const App = () => {
  document.title = "Memory Game"
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App