import { string } from "@amcharts/amcharts4/core";

const apiUrl = 'https://localhost:8080/';

var jogador = {
    playerId,
    playerName,
}

var sala = {
    roomId,
    roomName,
    players: jogadores,
    maxPlayers,
    socketUp
};

var salas = [sala];
var jogadores = [jogador];


function buscarSalas() {
    $.get(apiUrl+"/create-player", function (data) {
        data.forEach(x => {
            sala = x;
            salas.push(sala);
        });
    });
    return salas;
}


function criarSala(salaReq){
    $.ajax({
        type: "POST",
        url: apiUrl+"/create-room",
        data: JSON.stringify(salaReq),
        contentType: "application/json",
        dataType: "json",
        function(data, status){
            if(status == 201){
               return data;     
            }        
        }
    });
    
}
