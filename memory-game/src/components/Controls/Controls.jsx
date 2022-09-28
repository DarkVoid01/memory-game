import "./Controls.css"

import React, { useEffect, useState } from 'react'
import Gameover from "../GameOver/Gameover"

const Controls = () => {
  const [timeLeft, setTimeLeft] = useState(9)
  const [isStarted, setIsstarted] = useState(false)
  const [timerRan, setTimerRan] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const startTimer = e => {
    setIsstarted(true)
    setTimerRan(true)
  }

  useEffect(() => {
    if (isStarted && !(timeLeft < 1) && timerRan) {
      const interval = setTimeout(() => {
        setTimeLeft( Prevtime => timeLeft - 1)
        return interval
      }, 1000)
    } else if ((timeLeft < 1) && timerRan) {
      setGameOver(true)
      setTimeLeft(9)
      setTimerRan(false);
      
      } else {
      setTimerRan(false);
      }
}, [isStarted, timeLeft, timerRan])
  return (
    <div className="Controls">
      <p onClick={startTimer} className="contolBtn">
        Play
      </p>

      <div className="timer">
        <p>TIMER:</p>
        <p>00:{timeLeft}</p>
      </div>
      {gameOver && <Gameover click={() => setGameOver(false)} />}
    </div>
  );
}

export default Controls