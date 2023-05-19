// import { Close } from "@material-ui/icons";
import CloseIcon from '@mui/icons-material/Close';
// import { CloseReason } from '@mui/material';
import styles from "@/styles/modal.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase, decrease } from "@/store/slices/quantSlice";
import { removeFromBasket, clearAllUser } from "@/store/slices/basketSlice";
import Subtotal from "./Subtotal";
import Link from "next/link";
import Image from 'next/image';

const Modal = ( {setIsOpen}) => {

    const dispatch = useDispatch();

    const items = useSelector( (state) => {
        return state.basket;
    })

    const removeFromCart = (itemId) => {
        dispatch(removeFromBasket(itemId));
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
                    {/* <button onClick={() => clearUser()}>ClearAll</button> */}
                    <button className={styles.iconButton} onClick={ () => setIsOpen(false)}>
                    <CloseIcon className={styles.icon}/>
                    </button>
                </div>

                { items.length === 0 ? (
                    <h1 style={{
                        textAlign:"center",
                        color:"grey",
                        fontWeight:"600",
                        textTransform:"uppercase",

                    }}>Your Cart is Empty</h1>
                ) : (
                        items?.map((user, id) => {
                            return (
                                <div key={id} className={styles.modal_card}>
                                    <Image className={styles.modal_img} src={user.image} width={250} height={280} alt="product"/>
                                    {/* <img className={styles.modal_img} src={user.image} width="30%" alt="product"/> */}
                                    <div className={styles.modal_el}>
                                    <div className={styles.modal_para}>
                                        <p className={styles.modal_title}>{user.title}</p>
                                        <p>Quantity:{user.quantity}</p>
                                        <p className={styles.modal_price}><strong>$ {user.price*user.quantity}</strong></p>
                                    </div>

                                    <div className={styles.modal_quantity}>
                                        <a className={styles.modal_dec} title="decrease" onClick={ () => decrement(user.id)}>
                                            <span className={styles.modal_quant}> - </span>
                                        </a>

                                        <input name="quantity" type="text" value={quantChange[user.id] || 1} className={styles.modal_input} readOnly/>
                                        <a className={styles.modal_incr} title="increase" onClick={ () => increment(user.id)}>
                                            <span className={styles.modal_quant}> + </span>
                                        </a>
                                    </div>

                                    <button className={styles.modal_remove} onClick={() => removeFromCart(id)}>
                                        Remove
                                    </button>
                                    </div>
                                </div>
                            );
                        })
                    )
                }

                {items.length > 0 && (
                    <div className={styles.modal_cart}>
                        <div className={styles.modal_innerCart}>
                            <div>
                                <p style={{
                                    marginBottom:"0"
                                }}>Subtotal <strong>({items.length} items):</strong> </p>
                                <Subtotal />
                            </div>
                            <div>
                                <button className={styles.modal_clear} onClick={() => clearUser()}>Clear All</button>
                            </div>
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
                    )
                }
                
            </div>
        </>
    );
}

export default Modal;