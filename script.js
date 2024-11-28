const container = document.querySelector('.container');

let grids = 16;

function makeGrids(squares) {
    const containerWidth = container.clientWidth;
    const squareSize = containerWidth/squares;
    for (let i =1; i <= (squares * squares); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

makeGrids(grids);

function numberOfSquares() {
    let newSquares = prompt("Enter a number (from 1 - 100)");
    if (newSquares >= 1 && newSquares <= 100) {
        container.innerHTML = "";
        grids = newSquares;
        createGrids(newSquares);
    }
    else {
        return numberOfSquares();
    }
}