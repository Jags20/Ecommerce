import React from "react";
import styles from "@/styles/cartpopup.module.css";
import { increase, decrease } from "@/store/slices/quantSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUser, removeFromBasket } from "@/store/slices/basketSlice";
import Subtotal from "./Subtotal";

const CartPopup = () => {

    const dispatch = useDispatch();

    const items = useSelector((state) => {
        return state.basket;
    })

    const quantChange = useSelector((state) => {
        return state.quantity
    })

    const removeFromCart = () => {
        dispatch(removeFromBasket());
    }

    const increment = () => {
        dispatch(increase());
    }

    const decrement = () => {
        dispatch(decrease());
    }

    return(
        <div className={styles.popup_main}>
            <h1 className={styles.heading}>Your Shopping Basket</h1>
            <hr/>
            {
                items.map((user,id) => {
                    return (
                        <div key={id} className={styles.popup_card}>
                            <img className={styles.popup_img} src={user.image} width="30%" alt="product"/>
                            <div className={styles.popup_el}>
                            <div className={styles.popup_para}>
                                <p className={styles.popup_title}>{user.title}</p>
                                <p className={styles.popup_price}><strong>{user.price}</strong></p>
                            </div>

                            <div className={styles.popup_quantity}>
                                <a className={styles.popup_dec} title="decrease" onClick={ () => increment()}>
                                    <span> - </span>
                                </a>

                                <input name="quantity" type="text" value={quantChange} className={styles.popup_input}/>
                                <a className={styles.popup_incr} title="increase" onClick={ () => decrement()}>
                                    <span> + </span>
                                </a>
                            </div>
                            <button className={styles.popup_remove} onClick={() => removeFromCart()}>
                                Remove
                            </button>
                            
                            </div>
                        </div>
                        );
                    })
            }
            
            

            <div className={styles.popup_cart}>
                <p>Subtotal <strong>({items.length} items):</strong> </p>
                <Subtotal/>
                <small>
                <input type="checkbox" />
                This order contains a free gift:
                </small>
                <button className={styles.popup_btn_subt} >Proceed To Buy</button>
            </div>
            
        </div>
    );
}

export default CartPopup;