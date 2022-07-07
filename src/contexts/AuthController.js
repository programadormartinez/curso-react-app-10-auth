import { createContext, useContext } from "react";


export const AuthContext = createContext()
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

const AuthControllerProvider = ({children}) => {
    const user = {
        login: true,
    }
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthControllerProvider;