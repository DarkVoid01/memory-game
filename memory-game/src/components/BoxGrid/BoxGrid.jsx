import "./BoxGrid.css"
import boxes from "./Boxes"
import React from 'react'

const BoxGrid = () => {
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const newBox = shuffle(boxes);
        const clickHandler = e =>{
        console.log(e.box.box)
    }
  return (
    <div className="BoxGrid">
        <div className="box-container">
            {newBox.map(
                box =>(
                    
                <div onClick={clickHandler} className="indi-box" key={box.box}>
                    <p>{box.value}</p>
                </div>
                )
            )}
        </div>
    </div>
  )
}

export default BoxGrid