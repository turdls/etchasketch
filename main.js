const grid = document.querySelector(".grid");

function repeatDiv() {
    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.classList.add("boxes");
        grid.appendChild(div);
    }
}

//function createDiv() {
//    const newDiv = document.createElement("div");
//    newDiv.classList.add("boxes");
//    grid.appendChild(newDiv);
//}


repeatDiv();
