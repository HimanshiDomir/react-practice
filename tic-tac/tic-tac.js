let currPlayer = 'X';
let isWinner = false;
let winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7]
]
let squares = document.querySelectorAll('.cell');
squares.forEach((square, index) => square.classList.add(`cell${index}`));
function cellClicked(e) {
    let cell = e.target;
    if (cell.textContent !== '' || isWinner) return;

    if (currPlayer === 'X') {
        cell.textContent = 'X'
    }
    else cell.textContent = 'O';
    isWinner = hasWinner(squares);
    if (!isWinner) {
        currPlayer = currPlayer === "X" ? "O" : "X";
    }
    if (isWinner || boardFull()) {
        let message = document.querySelector('.message');
        isWinner ? message.textContent = `${currPlayer} won the match` : 'It is a tie';
    }


}

function hasWinner() {
    winningOptions.forEach((cells, index) => {
        let a = cells[0];
        let b = cells[1];
        let c = cells[2];
        if (squares[a].textContent && squares[a].textContent === squares[b].textContent &&
            squares[a].textContent === squares[c].textContent) {
                isWinner =  true;
        }
        
    });
    return isWinner;
}
document.querySelector('.board').addEventListener('click', (e) => cellClicked(e));
function boardFull() {
    Array.from(squares).every((cell) => {
        return cell.textContent !== ''
    })
}