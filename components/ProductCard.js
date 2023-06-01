// import { useState } from "react";
import styles from "../styles/productcard.module.css";
import Image from "next/image";
import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { addToBasket } from "@/store/slices/basketSlice";


const ProductCard = ({ image, price, category, title, id }) => {
   
    // const dispatch = useDispatch();

    // const addToCart = (store) => {
    //     // console.log(product);
    //     dispatch(addToBasket(store));
    // }

    let discountedPrice = price - (price*10)/100;

    return(
        <div className={styles.productcard}>
            <Link href={`../products/${id}`}>
            <Image src={image} height={200} width={200} alt="product" className={styles.cardimage}/>
            </Link>
            {/* <img className={styles.cardimage} src={image} alt="product"/> */}
            <div className={styles.parap}>
            <p className={styles.categ}>{category} </p>
            <p className={styles.title}>{title}</p>
            </div>
            <div className={styles.price}>
            <p className={styles.pricing_main}>${discountedPrice.toFixed(2)}</p>
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