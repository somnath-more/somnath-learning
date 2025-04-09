import React,{useState} from 'react'

const TicTacToe = () => {
    const initialBoardSetup = Array(3).fill(null).map(()=> Array(3).fill(null));
    console.log(initialBoardSetup);
    // const [data,setData]=useState(Array(3).Array(3).fill());
    const [board, setBoard] = useState(initialBoardSetup);
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
  
    const handleClick = (row:any, col:any) => {
        if (board[row][col] || winner) return; // Ignore if already filled or game over

        const newBoard = board.map((r, i) =>
            r.map((cell, j) => (i === row && j === col ? (isXTurn ? 'X' : 'O') : cell))
          );
          setBoard(newBoard);
          const win = checkWinner(newBoard);
          if (win) {
            setWinner(win);
          } else if (newBoard.flat().every(cell => cell)) {
            setWinner('Draw');
          } else {
            setIsXTurn(!isXTurn);
          }
    }
    const checkWinner = (b) => {
        const lines = [
          // Rows
          [b[0][0], b[0][1], b[0][2]],
          [b[1][0], b[1][1], b[1][2]],
          [b[2][0], b[2][1], b[2][2]],
          // Columns
          [b[0][0], b[1][0], b[2][0]],
          [b[0][1], b[1][1], b[2][1]],
          [b[0][2], b[1][2], b[2][2]],
          // Diagonals
          [b[0][0], b[1][1], b[2][2]],
          [b[0][2], b[1][1], b[2][0]],
        ];
        console.log(lines);
        
        for (let line of lines) {
            console.log(line);
            
            if (line[0] && line[0] === line[1] && line[1] === line[2]) {
              return line[0]; // 'X' or 'O'
            }
          }
          return null;    

    }
    const resetGame =()=>{
        setBoard(initialBoardSetup)
        setWinner(null);
        setIsXTurn(true)
    }
  return (
     
    <div>
              <h2>
        {winner
          ? winner === 'Draw'
            ? 'It\'s a Draw!'
            : `Winner: ${winner}`
          : `Turn: ${isXTurn ? 'X' : 'O'}`}
      </h2>
  
        <p>Hello</p>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((val, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  style={{
                    width: 60,
                    height: 60,
                    border: '2px solid #000',
                    fontSize: 24,
                    cursor: 'pointer',
                  }}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {winner && <button onClick={resetGame}>Reset</button>}


      
    </div>
  )
}

export default TicTacToe
