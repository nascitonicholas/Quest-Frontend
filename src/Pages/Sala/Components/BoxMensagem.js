import React from 'react';
import '../style.css'

export default function BoxMensagem(propos){
    return(
        <div className={propos.class}>
            <p>{propos.mensagem}</p>
        </div>
    )
}