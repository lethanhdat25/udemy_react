import ExpenseItem from "./components/ExpenseItem";
import {useState} from "react";
import NewExpense from "./components/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter";
import ExpenseChart from "./components/ExpenseChart";

function App() {
    const [expense,setExpense] = useState([
        {
            title:'asd',
            date:new Date(),
            amount:249
        },
        {
            title:'asdasdasdasd',
            date:new Date(2020,0,24),
            amount:250
        }
    ]);
    const newExpense=(expense)=>{
        setExpense((prevExpense)=>{
            return [expense,...prevExpense]
        })
    }
    const [selected,setSelected]=useState(new Date().getFullYear());
    const onChangeFilter=(data)=>{
        setSelected(data)
    }
    const filteredExpenses=expense.filter(expense=>expense.date.getFullYear()===selected);

    const expensesContent = filteredExpenses.length<=0 ? <p>No expenses found.</p> :(
        filteredExpenses.map((value,i)=>{
            if (value.date.getFullYear()===selected){
                return (
                    <ExpenseItem data={value}  key={i}/>
                )
            }
            return true;
        })
    );
    return (
        <div className={'expenses'}>
            <NewExpense newExpense={newExpense}>
            </NewExpense>
            <ExpensesFilter selected={selected} onChangeFilter={onChangeFilter}/>
            <ExpenseChart expenses={filteredExpenses}/>
            {expensesContent}
        </div>
    );
}

export default App;
