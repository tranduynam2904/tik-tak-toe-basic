import { useState } from "react";
import Box from "./Box";
import BoxGame from "./BoxGame";
import "./App.css";
export default function App1() {
    const [show, setShow] = useState(true);
    const handle_click = () => {
        alert("I met you in the afternoon after work")
    }
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const handle_play = (index) => {
        let newBoard = [...board];
        newBoard[index] = show ? "X" : "O";
        setBoard(newBoard);
        setShow(!show);
        if (!show) {
            setShow(false)
        }
        if(setShow(false)){
            setShow(true)
        }
    }
    // if (!show) {
    //     handle_play();
    //     setBoard(true);
    // }
    return (
        <div>
            {/* {show ? <Box old={8} name={"Le Cho"} handle_click={handle_click} /> : ""} */}
            {/* <button onClick={() => setShow(!show)}>Toggle mount</button> */}
            <div className="game">
                {board.map((value, key) => {
                    return (
                        <BoxGame value={board[key]} handle_play={handle_play} index={key} />
                    )
                })}
            </div>
        </div>
    )
}