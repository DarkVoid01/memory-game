import "./BoxGrid.css"
import boxes from "./Boxes"
import React from 'react'

const BoxGrid = () => {

    const clickHandler = e =>{
        const number = e.target.child.textContent
    }
  return (
    <div className="BoxGrid">
        <div className="box-container">
            {boxes.map(
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