const controller = new (require('./shared/components/connection/restController'))();

criaJogadorTest();
criaSalaTest();
buscaSalaTest();

function criaJogadorTest(){
    var jogador = "Roberval";
    var jogadorID = 10;
    controller.criarJogador(jogadorID, jogador);
}

function criaSalaTest(){
    var salaRequest = {
        roomName: "sala 323", 
        playerId: "10",
        maxPlayers: "3"
    }   
    var salaResponse = controller.criarSala(salaRequest);
}

function buscaSalaTest(){
    var salas = controller.buscarSalas();
}
