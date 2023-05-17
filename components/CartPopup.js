import React, { useState } from "react";
import styles from "@/styles/cartpopup.module.css";
import { increase, decrease } from "@/store/slices/quantSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUser, removeFromBasket } from "@/store/slices/basketSlice";
import Subtotal from "./Subtotal";
import { Close } from "@material-ui/icons";
import Link from "next/link";

// import Overlay from "./Overlay";

const CartPopup = () => {

    const dispatch = useDispatch();
    const [end, setEnd] = useState(false);

    const items = useSelector((state) => {
        return state.basket; 
    })
    console.log(items);

    const quantChange = useSelector((state) => {
        return state.quantity
    })

    const closeFunc = () => {
        setEnd(!end)
    }

    const clearUser = () => {
        dispatch(clearAllUser());
    }

    const removeFromCart = () => {
        dispatch(removeFromBasket());
    }

    const increment = (itemId) => {
        dispatch(increase(itemId));
    }

    const decrement = (itemId) => {
        dispatch(decrease(itemId));
    }

    // {if (end) {return styles['popup_main_res']}


    return(
        <div className= 
        // {styles.popup_main}
            {
            end?
                styles["popup_main"]
                // :null
                :styles["popup_main"]
            }
                >
            <div className={styles.popup_head}>
                <h1 className={styles.heading}>Your Shopping Basket</h1>
                <button onClick={() => clearUser()}>ClearAll</button>
                <Close className={styles.icon}
                onClick={() => closeFunc()}
                />
                {/* <hr/> */}
            </div>
            
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
                                <a className={styles.popup_dec} title="decrease" onClick={ () => decrement(user.id)}>
                                    <span> - </span>
                                </a>

                                <input name="quantity" type="text" value={quantChange[user.id] || 1} className={styles.popup_input}/>
                                <a className={styles.popup_incr} title="increase" onClick={ () => increment(user.id)}>
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
                <Subtotal />
                <small>
                <input type="checkbox" />
                This order contains a free gift:
                </small>
                <Link href="/checkout">
                <button className={styles.popup_btn_subt} >Proceed To Buy</button>
                </Link>
            </div>
            
        </div>
    );
}

export default CartPopup;