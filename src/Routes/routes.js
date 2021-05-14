import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/home.js'
import Sala from '../pages/Sala/sala.js'
import Categoria from '../pages/Categoria/categoria.js';
import Aposta from '../pages/Aposta/aposta.js';
import Resposta from '../pages/Resposta/resposta.js';
import Resultado from '../pages/Resultado/resultado.js';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sala' component={Sala} />
                <Route path='/categoria' component={Categoria} />
                <Route path='/aposta' component={Aposta} />
                <Route path='/resposta' component={Resposta} />
                <Route path='/resultado' component={Resultado} />
            </Switch>
        </BrowserRouter>
    );
}
