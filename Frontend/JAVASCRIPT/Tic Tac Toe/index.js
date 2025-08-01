let turn = 0;
let board = document.getElementById("board");

// Corrected winning conditions
const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// Function to check the winner
const checkWinner = function () {
    for (let i = 0; i < winningConditions.length; i++) {
        let cell1 = document.getElementById(winningConditions[i][0]);
        let cell2 = document.getElementById(winningConditions[i][1]);
        let cell3 = document.getElementById(winningConditions[i][2]);

        if (cell1.innerHTML === cell2.innerHTML && cell2.innerHTML === cell3.innerHTML && cell1.innerHTML !== "") {
            if (cell1.innerHTML === "X") {
                document.getElementById("result").innerHTML = "Player 1 Wins";
            } else {
                document.getElementById("result").innerHTML = "Player 2 Wins";
            }
            board.removeEventListener("click", play);
            return true; // Stop checking further if a winner is found
        }
    }
    return false; // No winner found
}

// Function to handle the play
const play = function (event) {
    if (event.target.innerHTML === "") { // Check if the cell is empty
        if (turn % 2 === 0) {
            event.target.innerHTML = "X";
        } else {
            event.target.innerHTML = "O";
        }
        turn++;

        if (checkWinner() || turn === 9) { // Check for winner or draw
            if (turn === 9 && !checkWinner()) {
                document.getElementById("result").innerHTML = "Match Draw";
            }
            board.removeEventListener("click", play);
        }
    }
}

// Attach event listener to the board
board.addEventListener("click", play);
