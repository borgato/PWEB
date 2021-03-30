function jogar(){
	if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
		alert("Selecione uma opção.");
	}
	else{
		var resultado = Math.round(Math.random()*3);
		switch(resultado){
			case 0:
				document.getElementById("pc").src="pedra.png";
				if(document.getElementById("pedra").cheked){
					alert("Empate");
					break;
				}
				else if(document.getElementById("papel").cheked){
					alert("Você ganhou");
					break;
				}
				else{
					alert("Você perdeu 1");
				}
				break;
			case 1:
				document.getElementById("pc").src="papel.png";
				if(document.getElementById("pedra").cheked){
					alert("Você perdeu");
					break;
				}
				else if(document.getElementById("papel").cheked){
					alert("Empate");
					break;
				}
				else{
					alert("Você ganhou 2");
				}
				break;
			case 2:
				document.getElementById("pc").src="tesoura.png";
				if(document.getElementById("pedra").cheked){
					alert("Você ganhou");
					break;
				}
				else if(document.getElementById("papel").cheked){
					alert("Você perdeu");
					break;
				}
				else{
					alert("Empate 3");
				}
				break;
		}
	}
}

function resetar(){
	document.getElementById("pc").src="pc.png";
} 