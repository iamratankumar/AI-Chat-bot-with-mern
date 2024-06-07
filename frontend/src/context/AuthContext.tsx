
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {authUser, loginUser} from "../service/APIs.tsx";


type User = {
    name: string;
    email: string;
}
type UserAuthContext = {
    isLoggedIn: boolean;
    user: User| null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: ()=> Promise<void>;
}
const AuthContext = createContext<UserAuthContext| null>(null);

export const AuthProvider = ({ children }:{children:ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        (async()=>{
            const data = await authUser();
            if(data){
                setUser({name:data.name, email: data.email});
                setIsLoggedIn(true);
            }
        })();
    }, []);

    const login = async (email: string, password: string) => {
        const data = await loginUser(email, password);
        if(data){
            setUser({name:data.name, email: data.email});
            setIsLoggedIn(true);
        }
    };
    const register = async (email: string, password: string) => {}
    const logout = async () =>{};

    const data= {
        user,
        isLoggedIn,
        login,
        register,
        logout
    }
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export const userAuth = ()=> useContext(AuthContext);