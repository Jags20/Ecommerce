// import { useState } from "react";
import styles from "../styles/productcard.module.css";
// import { useDispatch } from "react-redux";
// import { addToBasket } from "@/store/slices/basketSlice";


const ProductCard = ({ image, price, category, title }) => {
   
    // const dispatch = useDispatch();

    // const addToCart = (store) => {
    //     // console.log(product);
    //     dispatch(addToBasket(store));
    // }

    return(
        <div className={styles.productcard}>
            <img className={styles.cardimage} src={image} alt="product"/>
            <div className={styles.parap}>
            <p className={styles.categ}>{category} </p>
            <p className={styles.title}>{title}</p>
            </div>
            <div className={styles.price}>
            <p className={styles.pricing_main}>${Math.floor(price - (price*10)/100)}</p>
            <p className={styles.pricing}><strong>$</strong>{price}</p>
            
            </div>
            {/* <div className={styles.overlay}> */}
               {/* <button className={styles.button} onClick={() => addToCart(store)} >
                 Add To Wishlist
                </button>  */}
            {/* </div> */}
            {/* <style jsx>
                {`
                img{
                    display:"grid",
                    align-self:"center",
                }`}
            </style> */}
        </div>
    )
}

export default ProductCard;