let con = document.querySelector('.container');

let side = 16;
let size = Math.floor(900 / side) + 'px';

let start = function () {
    for (let vert = 0; vert < side; vert ++) {
    for (i = 0; i < side; i ++) {
        let div = document.createElement('div');
        div.style.width = size;
        div.style.height = size;
        div.classList.add('sq');
        if (i === 0) div.classList.add('clear');
        con.appendChild(div);
    }
}
}


let sq = document.querySelectorAll('.sq');

let changeColor = function () {
    this.classList.add('red')
}

sq.forEach(sqare => sqare.addEventListener('mouseover', changeColor))

