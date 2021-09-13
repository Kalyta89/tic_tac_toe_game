import '../Style/game.css'


import React from 'react'
const winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const redLineObjStyle = {
    '0, 1, 2': 'red-line red-line-location-0',
    '3, 4, 5': 'red-line red-line-location-1',
    '6, 7, 8': 'red-line red-line-location-2',
    '0, 3, 6': 'red-line red-line-location-3',
    '1, 4, 7': 'red-line red-line-location-4',
    '2, 5, 8': 'red-line red-line-location-5',
    '0, 4, 8': 'red-line red-line-location-6',
    '2, 4, 6': 'red-line red-line-location-7'
  }
const Game = (props) => {
    const {squares,
        setSquares,
        count,
        setCount,
        firstPlayerCount,
        setFirstPlayerCount,
        secondPlayerCount,
        setSecondPlayerCount,
        submitName,
        redLineWinnerState,
        setRedLineWinnerState
    } = props

    const isWinner = () => {
        let s = (count % 2 === 0) ? 'x-elem x-elem:after' : 'O-elem O-elem:after';
        for (let i = 0; i < 8; i++) {
          let line = winnerLine[i];
          let drawBoolen = squares.includes(null)
          if (squares[line[0]] === s 
            && squares[line[1]] === s 
            && squares[line[2]] === s) {
                let lineStr = line.join(', ')           // Зачеркиваем красной линией победителя
                for (let key in redLineObjStyle) {
                    if (lineStr === key) {
                      let redLineWinner = redLineObjStyle[key];
                      setRedLineWinnerState(redLineWinner);
                    }
                }
            setTimeout(()=> {
                (s === 'x-elem x-elem:after'? alert(submitName.firstName + ' win!!!') : alert(submitName.secondName + ' win!!!'))},500)
            setTimeout(() => {
              (s === 'x-elem x-elem:after'? setFirstPlayerCount(firstPlayerCount + 1):setSecondPlayerCount(secondPlayerCount + 1))  // Добавляем победителю очко в счетчик
              setSquares(Array(9).fill(null));
              setCount(0);
              setRedLineWinnerState('');
            }, 2000)
        }else if(drawBoolen !== true && i === 7){       // Проверяем на ничейный результат
            setTimeout(()=>{alert("Draw!!");
            setSquares(Array(9).fill(null));
            setCount(0);
            })
          }  
      }
    }
      
      const clickHandler = event => {
        let data = event.target.getAttribute('data');
        let currentSquares = squares;
        if(currentSquares[data] === null){
        currentSquares[data] = (count % 2 === 0) ? 'x-elem x-elem:after' : 'O-elem O-elem:after';
        setCount(count + 1);
        setSquares(currentSquares)
      } else {
        alert('Unpossible!!!')
      } console.log(currentSquares);
         isWinner();
      }

    return (
        <>
        <div className={redLineWinnerState}></div>
        <div className="violet-border-1"></div>
        <div className="violet-border-2"></div>
        <div className="violet-border-3"></div>
        <div className="violet-border-4"></div>
        <div className="tic-tac-toe">
          <div className={`ttt-grid ${squares[0]}`} onClick={clickHandler} data="0"></div>
          <div className={`ttt-grid ${squares[1]}`} onClick={clickHandler} data="1"></div>
          <div className={`ttt-grid ${squares[2]}`} onClick={clickHandler} data="2"></div>
          <div className={`ttt-grid ${squares[3]}`} onClick={clickHandler} data="3"></div>
          <div className={`ttt-grid ${squares[4]}`} onClick={clickHandler} data="4"></div>
          <div className={`ttt-grid ${squares[5]}`} onClick={clickHandler} data="5"></div>
          <div className={`ttt-grid ${squares[6]}`} onClick={clickHandler} data="6"></div>
          <div className={`ttt-grid ${squares[7]}`} onClick={clickHandler} data="7"></div>
          <div className={`ttt-grid ${squares[8]}`} onClick={clickHandler} data="8"></div>
        </div>
        <div className="game-counter">
          <div>Score</div>
          <div>{submitName.firstName !== '' 
            && submitName.secondName !== ''? submitName.firstName : null} : {firstPlayerCount}</div>
          <div>{submitName.firstName !== '' 
            && submitName.secondName !== ''? submitName.secondName : null}: {secondPlayerCount}</div>
        </div>
        </>
    )
}

export default Game
