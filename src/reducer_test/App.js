import {useEffect, useReducer, useState} from "react";
import css from './css/input.module.css';
function App(){

    const reducerEmail=(state,action)=>{
        switch (action.type) {
            case "changeEmail":{
                return {
                    value:action.val,
                    isValid:action.val.includes("@")
                }
            }
            default :
                throw new Error();
        }
    };
    const reducerPassword=(state,action)=>{
        switch (action.type) {
            case "changePassword":{
                return {
                    value:action.val,
                    isValid:action.val.trim().length>6
                }
            }
            default :
                throw new Error();
        }
    };
    const [emailState,dispatchEmail]=useReducer(reducerEmail,{
        value:'',
        isValid: null
    });
    const [passwordState,dispatchPassword]=useReducer(reducerPassword,{
        value:'',
        isValid: null
    });
    const {isValid: emailValid}=emailState;
    const {isValid: passwordValid}=passwordState;
    const [isfromValid,setformValid]=useState(false);

    useEffect(()=>{
      const timer =setTimeout(()=>{
            setformValid(emailValid && passwordValid)
      },500)
        return ()=>{
          clearTimeout(timer)
        }
    },[emailValid,passwordValid])
    const clickShow =()=>{
        console.log(emailState.value)
        console.log(emailState.isValid)
    };
    const changeEmail=(event)=>{
        dispatchEmail({
            type:"changeEmail",
            val:event.target.value
        })
    }
    const changePassword=(event)=>{
        dispatchPassword({
            type:"changePassword",
            val:event.target.value
        })
    }
return(
    <div className={emailValid===false?css.control:""}>
        <input type={"email"} placeholder={"EMAIL"} onChange={changeEmail} className={css.email}/>
        <input type={"password"} placeholder={"PASSWORD"}  onChange={changePassword}/>
        <button onClick={clickShow} disabled={!isfromValid}>CLick</button>
        <h1>{emailState.value}</h1>
    </div>
)
}
export default App;