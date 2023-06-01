import ProductCard from "./ProductCard";
import styles from "../styles/storelist.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/store/slices/basketSlice";
// import { useRouter } from "next/router";
// import CartPopup from "./CartPopup";
import { useState } from "react";
import Modal from "./Modal";
// import Overlay from "./Overlay";

const Storelist = ( {store} ) => {

    const [isOpen , setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const addToCart = (user) => {
        dispatch(addToBasket(user));
    }

    // const modal = () => {
    //     setIsOpen(true)
    // }

    return(
        <div className={styles.cardstyle}>
             {
                    store?.map((user,i) => {
                        // console.log(user);
                    return(
                        <div key={i} className={styles.card}>
                            <ProductCard
                            key={i}
                            id={user.id}
                            image={user.image}
                            title={user.title}
                            category={user.category}
                            price={user.price}
                            />
                            <button className={styles.button} onClick={() => {
                                addToCart(user);
                                // modal();
                                setIsOpen(true);
                            } }>
                                Add To Cart
                            </button>
                        </div>  
                    );
                }) 
            }
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Storelist;