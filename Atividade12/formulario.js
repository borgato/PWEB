function validar(){

    if (document.forms.form1.elements[0].value == "" || document.forms.form1.elements[0].length < 10) {
        alert("Preencha o campo NOME corretamente!");
        document.forms.form1.elements[0].focus();
        return false;
    }

    else if (document.forms.form1.elements['email'].value == "" || document.forms.form1.elements['email'].value.indexOf('@') == -1 || document.forms.form1.elements['email'].value.indexOf('.') == -1) {
        alert("Preencha o campo E-MAIL corretamente!");
        document.forms.form1.elements.email.focus();
        return false;
    }

    else if (document.forms.form1.elements.comentario.value == "" || document.forms.form1.elements.comentario.value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 50 caracteres!");
        document.getElementById('comentario').focus();
        return false;
    }

    else if(getElementById('rdsim').checked){
        alert("Que bom que você voltou a visitar esta página!");
        return false;
    }

    else if(getElementById('rdnao').checked){
        alert("Volte sempre à esta página!");
        return false;
    }

}

