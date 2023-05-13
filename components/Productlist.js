import Card from "./Card";
import styles from "../styles/productlist.module.css";

const Productlist = ( {product} ) => {
    return(
        <div className={`${styles["card"]} ${styles["grid"]}`} >
            {/* using two className here card & grid */}
            {
               product?.map((user,i) =>{
                    return(
                        <Card
                        key={i}
                        image={user.image}
                        cat={user.category}
                        pri={user.price}
                        />
                    );
                }) }
            
        </div>
    )
}

export default Productlist;