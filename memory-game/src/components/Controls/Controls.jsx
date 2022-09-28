import "./Controls.css"

import React, { useEffect, useState } from 'react'

const Controls = () => {
  const [timeLeft, setTimeLeft] = useState(60)
  const [isStarted, setIsstarted] = useState(false)
  const startTimer = e => {
    setIsstarted(true)
  }

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
      setTimeLeft( timeLeft - 1)
    }, 1000)
  }
}, [isStarted])
  return (
    <div className="Controls">
      <p onClick={startTimer} className="contolBtn">Play</p>
      
      <p>TIMER:</p>
      <p>00:{ timeLeft }</p>

    </div>
  )
}

export default Controls