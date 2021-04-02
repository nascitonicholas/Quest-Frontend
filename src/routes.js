import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/index'
import Sala from './Pages/Sala/index'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sala' exact component={Sala} />
            </Switch>
        </BrowserRouter>
    );
}
