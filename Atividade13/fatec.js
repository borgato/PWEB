function cursos(){

    if(document.getElementById('cursos').value == 0){
        return false;
    }

    else if(document.getElementById('cursos').value == 1){
        if(window.confirm('Você deseja saber um pouco mais sobre Análise e Desenvolvimento de Sistemas?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_ads.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 2){
        if(window.confirm('Você deseja saber um pouco mais sobre Eletrônica Automotiva?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_ea.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 3){
        if(window.confirm('Você deseja saber um pouco mais sobre Fabricação Mecânica?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_fm.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 4){
        if(window.confirm('Você deseja saber um pouco mais sobre Gestão Empresarial?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_ead-ge.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 5){
        if(window.confirm('Você deseja saber um pouco mais sobre Gestão da Qualidade?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_gq.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 6){
        if(window.confirm('Você deseja saber um pouco mais sobre Logística?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_log.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 7){
        if(window.confirm('Você deseja saber um pouco mais sobre Manufatura Avançada?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_ma.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 8){
        if(window.confirm('Você deseja saber um pouco mais sobre Processos Metalúrgicos?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_pm.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 9){
        if(window.confirm('Você deseja saber um pouco mais sobre Polímeros?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_pol.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else if(document.getElementById('cursos').value == 10){
        if(window.confirm('Você deseja saber um pouco mais sobre Projetos Mecânicos?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_proj.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }

    else {
        if(window.confirm('Você deseja saber um pouco mais sobre Sistemas Biomédicos?')){
            window.open('http://www.fatecsorocaba.edu.br/curso_sb.asp', width = 600, height = 300);
        }
        else{
            alert("Obrigado pela visita!");
        }
        return false;
    }
}