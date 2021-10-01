const placar = {
    usuario: 0,
    computador: 0
}

function alteraPlacar () {
    document.getElementById('placar-jogador').innerText    = placar.usuario; 
    document.getElementById('placar-computador').innerText = placar.computador;
 }

function opcaoJogadaPeloUsuario(){
    let opcao = document.getElementById('opcao-jogador').value;

    if(opcao == 'selecione'){
        return alert("Selecione uma jogada válida e tente novamente");
    }
    

    switch (opcao) {
        case 'pedra':
            document.getElementById('imgJogador1').src = "/pedraPapelTesoura/img/pedra.png"
        break;
        case 'papel':
            document.getElementById('imgJogador1').src = "/pedraPapelTesoura/img/papel.png"; 
        break;
        case 'tesoura':
            document.getElementById('imgJogador1').src = "/pedraPapelTesoura/img/tesoura.png";
        break;
    }
}

function sorteiaJogadaComputador () {
    const numeroSorteado = parseInt(Math.random() * (4 - 1) + 1)
    switch (numeroSorteado) {
        case 1:
            document.getElementById('imgComputador').src = "/pedraPapelTesoura/img/pedra.png";
            return 'pedra'
        case 2:
            document.getElementById('imgComputador').src = "/pedraPapelTesoura/img/papel.png"; 
            return 'papel'
        case 3:
            document.getElementById('imgComputador').src = "/pedraPapelTesoura/img/tesoura.png";
            return 'tesoura'
    }
}


function jogar () {
    placar.partidas++;
    placar.vencedor++
    const valorComputador = sorteiaJogadaComputador();
    const valorJogador    = document.getElementById('opcao-jogador').value;

    if (valorComputador == valorJogador) {
        alert('Empate');
    } else if (valorJogador == 'pedra' && valorComputador == 'tesoura') {
        alert('Jogador Venceu');
        placar.usuario++;
    } else if (valorJogador == 'papel' && valorComputador == 'pedra') {
        alert('Jogador Venceu');
        placar.usuario++;
    } else if (valorJogador == 'tesoura' && valorComputador == 'papel') {
        alert('Jogador Venceu');
        placar.usuario++;
    } else {
        alert('Computador Venceu');
        placar.computador++;
    }
    alteraPlacar();
    vencedor();
}

function vencedor() {
    let usuario = document.getElementById('placar-jogador').value;
    let computador = document.getElementById('placar-computador').value;
    console.log(usuario);


    if(usuario === undefined){
        return "Usuario";
        placar.vencedor++
    }
    else if(usuario == computador){
        return "O jogo esta empatado!!!";
    }
    else{
        return "Computador"
        placar.vencedor++
    }
    
}

