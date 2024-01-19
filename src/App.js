import React, {useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Home from "./components/Home";



function App() {
  const [gameState, setGameState] = useState('home');
  const [markState,setMarkState] = useState(0)
  const [isDark,setIsDark] = useState(false)

  const handlePlayClick = () => {
    setGameState('game');
  };

  const handleGameOver = () =>{
    setGameState("result")
  }

  const handelRestart = () => {
    setGameState("home")
  }

  isDark ? document.body.style.backgroundColor = "#242424" 
  :
  document.body.style.backgroundColor = "rgb(215, 213, 213)"

  return (
    <>
      {gameState === 'home' && <Home isDark={isDark} onPlayGame={handlePlayClick} themeSet={setIsDark}/>}
      {gameState === 'game' && <QuestionBox isDark={isDark} setMarkState = {setMarkState} onGameOver={handleGameOver} themeSet={setIsDark} />}
      {gameState === 'result' && <Result isDark={isDark} markState = {markState} onRestart = {handelRestart} themeSet={setIsDark}/>}
    </>
        
  );
}

export default App;