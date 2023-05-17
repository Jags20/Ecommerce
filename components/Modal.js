import { Close } from "@material-ui/icons";
import styles from "@/styles/modal.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase, decrease } from "@/store/slices/quantSlice";
import { removeFromBasket, clearAllUser } from "@/store/slices/basketSlice";
import Subtotal from "./Subtotal";
import Link from "next/link";

const Modal = ( {setIsOpen}) => {

    const dispatch = useDispatch();

    const items = useSelector( (state) => {
        return state.basket;
    })

    const removeFromCart = () => {
        dispatch(removeFromBasket());
    }

    const clearUser = () => {
        dispatch(clearAllUser());
    }

    const quantChange = useSelector( (state) => {
        return state.quantity;
    })

    const decrement = (itemId) => {
        dispatch(decrease(itemId));
    }
    
    const increment = (itemId) => {
        dispatch(increase(itemId));
    }


    return (
        <>
            <div className={styles.overlay} 
            onClick={ () => setIsOpen(false) }>
            </div>

            <div className={styles.modal_main}>
                <div className={styles.modal_head}>
                    <h1 className={styles.heading}>Your Shopping Basket</h1>
                    <button onClick={() => clearUser()}>ClearAll</button>
                    <button onClick={ () => setIsOpen(false)}>
                    <Close className={styles.icon}/>
                    </button>
                </div>

                {items?.map((user, id) => {
                    return (
                        <div key={id} className={styles.modal_card}>
                            <img className={styles.modal_img} src={user.image} width="30%" alt="product"/>
                            <div className={styles.modal_el}>
                            <div className={styles.modal_para}>
                                <p className={styles.modal_title}>{user.title}</p>
                                <p className={styles.modal_price}><strong>$ {user.price}</strong></p>
                            </div>

                            <div className={styles.modal_quantity}>
                                <a className={styles.modal_dec} title="decrease" onClick={ () => decrement(user.id)}>
                                    <span> - </span>
                                </a>

                                <input name="quantity" type="text" value={quantChange[user.id] || 1} className={styles.modal_input}/>
                                <a className={styles.modal_incr} title="increase" onClick={ () => increment(user.id)}>
                                    <span> + </span>
                                </a>
                            </div>

                            <button className={styles.modal_remove} onClick={() => removeFromCart()}>
                                Remove
                            </button>
                            </div>
                        </div>
                    );
                })
                }
                <div className={styles.modal_cart}>
                    <div style={{
                        marginLeft:"1rem",
                    }}>
                        <p style={{
                            marginBottom:"0"
                        }}>Subtotal <strong>({items.length} items):</strong> </p>
                        <Subtotal />
                    </div>
                    <small style={{
                        fontSize:"0.7rem",
                    }}>
                    <input type="checkbox" style={
                        {
                            marginLeft:"1rem",
                        }
                    } />
                    This order contains a free gift:
                    </small>
                    <div>
                        <Link href="/checkout">
                        <button className={styles.modal_btn_buy} >Proceed To Buy</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;