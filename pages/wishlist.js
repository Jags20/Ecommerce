import Layout from "@/components/Layout";
import styles from "@/styles/wishlist.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, clearAllUser } from "@/store/slices/basketSlice";
import Subtotal from "@/components/Subtotal";
import { useRouter } from "next/router";
import Image from "next/image";

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
            <div className={styles.banner}>
              <h1>Never settle for less</h1>
              <h2>Thrill is waiting for you</h2>
            </div>
            {/* <img className={styles.banner} src="https://cdn.pixabay.com/photo/2016/03/19/09/42/
            vintage-1266412_960_720.jpg" alt="banner"/> */}

            
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
            <h2 className={styles.heading}>Your Shopping Basket</h2>
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
            <hr/>
            { items.length > 0 ? (
                items.map((user, i) => {
                  return(
                    <div key={i} className={styles.sub}>
                      <Image src={user.image} height={200} width={200} alt="picc" className={styles.product_img}/>
                      {/* <img src={user.image} className={styles.product_img} alt="hujko"/> */}
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
            ) : (
              <div style={{
                color:"red",
                display:"flex",
                alignItems:"center",
                flexDirection:"column",
                justifyContent:"center",
                height:"60vh",
                margin:"1rem"
              }}>
              <h2 style={{
                fontSize:"3rem"
              }}>Your Cart is Empty</h2>
              <button style={{
                width:"60%",
                fontSize:"2rem"
              }} className={styles.product_btn_shop} 
                  onClick={ () => router.push("/product")} >
                  Continue Shopping
                </button>
              </div>
                ) }
          </div>
          </div>
        </Layout>
    )
}

export default Wishlist;