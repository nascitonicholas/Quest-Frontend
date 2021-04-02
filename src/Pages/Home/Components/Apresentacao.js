import React from 'react';
import '../style.css'

export default function Apresentacao(propos) {
    return (
        <div className="box-mensagem-apresentacao">
            <h1>{propos.mensagem}</h1>
        </div>
    )
}