import React from 'react';
import TextField from '@material-ui/core/TextField';
import './label.css'

export default function Label (propos) {
        return (
            <form className="Label-Nickname" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Nickname" variant="outlined" />
            </form>
        );
}