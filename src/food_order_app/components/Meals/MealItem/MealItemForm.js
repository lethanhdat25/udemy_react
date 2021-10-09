import css from "./MealItemForm.module.css"
import Input from "../../UI/Input";
import { useRef} from "react";
const MealItemForm=(props)=>{

    const amountInputRef=useRef();
    const submitHandle=(e)=>{
        e.preventDefault();
        const enteredAmount= +amountInputRef.current.value;
        props.addHandle(enteredAmount);
    }
    return(
        <form className={css.form} onSubmit={submitHandle}>
            <Input label={"Amount"}
                   ref={amountInputRef}
                   input={{
                        id:`amount${props.id}`,
                        type:"number",
                        min:1,
                        max:5,
                        step:1,
                        defaultValue:1
            }}/>
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm;