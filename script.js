let con = document.querySelector('.container');



for (let vert = 0; vert < 16; vert ++) {
    for (i = 0; i < 16; i ++) {
        let div = document.createElement('div');
        div.classList.add('sq')
        if (i === 0) div.classList.add('clear');
        con.appendChild(div);
    }
}