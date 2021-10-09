import React, {useState} from "react";

const AuthContext = React.createContext({
    isLogin: false,
})
export const AuthProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const loginHandler = () => {
        setIsLogin(true);
    }
    const logoutHandler = () => {
        setIsLogin(false)
    }
    return (<AuthContext.Provider value={{
        isLogin,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }}>
        {props.children}
    </AuthContext.Provider>)
}
export default AuthContext;