import {useContext} from "react";
import AuthContext from "../store/auth-context";

const Home=()=>{
    const ctx=useContext(AuthContext);
    console.log("q"+ctx)
    return(
        <>
            <button onClick={ctx.onLogout}>Logout</button>
            <h1>Welcome</h1>
        </>
    )
}
export default Home;