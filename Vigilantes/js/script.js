(function () {

  const FPS = 1; 
  let gameDim = [1243, 960];
  let focoDim = [100, 130];
  let probFoco = 25;
  let reserva; 
  let gameLoop;
  let devastar;
  let drop;
  let vidaDim = [88,56];
  let focos = [];
  let devDim = [160];
  let devd = [180];
  let overDim = [1000,16];
  let cav = [];
  let dev = [];
  let numvidas = [];
  let points = 0;

  function init() {
    reserva = new Reserva();
    pontuacao = new pts();
    carv();
    gameLoop = setInterval(run, 1000/FPS);

  }

  window.addEventListener("keydown", function (e) {
    if (e.key === 's') {
      clearInterval(gameLoop);
      clearTimeout(drop);
      clearTimeout(devastar);
      points = 0;
      cav = [];
      focos = [];
      arvoresVida = [];
      document.body.innerHTML = "";
      init();
    }
    if (e.key === 'p' ) {
      alert("Pause");
    }
  })

  class Reserva {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "reserva";
      this.element.style.width = `${gameDim[0]}px`;
      this.element.style.height = `${gameDim[1]}px`;
      document.body.appendChild(this.element);
    }
  }

  class FocoIncendio {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "foco";
      this.element.style.width = `${focoDim[0]}px`;
      this.element.style.height = `${focoDim[1]}px`;
      this.element.style.left = `${Math.floor((Math.random() * (gameDim[0]-focoDim[0])))}px`;
      this.element.style.top = `${Math.floor((Math.random() * (gameDim[1]-focoDim[1])))}px`;
      this.Click = false;
      reserva.element.appendChild(this.element);
      
      this.element.addEventListener('click',(e) => {  
        e.target.remove();
        points+=10;
        lp(points,5);
        this.Click = true;
      });
    }
    get coordenadas(){
      var coord = [];
      coord.push(this.element.style.left);
      coord.push(this.element.style.top);
      this.element.style.width = '0px';
      this.element.style.height = '0px';
      this.element.style.left = '0px';
      this.element.style.top = '0px';
      return coord;
      
    }
  }
  class pts {
    constructor () {
        this.element = document.createElement("div");
        this.element.className = "pontuacao";
        this.element.style.width = `${vidaDim[0]}px`;
        this.element.style.height = `${vidaDim[1]}px`;
        this.element.style.right = `${gameDim[0]-1050}px`;
        this.element.style.bottom =`${gameDim[1]-440}px`;
        this.element.appendChild(document.createTextNode("00000"));
        document.body.appendChild(this.element);
      }
    }
  class Caveira {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "caveira";
      this.element.style.width = `${focoDim[0]}px`;
      this.element.style.height = `${focoDim[1]}px`;
      this.element.style.left = `${Math.floor((Math.random() * (gameDim[0]-focoDim[0])))}px`;
      this.element.style.top = `${Math.floor((Math.random() * (gameDim[1]-focoDim[1])))}px`;
      this.Click = false;
      reserva.element.appendChild(this.element);
      this.element.addEventListener('click',(e) => {  
        e.target.remove();
        points+=20;
        lp(points,5);
        this.Click = true;
      });
    }
    get coordenadas () {
      var coord = [];
      coord.push(this.element.style.left);
      coord.push(this.element.style.top);
      this.element.style.left = '0px';
      this.element.style.top = '0px';
      this.element.style.width = '0px';
      this.element.style.height = '0px';
      return coord;
    }
  }
  class Vidas {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "arvore";
      this.element.style.width = `${vidaDim[0]}px`;
      this.element.style.height = `${vidaDim[1]}px`;
      this.element.style.right = `${gameDim[0]+110}px`;
      this.element.style.bottom =`${gameDim[1]-440}px`;
      document.body.appendChild(this.element);      
    }
    menosUm(){
      this.element.style.height = "0px";
    }
  }
  class DevIn {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "devastacao";
      this.element.style.width = `${devDim}px`;
      this.element.style.height = `${devDim}px`; 
      reserva.element.appendChild(this.element);
    }
    SwapPX (value_left, value_top) {
      this.element.style.left = value_left;
      this.element.style.top = value_top;
    }
    
  }
  class DevCav {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "devastacao";
      this.element.style.width = `${devd}px`;
      this.element.style.height = `${devd}px`; 
      reserva.element.appendChild(this.element);
    }
    SwapPX (value_left, value_top) {
      this.element.style.left = value_left;
      this.element.style.top = value_top;
    }
  }
  class GameOver {
    constructor () {

      this.element = document.createElement("div");
      this.element.className = "gameOver";
      this.element.style.right = "100px";
      this.element.style.bottom =`${gameDim[1]-440}px`;
      this.element.style.width = `${overDim[0]}px`;
      this.element.style.height = `${overDim[1]}px`;
      this.element.appendChild(document.createTextNode("GAME OVER!\n"));
      this.element.appendChild(document.createTextNode("Score: "+ points));
      reserva.element.appendChild(this.element);
      clearTimeout(drop);
      clearTimeout(devastar);
      clearInterval(gameLoop);
    }

  }
  
  function carv(){
    for(i = 0; i < 5; i++){
    numvidas[i] = new Vidas();
    }
  }

  function devin(){
    if (focos.length > 0) {
      var fogo = focos.shift();
      if(!fogo.Click){
      var coord = fogo.coordenadas; 
      var devastacao = new DevIn();
      devastacao.SwapPX(coord[0],coord[1]);
      dev.push(devastacao);
      if(numvidas.length > 1){
        numvidas.pop().element.style.height = '0px';
        }
      else{
        while(numvidas.length){
          numvidas.pop().element.style.height = '0px';
        }
        let fim = new GameOver();
        
        }
      }        
    }
  }

  function devcav () {
      if (cav.length > 0) {
        var caveira = cav.shift();

        if(!caveira.Click){
        var coord = caveira.coordenadas; 
        var devastacao = new DevCav();
        devastacao.SwapPX(coord[0],coord[1]);
        dev.push(devastacao);
        if(numvidas.length > 2){
          numvidas.pop().element.style.height = '0px';
          numvidas.pop().element.style.height = '0px';
          }
        else{
          while(numvidas.length){
            numvidas.pop().element.style.height = '0px';
          }
          let fim = new GameOver();
          }
        }       
     }
  }
 function dropcav () {
      let caveira = new Caveira();
      cav.push(caveira);
      devastar = setTimeout(devcav, 2000/FPS);
    }

  function randint (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  function lp (value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    pt = document.getElementsByClassName("pontos");
    pt[0].removeChild(pt[0].firstChild);
    pt[0].appendChild(document.createTextNode(Array(length).join(paddingChar || '0') + value));
  };
  function run () {
    if(Math.random()* 150 < probFoco){
      drop = setTimeout(dropcav, (24000/randint(1,4))/FPS);
    }
    if (Math.random() * 100 < probFoco) {
      let foco = new FocoIncendio();
      focos.push(foco);
      devastar = setTimeout(devin, 2000/FPS);
    }
  }

  init();
})();
