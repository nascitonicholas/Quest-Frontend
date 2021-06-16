import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './listaSalas.css'

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

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


const salasDisponiveis = [
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
    }
]

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

            {
                salasDisponiveis.map(item => (
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
