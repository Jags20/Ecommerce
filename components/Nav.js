import React  from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css"
import AuthDetails from "./AuthDetails";
// import { Close, Menu, Search, ShoppingBasket } from "@material-ui/icons";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from "react-redux";
import { useState } from "react";

const Nav = () => {

    
    const [menu, setMenu] = useState(false);

    const count = useSelector((state) => {
        return state.basket;
    })

    const handleMenuClick = () => {
        setMenu(!menu);
      };
    
    return (
        <div className={styles.myNav}>
            <div className={styles.toggle}>
                <Link href="/">
                <img className={styles.myNav_logo} src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
                alt="logo" width="70px"/>
                </Link>

                <div 
                className={
                    // menu is true title_mob class is applied
                    menu
                    ? styles["myNav_title_mob"]
                    : styles["myNav_title"]
                        }
                >
                    <Link href="/" legacyBehavior>
                        <a className={styles.myNav_home}>Home</a>
                    </Link>

                    <Link href="/product" legacyBehavior>
                        <a className={styles.myNav_home}>Product</a>
                    </Link>
                    
                    <Link href="/product" legacyBehavior>
                        <a className={styles.myNav_home}>Items</a>
                    </Link>
                    </div>
                <div>
                    <a className={styles.toggle_btn} onClick={() => handleMenuClick()}>
                        {/* menu is true then close icon is visible */}
                        {menu ?
                         <CloseIcon className={styles.icon} /> : 
                         <MenuIcon className={styles.icon} />}
                    </a>
                </div>

            {/* <div className={styles.check}> */}
          
            {/* </div> */}
            </div>
            
            
            <div className={styles.myNav_search}>
                <input className={styles.myNav_searchInput}
                placeholder="search the store" 
                type="text"
                />
                <Link href="/error">
                <SearchIcon className={styles.myNav_icon}/>
                </Link>
            </div>



            <div className={styles.myNav_rightTitle}>
                <Link href='/profile' legacyBehavior>
                    {/* two classname */}
                    {/* className={`${styles["card"]} ${styles["grid"]}`} */}
                    <a className={styles.myNav_home1} >Profile</a>
                </Link>

                <Link href='/wishlist' legacyBehavior>
                    {/* <a className={styles.myNav_home}>Cart */}
                    <ShoppingBasketIcon className={styles.myNav_iconBasket} />
                     {/* </a> */}
                </Link>
               
               <a className={styles.myNav_count}>{count.length}</a> 
               
             </div>

             <AuthDetails/>
        </div>
        
// {/* Scoped css */}
//             <style jsx>{`
//             a{
//                 padding: 10px;
//                 color: Black;
//                 text-decoration:none;
//                 margin: 5px;
//                 margin-top: 5px;
//             }
//             a:hover{
//                 border-bottom: 2px solid orange;
//             }
           
//             img{
//                 margin-top: 5px;
//             }
//             `}
//             </style>
//         </div>
    )
}

export default Nav;