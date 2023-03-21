import ProductCard from "./ProductCard";
import styles from "../styles/storelist.module.css";

const Storelist = ( {store} ) => {
    return(
        <div className={styles.cardstyle}>
             {
               store?.map((user,i) => {
                    return(
                        <ProductCard
                        key={i}
                        image={user.image}
                        title={user.title}
                        category={user.category}
                        price={user.price}
                        />
                    );
                }) }
        </div>
    )
}

export default Storelist;