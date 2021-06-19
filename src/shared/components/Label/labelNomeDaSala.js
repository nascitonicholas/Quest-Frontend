import React from 'react';
import TextField from '@material-ui/core/TextField';
import './label.css'

export default function LabelNovaSala (propos) {
        return (
            <form className="Label-NovaSala" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Nome da Sala" variant="outlined" />
            </form>
        );
}