import { useContext, createContext } from "react";
import useAuth from "../hook/useAuth";

export const AuthManagerContext = createContext({});

const AuthManager = ({ children }) => {
    const { user, setUser, isLogin, setIsLogin, loading } = useAuth();
    return (
        <AuthManagerContext.Provider
            value={{
                user,
                setUser,
                isLogin,
                setIsLogin,
                loading,
                publicPath: "/login",
                privatePath: "/",
            }}
        >
             {!loading && children}
        </AuthManagerContext.Provider>
    );
};

export const useContextAuthManager = () => {
    return useContext(AuthManagerContext);
};

export default AuthManager;