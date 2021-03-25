function jogar(){
	if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
		alert("Selecione uma opção.");
	}
	else{
		var resultado = Math.floor(Math.random() * 3);
		switch(resultado){
			case 0:
				document.getElementById("pc").src="pedra.png";
				break;
			case 1:
				document.getElementById("pc").src="papel.png";
				break;
			case 2:
				document.getElementById("pc").src="tesoura.png";
				break;
		}
		if((document.getElementById("pedra").cheked && restultado == 0)||(document.getElementById("papel").cheked && restultado == 1)||(document.getElementById("tesoura").cheked && restultado == 2)){
			alert("Empate!");
		}
		else if((document.getElementById("pedra").cheked && restultado == 2)||(document.getElementById("papel").cheked && restultado == 0)||(document.getElementById("tesoura").cheked && restultado == 1)){
			alert("Você venceu!");
		}
		else{
			alert("Você perdeu!");
		}


	}
}

function resetar(){
	document.getElementById("pc").src="pc.png";
} 