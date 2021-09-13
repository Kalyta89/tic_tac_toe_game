import React from 'react'
import './Style/App.css'
import { useState } from 'react'
import Modal from './Components/Modal'
import Game from './Components/Game'

  

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [firstPlayerCount, setFirstPlayerCount] = useState(0);
  const [secondPlayerCount, setSecondPlayerCount] = useState(0);
  const [modalActive, setModalActive] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [submitName, setSubmitName] = useState({
        firstName: '',
        secondName: ''
  });
  const [redLineWinnerState, setRedLineWinnerState] = useState('')


    return (
      <div className="game-wrapper">
        <Game 
          squares={squares}
          setSquares={setSquares}
          count={count}
          setCount={setCount}
          firstPlayerCount={firstPlayerCount}
          setFirstPlayerCount={setFirstPlayerCount}
          secondPlayerCount={secondPlayerCount}
          setSecondPlayerCount={setSecondPlayerCount}
          submitName={submitName}
          redLineWinnerState={redLineWinnerState}
          setRedLineWinnerState={setRedLineWinnerState}
        />
        
        <Modal active={modalActive} 
              setActive={setModalActive} 
              firstName={firstName}
              setFirstName={setFirstName}
              secondName={secondName}
              setSecondName={setSecondName}
              submitName={submitName}
              setSubmitName={setSubmitName}
              />
      </div>
    )
  }

export default App