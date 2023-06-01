import { useSelector } from "react-redux";
import styles from "@/styles/subtotal.module.css";

const Subtotal = () => {

    const total = useSelector((state)=> {
        return state.basket
    });

    const totalPrice = total.reduce((acc, user) => {
        return acc + (user.price*user.quantity);
      }, 0);

      let originalPrice = totalPrice - (totalPrice*10)/100;
      let savedAmout = totalPrice- originalPrice;

    return(
        <div>
            <p className={styles.sub_total}
                >Total: $
                <strong>{originalPrice.toFixed(2)}</strong>
            </p>
            <p className={styles.sub_saved}
                >you saved: ${savedAmout.toFixed(2)}
            </p>
        </div>
    );
}

export default Subtotal;