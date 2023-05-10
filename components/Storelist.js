import ProductCard from "./ProductCard";
import styles from "../styles/storelist.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/store/slices/basketSlice";

const Storelist = ( {store} ) => {

    const dispatch = useDispatch();

    const addToCart = (user) => {
        // let btn = document.getElementById("chng")
        dispatch(addToBasket(user));
        // btn.innerHTML= "Added";
    }

    return(
        <div className={styles.cardstyle}>
             {
               store?.map((user,i) => {
                    return(
                        <div key={i}>
                        <ProductCard
                        key={i}
                        id={user.id}
                        image={user.image}
                        title={user.title}
                        category={user.category}
                        price={user.price}
                        />
                        <button className={styles.button} onClick={() => addToCart(user)}>
                            Add To Cart
                        </button>
                        </div>
                    );
                }) }
        </div>
    )
}

export default Storelist;