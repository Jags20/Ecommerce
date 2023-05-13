import ProductCard from "./ProductCard";
import styles from "../styles/storelist.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/store/slices/basketSlice";
// import { useRouter } from "next/router";
import CartPopup from "./CartPopup";
import { useState } from "react";

const Storelist = ( {store} ) => {

    const [popup , setPopup] = useState(false);
// console.log(store);
    // const router = useRouter();
    const dispatch = useDispatch();

    const addToCart = (user) => {
        dispatch(addToBasket(user));
        // router.push("/wishlist");
        
    }
    const pop = () => {
        setPopup(!popup)
    }

    return(
        <div className={styles.cardstyle}>
             {
                    store?.map((user,i) => {
                        // console.log(arr);
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
                            pop();
                        } }>
                            Add To Cart
                        </button>
                        </div>
                    );
                }) }
                
            <div className={
                popup ? styles ['cartpopup_ch']: styles ["cartpopup"]
            }>
                <CartPopup className={styles.cartpopup_sub}/>
            </div>

        </div>
    )
}

export default Storelist;