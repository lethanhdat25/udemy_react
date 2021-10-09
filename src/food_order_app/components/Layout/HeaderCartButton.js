import CartIcon from "../Cart/CartIcon";
import css from "./HeaderCartButton.module.css"
import {useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const numberOfCartItems = ctx.items.reduce((curNumber, item) => curNumber + item.amount, 0);
    useEffect(() => {
        if (numberOfCartItems === 0) return ;
        setBtnIsHighlighted(true)
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)
        return ()=>{
            clearTimeout(timer)
        };
    }, [numberOfCartItems])
    const btnClasses = `${css.button} ${btnIsHighlighted ? css.bump : ""}`;
    return <button className={btnClasses} onClick={props.onClick}>
        <span className={css["icon"]}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={css["badge"]}>{numberOfCartItems}</span>
    </button>
}
export default HeaderCartButton;