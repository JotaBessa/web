let raio = document.getElementById('r');
let a = document.getElementById('a');
let c = document.getElementById('c');
let bt = document.getElementById('ok');
bt.onclick = () => {
    let nc = 2 * Math.PI * parseInt(r.value);
    nc = nc.toFixed(2);
    let ar = Math.PI * (parseInt(r.value) ** 2);
    ar = ar.toFixed(2);
    a.value = ar
    c.value = nc
}
