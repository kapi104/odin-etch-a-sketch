let con = document.querySelector('.container');
let darkness = 1;


let start = function (side) {
    let size = 900 / side + 'px';
    for (let vert = 0; vert < side; vert++) {
        for (i = 0; i < side; i++) {
            let div = document.createElement('div');
            div.style.width = size;
            div.style.height = size;
            div.classList.add('sq');
            con.appendChild(div);
        }
    }
    return
}

let darker = function(red, green, blue) {
    red = red * darkness;
    green = green * darkness;
    blue = blue * darkness;
    darkness -= 0.05;
    return `rgb(${red}, ${green}, ${blue})`;
}

let colorPicker = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return darker(red, green, blue);
}



let draw = function () {
    let sq = document.querySelectorAll('.sq');
    sq.forEach(sqare => sqare.addEventListener('mouseover', changeColor));
}

let reset = function () {
    let sq = document.querySelectorAll('.sq');
    sq.forEach(item => con.removeChild(item))
    darkness = 1;
}

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    reset();
    let side = prompt('how many sqares do you want one side to have? (max 100)');
    if (typeof (side === 'number') && side <= 100) start(side);
    else alert('enter correct number');
    draw();
    return;
})

let changeColor = function () {
    this.style.backgroundColor = colorPicker();
}