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


function criarJogador(jogadorId, nickname){
    var player = {
        playerId = jogadorId,
        nickname = nickname
    }

    $.ajax({
        type: "POST",
        url: apiUrl+"/create-player",
        data: JSON.stringify(player),
        contentType: "application/json",
        dataType: "json",
        statusCode: {
            201: () => {
                $(".alert-success").removeClass('d-none');
            }
        },
        error: (data) => {
            console.log("Falha ao criar jogador. Erro: ",data)
            if (data.status == 201) return;
        }
    });
}

function buscarSalas() {
    $.get(apiUrl+"/list-rooms", function (data) {
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
