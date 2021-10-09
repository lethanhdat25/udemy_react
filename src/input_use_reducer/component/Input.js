import React, {useImperativeHandle, useRef} from "react";
import css from "../css/Input.module.css"
const Input=React.forwardRef((props,ref)=>{

    const inputRef=useRef();

    const as=()=>{
        console.log(inputRef.current)
        inputRef.current.className="Input_notValid__3_X8c";
        inputRef.current.focus();
    }
    useImperativeHandle(ref,()=>{
        return{
            focus:as
        }
    })
    return(
        <>
        <input className={props.isValid===false?css.notValid:null} ref={inputRef}

               id={props.id}
               onChange={props.onChange}/>

        </>
    )
})
export default Input;