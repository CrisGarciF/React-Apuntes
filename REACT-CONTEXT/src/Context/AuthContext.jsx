import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = null;

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = () => {
        if(auth){
            setAuth(null)
        }else{
            setAuth(true)
        }
    };

    const data = {handleAuth, auth};

    return <AuthContext.Provider value={data} > {children} </AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;