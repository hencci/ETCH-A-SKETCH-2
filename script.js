const container = document.querySelector('.container');
const changeGrid = document.querySelector('#changeGrid');
const resetButton = document.querySelector('#reset');
const clear = document.querySelector('#clear');

let grids = 16;

changeGrid.addEventListener("click", numberOfSquares);
resetButton.addEventListener("click", resetGrids);
clear.addEventListener("click", clearContainer);

function makeGrids(squares) {
    const containerWidth = container.clientWidth;
    const squareSize = containerWidth/squares;
    for (let i =1; i <= (squares * squares); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("pointerdown", draw);
        container.appendChild(square);
    }
}

makeGrids(grids);

function numberOfSquares() {
    const selectElement = document.querySelector('#numberSelect');
    selectElement.style.display = "inline-block"
    
    selectElement.addEventListener("change", (e) => {
        const newSquares = e.target.value;
        if (newSquares >= 1 && newSquares <= 100) {
            container.innerHTML = "";
            grids = newSquares;
            makeGrids(newSquares);
        }
        else if (newSquares === "other") {
            let otherSquares = prompt("Enter a number (from 1 - 100)");
            if (otherSquares >= 1 && otherSquares <= 100) {
                container.innerHTML = "";
                grids = otherSquares;
                makeGrids(otherSquares);
            }
            else {
                alert("Invalid input. Try again");
            }
        }
    });
}

function draw(e) {
    e.target.style.backgroundColor = "white";
}

function clearContainer(){
    container.innerHTML = "";
    makeGrids(grids);
}

function resetGrids() {
    container.innerHTML = "";
    grids = 16;
    makeGrids(grids);
}