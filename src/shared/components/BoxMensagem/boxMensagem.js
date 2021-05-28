import React from 'react';

export default function BoxMensagem(propos){
    return(
        <div className={propos.class}>
            <p>{propos.mensagem}</p>
        </div>
    )
}