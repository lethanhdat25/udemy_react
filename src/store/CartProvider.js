import CartContext from "./cart-context";
import {useReducer} from "react";

const cartReducer=(state,action)=>{
    switch (action.type){
        case "Add":{
            const updatedTotalAmount = state.totalAmount+action.item.amount*action.item.price;
            const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
            let updatedItem;
            let updatedItems;
            if (existingCartItemIndex!==-1){
                updatedItem={
                    ...(state.items[existingCartItemIndex]),
                    amount:action.item.amount+state.items[existingCartItemIndex].amount
                }
                updatedItems=[...state.items];
                updatedItems[existingCartItemIndex]=updatedItem
            }
            else {
                 updatedItems = state.items.concat(action.item);
            }
            return{
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        case "Remove":{
            const existingCartItemIndex= state.items.findIndex(item=>item.id===action.id);
            const existingCartItem=state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount-existingCartItem.price;
            let updatedItems;
            if(existingCartItem.amount===1){
                updatedItems=state.items.filter(item=>item.id!==action.id)
            }else{
                const updatedItem={...existingCartItem,amount: existingCartItem.amount-1}
                updatedItems=[...state.items];
                updatedItems[existingCartItemIndex]=updatedItem
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        default :{
            return  defaultCartState;
        }
    }
}
const defaultCartState={
    items: [],
    totalAmount: 0
}
const CartProvider=(props)=>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    const addItemHandle=(item)=>{
        dispatchCartAction({
            type:"Add",
            item
        })
    }
    const removeItemHandle=(id)=>{
        dispatchCartAction({
            type:"Remove",
            id
        })
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandle,
        removeItem:removeItemHandle
    }
        return(
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        )

};
export default CartProvider;