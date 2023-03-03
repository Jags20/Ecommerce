import Card from "./Card";
import styles from "../styles/productlist.module.css";

const Productlist = ( {items} ) => {
    return(
        <div className={`${styles["card"]} ${styles["grid"]}`} >
            {/* using two className here card & grid */}
            {
               items?.map((user,i) =>{
                    return(
                        <Card
                        key={i}
                        image={user.image}
                        category={user.category}
                        price={user.price}
                        />
                    );
                }) }
            
        </div>
    )
}

export default Productlist;