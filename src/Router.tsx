import { createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const TestContext = createContext('');

function Router(){
    return(
        <BrowserRouter>
            <TestContext.Provider value={'Teste'}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/rooms/new" component={NewRoom} />
                </Switch>
            </ TestContext.Provider>
        </BrowserRouter>
    );
}

export default Router;