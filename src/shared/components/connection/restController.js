const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

function RestController() {
    const apiUrl = 'http://localhost:8080';

    var salas = [];
    var jogadores = [];

    var sala = {
        salaId:"",
        salaNome:"",
        jogadores:[],
        maximoJogadores:""
    }

    this.criarJogador = (jogadorId, nickname) => {
        var player = {
            playerId: jogadorId,
            playerName: nickname
        }

        $.ajax({
            type: "POST",
            url: apiUrl + "/create-player",
            data: JSON.stringify(player),
            contentType: "application/json",
            dataType: "json",
            function(data, status) {
                console.log('xxx', status)
                if (status == 201) {
                    return data;
                }
            }
        });

    }

    this.buscarSalas = () => {
        $.get(apiUrl + "/list-rooms", function (data) {
            console.log('data ',data);
            return data;
        });
    }


    this.criarSala = (salaReq) => {
        console.log("request: ", salaReq);

        $.ajax({
            type: "POST",
            url: apiUrl + "/create-room",
            data: JSON.stringify(salaReq),
            contentType: "application/json",
            dataType: "json",

            success: function (data) {
                $('#target').html(data.msg);
                console.log('data: ', data);
                var sala = {
                    salaId : data.roomId,
                    salaNome : data.roomName,
                    jogadores : data.players,
                    maximoJogadores : data.maxPlayers
                }
                console.log('buildSala ', sala);
                return sala;
            },
        });
    }
}
module.exports = RestController;
