import { createContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const AuthContext = createContext({} as any);

function Router(){

    const[user, setUser] = useState(); // tempo 1:07

    return(
        <BrowserRouter>
            <AuthContext.Provider value={{user, setUser}}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/rooms/new" component={NewRoom} />
                </Switch>
            </ AuthContext.Provider>
        </BrowserRouter>
    );
}

export default Router;