import React, { useState } from 'react'
import "./Question.css"
import logo from "../assets/LOGO-LIGHT.png"
import LOGO1 from "../assets/LOGO-DARk.png"
import questions from '../questions'

export default function QuestionBox(props) {
  const {isDark, setMarkState, onGameOver ,themeSet} = props
  const [quesState,setQuesState] = useState(0)
  const [isMark , setIsMark] = useState(false)


  let  temp = questions[quesState]

  const checker = (i) =>{
    if (quesState==0){
      setMarkState(0)
    }
    if (temp.options[i].isCorrect){
      setMarkState((prev) => prev+1)
    }
    
    if (quesState < 4){
      setQuesState(quesState+1)
    }else{
       
      onGameOver()
    }
  }

  const conStyle = {
        backgroundColor: isDark ? "#4F4F4F" : "white",
        borderColor : isDark ? "#FF87B7" : "black"
    }
  const buttonColor = {
      borderColor : isDark ? "#FF87B7" : "black",
      backgroundColor: isDark ? "#8F8E8E" : "#0C1248"
  }
  const divStyle = {
    borderColor : isDark ? "#FF87B7" : "black",
    backgroundColor: isDark ? "#5A5A5A": "#EEEEEE",
    color : isDark ? "#FF87B7" : "#0C1248"
  }

  return (
    <>
      <div className='container' style={conStyle}>
        <div id='heading'>
            <div id='questionNumber' style={buttonColor}>
                <span></span>
                <span>{quesState+1} of 5</span>
            </div>
            <img src={isDark ? LOGO1 : logo} alt="" />
            <button style={buttonColor} onClick={() =>(themeSet((prev) => !prev))}>Theme</button>
        </div>

        <div id='quesBox'>
          <div id='questionDiv' style={divStyle}>
            <h1 style={isMark? {color:"red"} :{color:"inherit"}}>{temp.text}......<br/>.......?</h1>
          </div>
          <div id='optionBox'>
              <div className="options" style={divStyle} onClick={() => checker(0)}>{temp.options[0].text}</div>
              <div className="options" style={divStyle} onClick={() => checker(1)}>{temp.options[1].text}</div>
              <div className="options" style={divStyle} onClick={() => checker(2)}>{temp.options[2].text}</div>
              <div className="options" style={divStyle} onClick={() => checker(3)}>{temp.options[3].text}</div>
          </div>
        </div>

        <div id='buttons'>
          <button id='mark' onClick={()=>setIsMark(true)}>MARK</button>
          <button id='unmark' onClick={()=>setIsMark(false)}>UNMARK</button>
        </div>
      </div>
    </>
  )
}
