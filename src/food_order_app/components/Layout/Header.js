import React, {Fragment} from "react";
import mealImg from "../../../assets/meals.jpg"
import css from "./Hearder.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{

    return(
        <Fragment>
            <header className={css["header"]}>
                <h1>Food Order</h1>
                <HeaderCartButton onClick={props.onShownCart}/>
            </header>
            <div className={css["main-image"]}>
                <img src={mealImg} alt={"A table full of delicious food"}/>
            </div>
        </Fragment>
    )
}
export default Header;