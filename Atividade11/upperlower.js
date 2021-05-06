var retorno = document.getElementById('inputtext').textContent;

function validar() {
            
    if (document.getElementById('upper').checked) {
        retorno = toUpperCase(retorno);
        document.getElementById('innerHTMLtext').innerText = retorno;
        alert("passo 1");
    }

    else if(document.getElementById('lower').checked) {
        document.getElementById('innerHTMLtext').innerText = retorno.toLowerCase();
        alert("passo 2");
    }

    else{
        alert("passo 3");
        return false;
    }
}

