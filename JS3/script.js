const cnt = function (value)
{
    let sum = value;
    return{
        inc: function ()
        {
            return sum++;
        }
    }
}

let Cnt = cnt(1);

console.log("Primeira chamada: " + Cnt.inc());
console.log("Segunda  chamada: " + Cnt.inc());
console.log("Terceira chamada: " + Cnt.inc());