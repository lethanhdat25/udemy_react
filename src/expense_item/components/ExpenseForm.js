import '../css/ExpenseForm.css';
import {useState} from "react";
import styled from "styled-components";
const ExpenseForm=(props)=>{

    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState(0)
    const [date,setDate]=useState('')
    const submit=(event)=>{
        event.preventDefault();
        props.newExpense({
            title:title,
            amount:amount,
            date:new Date(date)
        });
        setTitle('')
        setAmount(0)
        setDate('')

    }

    const changeTitle=(event)=>{
        setTitle(event.target.value)
    }
    const changeAmount=(event)=>{
        setAmount(parseFloat(event.target.value))

    }
    const changeDate=(event)=>{
        setDate(event.target.value)

    }
    const Button=styled.button`
        color: #61dafb  !important;
    `;
    return(
        <form onSubmit={submit}>
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label>Title</label>
                    <input value={title} type={'text'}  onChange={changeTitle} required/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Amount</label>
                    <input value={amount} type={'number'} onChange={changeAmount} min={'0.01'} step={'0.01'} required/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Date</label>
                    <input value={date} type={'date'} onChange={changeDate} min={'2019-01-01'} max={'2022-12-31'} required/>
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <Button type={'submit'} >Add Expense</Button>
            </div>
        </form>
    )
}
export default ExpenseForm;