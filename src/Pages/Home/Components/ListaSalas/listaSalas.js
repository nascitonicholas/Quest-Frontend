import React, { useEffect, useState } from 'react';
import './listaSalas.css'
import api from '../../../../services/api';
import io from "socket.io-client";

/*Teste Conexão com Socket.io*/
const socket = io('http://localhost:8080');
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

const mockRooms = [
    {
        id: 1,
        title: 'Sala A',
        qtdaJog: 2
    },
    {
        id: 2,
        title: 'Sala B',
        qtdaJog: 2
    },
    {
        id: 3,
        title: 'Sala C',
        qtdaJog: 3
    },
    {
        id: 4,
        title: 'Sala D',
        qtdaJog: 3
    },
    {
        id: 5,
        title: 'Sala E',
        qtdaJog: 3
    },
    {
        id: 6,
        title: 'Sala F',
        qtdaJog: 3
    }
]

export default function MultipleSelect() {

    


    const [rooms, setRooms] = useState([]);
    /*
    const [personName, setPersonName] = React.useState([]);

    const handleChangeMultiple = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };
    */

    /*
    useEffect(() => {
        socket.on()
    },[])
    */

   
    useEffect(() => {
        api.get('list-rooms',{
            headers:{

            }
        }).then( response => {
            setRooms(response.data);
        });
    },[])


    console.log(rooms);

    return (
        <div className="box-lista-sala">

            {
                mockRooms.map(item => (
                    <div className="item-lista" key={item.id}>
                        <td className="titulo">{item.title}</td>
                        <td className="qdta"> {item.qtdaJog}</td>
                    </div>
                )
                )

            }
        </div>
    );
}
