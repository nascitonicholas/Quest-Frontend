import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/home.js'
import Sala from '../pages/Sala/sala.js'
import Jogo from '../pages/Jogo/jogoPrincipal.js';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sala' component={Sala} />
                <Route path='/jogo' component={Jogo} />
            </Switch>
        </BrowserRouter>
    );
}
