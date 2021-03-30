function jogar(){
	if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
		alert("Selecione uma opção.");
	}
	else{
		var resultado = Math.round(Math.random()*3);
		switch(resultado){
			case 1:
				document.getElementById("pc").src="pedra.png";
				if(document.getElementById("pedra").checked == true){
					alert("Empate");
				}
				else if(document.getElementById("papel").checked == true){
					alert("Você ganhou");
				}
				else{
					alert("Você perdeu");
				}
				break;
			case 2:
				document.getElementById("pc").src="papel.png";
				if(document.getElementById("pedra").checked == true){
					alert("Você perdeu");
				}
				else if(document.getElementById("papel").checked == true){
					alert("Empate");
				}
				else{
					alert("Você ganhou");
				}
				break;
			case 3:
				document.getElementById("pc").src="tesoura.png";
				if(document.getElementById("pedra").checked == true){
					alert("Você ganhou");
				}
				else if(document.getElementById("papel").checked == true){
					alert("Você perdeu");
				}
				else{
					alert("Empate");
				}
				break;
		}
	}
}

function resetar(){
	document.getElementById("pc").src="pc.png";
} 