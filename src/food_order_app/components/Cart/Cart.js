import css from "./Cart.module.css"
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";
import CartItem from "./CartItem";
const Cart=props=>{
    const ctx=useContext(CartContext);
    const cartItems=ctx.items;
    const cartItemRemoveHandle=(id)=>{
        ctx.removeItem(id)
    }
    const cartItemAddHandle=item=>{
        ctx.addItem({
            ...item,
            amount:1
        })
    }
    return <Modal onClose={props.onHideCart}>
        <ul className={css['cart-items']}>
            {cartItems.map((item,index)=><CartItem
                key={index}
                price={item.price}
                name={item.name}
                amount={item.amount}
                onRemove={cartItemRemoveHandle.bind(null,item.id)}
                onAdd={()=>cartItemAddHandle(item)}
            />)}
        </ul>
        <div className={css.total}>
            <span>Total Amount</span>
            <span>{ctx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={css.actions}>
            <button className={css["button--alt"]} onClick={props.onHideCart}>Close</button>
            <button className={css.button}>Order</button>
        </div>
    </Modal>
}
export default Cart;