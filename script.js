let con = document.querySelector('.container');


let start = function (side) {
    let size = 900 / side + 'px';
    for (let vert = 0; vert < side; vert ++) {
    for (i = 0; i < side; i ++) {
        let div = document.createElement('div');
        div.style.width = size;
        div.style.height = size;
        div.classList.add('sq');
        con.appendChild(div);
    }
}
return
}

let draw = function () {
    let sq = document.querySelectorAll('.sq');
    sq.forEach(sqare => sqare.addEventListener('mouseover', changeColor));
}



let btn = document.querySelector('button');
    btn.addEventListener('click', () => {
    let side = prompt('how many sqares do you want one side to have? (max 100)');
    if (typeof(side === 'number') && side <= 100) start(side);
    else alert('enter correct number');
    draw();
    return;
}, {once: true})


let changeColor = function () {
    this.classList.add('red')
}
