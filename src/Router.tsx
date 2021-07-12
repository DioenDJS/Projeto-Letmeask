import {auth, firebase} from './services/firebase';
import { createContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

type User = {
    id: string,
    name: string,
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

function Router(){

    const[user, setUser] = useState<User>(); 

    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();

            auth.signInWithPopup(provider).then(result => {
                if(result.user){
                    const { displayName, photoURL, uid} = result.user

                    if(!displayName || !photoURL){
                        throw new Error('Missing information from Google Account.');
                    }

                    setUser({
                        id: uid,
                        name: displayName,
                        avatar: photoURL
                    })
                }    
            });

    }

    return(
        <BrowserRouter>
            <AuthContext.Provider value={{user, signInWithGoogle}}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/rooms/new" component={NewRoom} />
                </Switch>
            </ AuthContext.Provider>
        </BrowserRouter>
    );
}

export default Router;