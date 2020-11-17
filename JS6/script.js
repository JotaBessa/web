(function () {
    let inputs = document.getElementsByTagName('input');
    let br1 = document.getElementById('br1');
    let br2 = document.getElementById('br2');
    let br3 = document.getElementById('br3');
    let br4 = document.getElementById('br4');
    let br5 = document.getElementById('br5');
    let lb = document.getElementById('lb');
    let button = document.getElementById('Desenhar');

    button.onclick = function() {
        br1.style.height = `${parseInt(inputs[0].value)}px`;
        br1.style.width =  `${lb.value}px`;

        br2.style.height = `${parseInt(inputs[1].value)}px`;
        br2.style.width =  `${lb.value}px`;

        br3.style.height = `${parseInt(inputs[2].value)}px`;
        br3.style.width =  `${lb.value}px`;

        br4.style.height = `${parseInt(inputs[3].value)}px`;
        br4.style.width =  `${lb.value}px`;

        br5.style.height = `${parseInt(inputs[4].value)}px`;
        br5.style.width =  `${lb.value}px`;
    }
})()
