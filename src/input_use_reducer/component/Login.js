import {useContext, useEffect, useReducer, useRef, useState} from "react";
import AuthContext from "../store/auth-context";
import Input from "./Input";

const emailReducer=(state,action)=>{
    switch (action.type){
        case "USER_INPUT":{
            return{
                name:action.val,
                isValid:action.val.trim().includes("@")
            }
        }
        default: {
            return{
                name:"",
                isValid:false
            }
        }
    }
};
const passwordReducer=(state,action)=>{
    switch (action.type){
        case "USER_PASSWORD":{
            return {
                password:action.val,
                isValid:action.val.trim().length>6
            }
        }
        default: {
            return {
                password:"",
                isValid:false
            }
        }
    }
}

const Login=()=>{
    const ctx=useContext(AuthContext);
    const [emailState,dispatchEmail]=useReducer(emailReducer,{
        name:"",
        isValid:null
    });

    const [passwordState,dispatchPassword]=useReducer(passwordReducer,{
        password:"",
        isValid:null
    });

    const [formIsValid,setFormIsValid]=useState(null);

    const emailRef=useRef();
    const passwordRef=useRef();

    useEffect(()=>{
        console.log("email: "+emailState.isValid)
        console.log("pass: "+passwordState.isValid)
        setFormIsValid(emailState.isValid && passwordState.isValid);
        console.log("form: "+formIsValid);
    },[passwordState.isValid,emailState.isValid])

    const emailChangeHandler=(event)=>{
        dispatchEmail({type:"USER_INPUT",val:event.target.value})
    }

    const passwordChangeHandler=(event)=>{
        dispatchPassword({type:"USER_PASSWORD",val:event.target.value})
    }

    const submitForm=(event)=>{
        event.preventDefault();
        console.log("click: "+formIsValid);
        console.log(ctx.isLogin)
        if (formIsValid){
            ctx.onLogin();
        }else if(!emailState.isValid){
            emailRef.current.focus();
        }else {
            passwordRef.current.focus();
        }
    }

    return(
        <>
            <form onSubmit={submitForm}>
                <Input id="email"
                       ref={emailRef}
                       label="E-Mail"
                       type="email"
                       isValid={emailState.isValid}
                       value={emailState.value}
                       onChange={emailChangeHandler}/>
                <Input id="password"
                       ref={passwordRef}
                       label="Password"
                       type="password"
                       isValid={passwordState.isValid}
                       value={passwordState.value}
                       onChange={passwordChangeHandler}/>
                <button type={"submit"}>Button</button>
            </form>
        </>
    )
};
export default Login;