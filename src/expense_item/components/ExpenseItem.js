import  '../css/ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
        return (
            <div className={'expense-item'}>
                <ExpenseDate date={props.data.date}/>
                <div className={'expense-item__description'}>
                    <h2>{props.data.title}</h2>
                    <div className="expense-item__price">{props.data.amount.toLocaleString('en-US',{
                        style:"currency",
                        currency:'USD'
                    })}</div>
                </div>
            </div>
        )
}
export default ExpenseItem;