import Layout from "@/components/Layout";
import styles from "@/styles/wishlist.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, clearAllUser, increase, decrease} from "@/store/slices/basketSlice";
import Subtotal from "@/components/Subtotal";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

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

  const decrement = (itemId) => {
    dispatch(decrease(itemId));
  }

  const increment = (itemId) => {
      dispatch(increase(itemId));
  }

  const buy = ()  => {
            router.push("/checkout")
  }


    return (
        <Layout>
          {/* <WishlistProduct/>          */}
          <div className={styles.wishlist}>
          <div className={styles.list}>
            <div className={styles.banner}>
              <h1>Never settle for less</h1>
              <h2>Thrill is waiting for you</h2>
            </div>
            
            <div className={styles.cart}>
              {items.length > 0 &&
              //  (
              //   <>
              //   <h1>Add the items</h1>
              //     <button className={styles.product_btn_shop} onClick={ () => router.push("/product")}>
              //       Continue Shopping
              //     </button>
              //   </>
              //   ):
                     (
                      <>
                        <p>Subtotal <strong>({items.length} items):</strong> </p>
                        <Subtotal/>
                        <small>
                        <input type="checkbox" />
                        This order contains a free gift:
                        </small>
                        <button className={styles.product_btn_subt} onClick={() =>buy()} >Proceed To Buy</button>
                      </>
                    )  
              }
            
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.basket}>
            <h2 className={styles.heading}>Order Summary</h2>
            {items.length > 0 && 
              ( 
                <button className={styles.product_btn_shop} 
                  onClick={ () => router.push("/product")} >
                  Continue Shopping
                </button>
              )
              }
            
            {/* <button onClick={() => clearCart()} className={styles.btnn}>Clear cart</button> */}
            </div>
            <hr className={styles.line}/>
            { items.length > 0 ? (
                items.map((user, i) => {

                  let originalPrice = user.price * user.quantity;
                  let discountedPrice = originalPrice - (originalPrice*10)/100;
                  
                  return(
                    <div key={i} className={styles.sub}>
                      <Link href={`/products/${user.id}`}>
                      <Image src={user.image} height={200} width={200} alt="picc" className={styles.product_img}/>
                      </Link>
                      {/* <img src={user.image} className={styles.product_img} alt="hujko"/> */}
                      <div className={styles.sub1}>
                        <div className={styles.para}>
                      <p className={styles.title}>{user.title}</p>
                      {/* <p>Quantity:{user.quantity}</p> */}
                      <p className={styles.price}>
                        <small>$</small>
                        <strong className={styles.discount}>{discountedPrice.toFixed(2)} </strong>
                        <small className={styles.oldPrice}>$ {originalPrice}</small>
                      </p>

                      <div className={styles.modal_quantity}>
                          <a className={styles.modal_dec} title="decrease" onClick={ () => decrement(user.id)}>
                              <span className={styles.modal_quant}> - </span>
                          </a>
                          <input name="quantity" type="text" value={user.quantity} className={styles.modal_input} readOnly/>
                          <a className={styles.modal_incr} title="increase" onClick={ () => increment(user.id)}>
                              <span className={styles.modal_quant}> + </span>
                          </a>
                      </div>
                      
  
                      </div>
                      {/* <CartPopup/> */}
                      <button className={styles.product_btn} onClick={ () => delUser(i)}>
                        Remove
                      </button>
                      </div>
                    </div>
                  );
                })
            ) : (
              <div className={styles.empty_cart}>
              <h2 className={styles.empty_cart_heading}>Your Cart is Empty</h2>
              <button className={styles.empty_cart_button} 
                  onClick={ () => router.push("/product")} >
                  Continue Shopping
                </button>
              </div>
                ) }
          </div>
          <div className={styles.cart_final}>
              {items.length > 0 &&
                     (
                      <>
                        <p>Subtotal <strong>({items.length} items):</strong> </p>
                        <Subtotal/>
                        <small>
                        <input type="checkbox" />
                        This order contains a free gift:
                        </small>
                        <button className={styles.product_btn_subt} onClick={() =>buy()} >Proceed To Buy</button>
                      </>
                    )  
              }
            
            </div>
          </div>
        </Layout>
    )
}

export default Wishlist;