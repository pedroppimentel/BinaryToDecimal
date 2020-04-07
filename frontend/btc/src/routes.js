import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import btcCalc from './pages/btcCalc';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ btcCalc } />
            </Switch>
        </BrowserRouter>
    );
}