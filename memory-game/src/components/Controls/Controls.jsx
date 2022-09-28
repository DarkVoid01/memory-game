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
      const interval = setTimeout(() => {
        setTimeLeft( Prevtime => timeLeft - 1)
        return interval

      }
     , 1000)
    }
    //  return clearInterval(interval);
}, [isStarted, timeLeft])
  return (
    <div className="Controls">
      <p onClick={startTimer} className="contolBtn">
        Play
      </p>

      <div className="timer">
        <p>TIMER:</p>
        <p>00:{timeLeft}</p>
      </div>
    </div>
  );
}

export default Controls