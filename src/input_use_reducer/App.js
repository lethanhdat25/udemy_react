import Login from "./component/Login";
import Home from "./component/Home";
import {useContext} from "react";
import AuthContext from "./store/auth-context";
import React from "react";

function App(){
    const ctx=useContext(AuthContext);
    return(
        <React.Fragment>
            {!ctx.isLogin && <Login/>}
            {ctx.isLogin && <Home/> }
        </React.Fragment>
    )
}
export default App;
