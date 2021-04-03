import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/index'
import Sala from '../pages/Sala/index'
import Jogo from '../pages/Jogo/jogoPrincipal';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sala' exact component={Sala} />
                <Route path='/jogo' exact component={Jogo} />
            </Switch>
        </BrowserRouter>
    );
}
