import React from 'react'
import "./Result.css"



export default function Result(props) {
  let {isDark,markState , onRestart,themeSet} = props

  const per = (num) =>{
    return (num/5 * 100).toFixed(1)
  }

  const conStyle = {
    backgroundColor: isDark ? "#4F4F4F" : "white",
    borderColor : isDark ? "#FF87B7" : "black"
}

const textStyle = {
  color : isDark ? "#FF87B7" : "#D03737"
}

const buttonColor = {
  borderColor : isDark ? "#FF87B7" : "black",
  backgroundColor: isDark ? "#8F8E8E" : "#0C1248"
}
  return (
    <>
      <div className='container' style={conStyle}>
      <button className='theme' style={buttonColor} onClick={() =>(themeSet((prev) => !prev))}>Theme</button>
        <div id='result'>
          <h1 id='headResult' style={textStyle}>RESULT</h1>
          <h3 className='bigger' style={textStyle}>{markState} of 5 is correct</h3>
          <h2 id='score' style={textStyle}>SCORE : {per(markState)}%</h2>
          <button id='again' onClick={onRestart} style={buttonColor}>PLAY AGAIN</button>
        </div>
        

      </div>
    </>
  )
}
