import '../css/NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
    const sendData=(data)=>{
        props.newExpense(data)
    }
    return (
        <div className={'new-expense'}>
            <ExpenseForm newExpense={sendData}/>
        </div>
    )
};
export default NewExpense;