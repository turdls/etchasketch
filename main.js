const reset = document.querySelector('.reset');

function createBoard(size) {

    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let square = document.querySelectorAll('.square');
        square.forEach((div) => div.remove());
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        grid.appendChild(square);
        square.className = 'square';
        square.addEventListener('mouseover', function () {
            this.style.backgroundColor = 'black';
        });

    }
}

createBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createBoard(input);
    } else {
        console.log("too many squares");
    }
    return;
}

reset.addEventListener("click", function(){
    let square = document.querySelectorAll('.square');
    square.forEach((div) => div.style.backgroundColor = 'white');
})

//let setSize = document.querySelector(".set-size")
//setSize.addEventListener("click",function(){
//    prompt('How many rows? Max 100')
//
//});

//function createDiv(v) {
//
//    for (let i = 0; i < v; i++) {
//        let row = document.createElement("div");
//        row.className = "row";
//        for (let x = 1; x <= v; x++) {
//            let cell = document.createElement("div");
//            cell.className = "gridsquare";
//            cell.innerText = (i * v) + x;
//            row.appendChild(cell);
//            row.addEventListener('mouseover', function () {
//                this.style.backgroundColor = 'blue';
//            }); 
//            cell.addEventListener('mouseover', function () {
//                this.style.backgroundColor = 'blue';
//            })
//        }
//        grid.appendChild(row);
//    }
//    document.getElementsByClassName("grid").innerText = grid.innerHTML;
//}
//
//createDiv(16);
// 
