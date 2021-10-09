import Header from "./components/Layout/Header";
import {useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "../store/CartProvider";

function App (){
    const [cartIsShown,setCartIsShown]=useState(false);
    const shownCartHandle=()=>{
        setCartIsShown(true)
    }
    const hideCartHandle=()=>{
        setCartIsShown(false);
    }
    return(
        <CartProvider>
            {cartIsShown && <Cart onHideCart={hideCartHandle}/>}
            <Header onShownCart={shownCartHandle}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    )
}
export default App;