import styles from "../styles/productcard.module.css";

const ProductCard = ({ image, price, category, title }) => {
    return(
        <div className={styles.productcard}>
            <img className={styles.cardimage} src={image} alt="product" width="50%" height="50%"/>
            <p>{category} <br/>
                {title}</p>
            <p><strong>$</strong>{price}</p>
            <div className={styles.overlay}>
               <button className={styles.button}> ♡ Wishlist</button> 
            </div>
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