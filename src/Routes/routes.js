import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home/home.js'
import Sala from '../Pages/Sala/sala.js'
import Categoria from '../Pages/Categoria/categoria.js';
import Aposta from '../Pages/Aposta/aposta.js';
import Resposta from '../Pages/Resposta/resposta.js';
import Resultado from '../Pages/Resultado/resultado.js';
import Ranking from '../Pages/Ranking/ranking.js';
import Lobby from '../Pages/Sala/lobby.js'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sala' component={Sala} />
                <Route path='/ranking' component={Ranking} />
                <Route path='/categoria' component={Categoria} />
                <Route path='/aposta' component={Aposta} />
                <Route path='/resposta' component={Resposta} />
                <Route path='/resultado' component={Resultado} />
                <Route path='/lobby' component={Lobby} />
            </Switch>
        </BrowserRouter>
    );
}
