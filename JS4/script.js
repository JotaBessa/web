class IntegerSet {
    constructor(value){
        this.numeros = [];
        for (var i = 0; i <= value; i++) this.numeros.push(false);
        
    }
    
    ins(num){
        this.numeros[num] = true;
    }
    
    del(num){
        if (this.numeros[num] === true)this.numeros[num] = false;
    }

    uni(b){
        let tam = 0;
        let a = this.numeros.slice();
        for (var i =0; i < a.length;i++) if(b[i] && a[i]) tam++;
        let z = new IntegerSet(a.length + b.length - tam);
        for (var i =0; i<a.length;i++) if (a[i])z.numeros[i] = a[i];
        for (var i =0; i<b.length;i++) if (b[i]) z.numeros[i] = b[i];
        return z;
    }
    
    inter(b){
        let a = this.numeros.slice();
        let tam = Math.min(a.length,b.length);
        let z = new IntegerSet(tam-1);
        for (var i =0; i < tam;i++) if (a[i] && b[i]) z.numeros[i] = a[i];
        return z;

    }

    dif(b){
        let a = this.numeros.slice();
        let tam = Math.max(a.length,b.length);
        let z = new IntegerSet(tam);
        for (var i =0; i<a.length;i++) if(!b[i] && a[i])z.numeros[i] = a[i];
         return z;
    }

    convert(){
        let a = this.numeros.slice();
        let z = "";
        for (var i =0; i<a.length;i++) if(a[i]) z+=i;
        return z;
    }
}

let a = new IntegerSet(5);
let b = new IntegerSet(8);
a.ins(1);
a.ins(2);
a.ins(3);
a.ins(4);
a.ins(5);
a.ins(0);
b.ins(4);
b.ins(5);
b.ins(6);
b.ins(7);
b.ins(8);
b.ins(0);
console.log("-Conjunto A sem exclusão-");
console.log(a.numeros);
console.log("-Conjunto B sem exclusão-");
console.log(b.numeros);
a.del(0);
b.del(0);
console.log("-Conjunto A com exclusão-");
console.log(a.numeros);
console.log("-Conjunto B com exclusão-");
console.log(b.numeros);
console.log("-uniao-");
console.log(a.uni(b.numeros).numeros);
console.log("-intersecao-");
console.log(a.inter(b.numeros).numeros);
console.log("-diferenca-");
console.log(a.dif(b.numeros).numeros);
console.log("-convercao-")
console.log(a.convert());