import css from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../../store/cart-context";
const MealItem = (props) => {
    const ctx=useContext(CartContext);
    const addHandle=(amount)=>{
        ctx.addItem({
            id:props.id,
            amount,
            name:props.name,
            price:props.price,
            description:props.description
        })
    }
    const price=`$${props.price.toFixed(2)}`
    return(
        <li className={css.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={css.description}>{props.description}</div>
                <div className={css.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} addHandle={addHandle}/>
            </div>
        </li>
    )
}
export default MealItem;