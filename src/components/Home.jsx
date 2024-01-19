import React from 'react'
import LOGO from '../assets/LOGO-LIGHT.png'
import LOGO1 from "../assets/LOGO-DARk.png"
import "./Home.css"
function Home(props) {    
    const {isDark ,onPlayGame , themeSet} = props

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
        <button onClick={() =>(themeSet((prev) => !prev))} style={buttonColor} className='theme'>Theme</button>
            <div id='content'>
                <div>
                    <img id='logo' src={isDark ? LOGO1 : LOGO} alt="" />
                    <div id='texts' style={textStyle}>
                        <h1>QuizMinds</h1>
                        <h3>Unlock your knowledge ,Ignite your Mind!</h3>
                    </div>
                </div>
                <button style={buttonColor}
                id='play-button'
                onClick={onPlayGame}
                >Play Now
                </button>
            </div>
            
        </div>
    </>
  )
}

export default Home