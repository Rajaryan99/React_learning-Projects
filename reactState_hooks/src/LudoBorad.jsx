import { useState } from "react"

export default function LudoBorad() {

    let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });

    let updateBlue = () => {
      setMoves({...moves, blue: moves.blue + 1});
    }
    let updateRed = () => {
      setMoves({...moves, red: moves.red + 1});
    }
    let updateYellow = () => {
      setMoves({...moves, yellow: moves.yellow + 1});
    }
    let updateGreen = () => {
      setMoves({...moves, green: moves.green + 1});
    }
   
    return (
        <div>
            <h3>Game Begins!</h3>
            <div className="board">
                <p>Blue Move = {moves.blue}</p>
                <button style={{background: "blue"}} onClick={updateBlue}>+1</button>
                <p>red Move = {moves.red}</p>
                <button style={{background: "red"}} onClick={updateRed}>+1</button>
                <p>Yellow Move = {moves.yellow}</p>
                <button style={{background: "yellow", color: 'black'}}  onClick={updateYellow}>+1</button>
                <p>Green Move = {moves.green}</p>
                <button style={{background: "Green"}}  onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}