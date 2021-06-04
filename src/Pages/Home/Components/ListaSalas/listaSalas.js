import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
        minWidth: 300,
        maxWidth: 400
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip: {
        margin: 4
    },
    noLabel: {
        marginTop: theme.spacing(1)
    }
}));



const names = [
    'Sala A',
    'Sala B',
    'Sala C',
    'Sala D',
    'Sala E'
];

export default function MultipleSelect() {
    const classes = useStyles();
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

    return (
        <div className="box-lista-sala">
            <FormControl className={classes.formControl}>
                <Select
                    multiple
                    native
                    value={personName}
                    onChange={handleChangeMultiple}
                    inputProps={{
                        id: 'select-multiple-native'
                    }}
                >
                    {names.map(name => (
                        <option key={name} value={name}>
                            {name}
                            {1}
                        </option>

                    ))}

                </Select>
            </FormControl>
        </div>
    );
}
