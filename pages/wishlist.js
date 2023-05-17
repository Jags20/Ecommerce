import Layout from "@/components/Layout";
import styles from "@/styles/wishlist.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, clearAllUser } from "@/store/slices/basketSlice";
import Subtotal from "@/components/Subtotal";
import { useRouter } from "next/router";

const Wishlist = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const items = useSelector((state) => {
    return state.basket;
  });


  const delUser = (id) => {
    dispatch(removeFromBasket(id));
  }


  const clearCart = () => {
    dispatch(clearAllUser());
  }

  const buy = ()  => {
            router.push("/checkout")
  }


    return (
        <Layout>
          {/* <WishlistProduct/>          */}
          <div className={styles.wishlist}>
          <div className={styles.list}>
            <img className={styles.banner} src="https://cdn.pixabay.com/photo/2016/03/19/09/42/
            vintage-1266412_960_720.jpg" alt="banner"/>

            <div className={styles.cart}>
            <p>Subtotal <strong>({items.length} items):</strong> </p>
            <Subtotal/>
            <small>
            <input type="checkbox" />
            This order contains a free gift:
            </small>
            <button className={styles.product_btn_subt} onClick={() =>buy()} >Proceed To Buy</button>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.basket}>
            <h2 className={styles.heading}>Your Shopping Basket</h2>
            <button className={styles.product_btn} onClick={ () => router.push("/product")}>Continue Shopping</button>
            <button onClick={() => clearCart()} className={styles.btnn}>Clear cart</button>
            </div>
            <hr/>
            {
              items.map((user, i) => {
                return(
                  <div key={i} className={styles.sub}>
                    <img src={user.image} className={styles.product_img} alt="hujko"/>
                    <div className={styles.sub1}>
                      <div className={styles.para}>
                    <p className={styles.title}>{user.title}</p>
                    <p className={styles.price}>
                      <small>$</small>
                      <strong>{Math.floor(user.price - (user.price*10)/100)} </strong>
                      <small className={styles.oldPrice}>${user.price}</small>
                    </p>
                    

                    </div>
                    {/* <CartPopup/> */}
                    <button className={styles.product_btn} onClick={ () => delUser(i)}>
                      Remove
                    </button>
                    </div>
                  </div>
                );
              })
            }
          </div>
          </div>
        </Layout>
    )
}

export default Wishlist;