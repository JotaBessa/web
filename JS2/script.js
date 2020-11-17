function rd(min, max)
{
    return Math.floor(Math.rd() * (max - min + 1)) + min;
}
let pts = 0;
let b = true;


while(b)
{
	console.log("Escolha sua jogada:");
	console.log("1-Papel");
	console.log("2-Pedra");
	console.log("3-Tesoura");
	let jogada = parseInt(prompt());
	let r = rd(1,3);
	let jogada_pc = "Computador jogou: "

	if(r == 1) jogada_pc += "Papel";
	if(r == 2) jogada_pc += "Pedra";
	if(r == 3) jogada_pc += "Tesoura";

	console.log(jogada_pc);

	if(r == jogada)
		{
			console.log("Empate");
		}
	else if((jogada == 1 && r == 2) || (jogada == 2 && r == 3) || (jogada == 3 && r == 1))
		{
			console.log("Você ganhou! :)");
			pts++;
		}
	else if((jogada == 1 && r == 3) || (jogada == 2 && r == 1) || (jogada == 3 && r == 2))
		{
			console.log(`Você perdeu! A sua pontuação foi de ${pts} :)`);
			b = false;
		}
	else
		{
			console.log("Opção Inválida. Você perdeu! :)");
			b = false;
		}
}

