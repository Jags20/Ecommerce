import styles from "../styles/productcard.module.css";

const ProductCard = ({ image, price, category, title }) => {
    return(
        <div className={styles.productcard}>
            <img className={styles.cardimage} src={image} alt="product"/>
            <div className={styles.parap}>
            <p className={styles.categ}>{category} </p>
            <p className={styles.title}>{title}</p>
            </div>
            <p><strong>$</strong>{price}</p>
            {/* <div className={styles.overlay}> */}
               <button className={styles.button}> ♡ Wishlist</button> 
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