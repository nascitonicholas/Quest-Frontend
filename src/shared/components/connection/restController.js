const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
//const $ = require("jquery")(window);
import $, { data } from 'jquery';

export default function RestController() {
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
       var respostaCriar = $.ajax({
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
        return respostaCriar
    }

    this.buscarSalas = () => {
        $.get(apiUrl + "/list-rooms", function (data) {
            console.log('data ',data);
            return data;
        });
    }


    this.criarSala = (salaReq) => {
        console.log("request: ", salaReq);
        var responseSala1
       
        
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
                responseSala1 = JSON.parse(sala)
                //return sala;
            },
        });
      return sala;
    }
}
//module.exports = RestController;
