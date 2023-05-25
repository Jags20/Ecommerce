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
import Image from "next/image";

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
                    {/* <Image className={styles.myNav_logo} src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
                alt="logo" width="70" height="50"/> */}
                {/* <img className={styles.myNav_logo} src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
                alt="logo" width="70px"/> */}
                <svg className={styles.myNav_logo} id="logo-69" width="80" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="stroke" d="M36.95 4.31006H13.05L1.09998 25.0001L13.05 45.6901H36.95L48.9 25.0001L36.95 4.31006Z" stroke="black" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path className="stroke" d="M14.66 5.38996C14.77 5.27996 25.54 5.20996 25.71 5.20996C25.88 5.20996 36.65 5.27996 36.71 5.38996C36.77 5.49996 47.51 24.05 47.51 24.22C47.51 24.39 36.87 42.94 36.76 43.05C36.65 43.16 25.88 43.22 25.76 43.22C25.64 43.22 14.82 43.16 14.76 43.05C14.7 42.94 3.85999 24.39 3.85999 24.22C3.85999 24.05 14.55 5.49996 14.66 5.38996Z" stroke="black" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M16.26 6.48012C16.49 6.26012 26.08 6.12012 26.42 6.12012C26.76 6.12012 36.36 6.26012 36.58 6.48012C36.8 6.70012 46.23 23.1001 46.23 23.4801C46.23 23.8601 36.8 40.2201 36.58 40.4801C36.36 40.7401 26.76 40.8401 26.42 40.8401C26.08 40.8401 16.49 40.7001 16.26 40.4801C16.03 40.2601 6.60999 23.8601 6.60999 23.4801C6.60999 23.1001 16 6.70012 16.26 6.48012Z" stroke="red" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path className="stroke" d="M17.87 7.57C18.2 7.23 26.63 7 27.13 7C27.63 7 36.06 7.2 36.39 7.54C36.72 7.88 44.9 22.15 44.9 22.66C44.9 23.17 36.72 37.42 36.39 37.75C36.06 38.08 27.64 38.29 27.13 38.29C26.62 38.29 18.2 38.08 17.87 37.75C17.54 37.42 9.37 23.16 9.37 22.66C9.37 22.16 17.54 7.9 17.87 7.57Z" stroke="yellow" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path className="stroke" d="M19.48 8.64994C19.92 8.20994 27.17 7.93994 27.84 7.93994C28.51 7.93994 35.77 8.20994 36.21 8.64994C36.65 9.08994 43.56 21.1999 43.56 21.8799C43.56 22.5599 36.65 34.6599 36.21 35.0999C35.77 35.5399 28.52 35.8199 27.84 35.8199C27.16 35.8199 19.92 35.5399 19.48 35.0999C19.04 34.6599 12.12 22.5499 12.12 21.8799C12.12 21.2099 19 9.08994 19.48 8.64994Z" stroke="blue" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path className="stroke" d="M21.08 9.74009C21.64 9.18009 27.71 8.84009 28.55 8.84009C29.39 8.84009 35.47 9.18009 36.02 9.74009C36.57 10.3001 42.23 20.2501 42.23 21.1001C42.23 21.9501 36.58 31.9001 36 32.4501C35.42 33.0001 29.38 33.3501 28.53 33.3501C27.68 33.3501 21.62 33.0101 21.06 32.4501C20.5 31.8901 14.86 21.9401 14.86 21.1001C14.86 20.2601 20.53 10.2901 21.08 9.74009Z" stroke="aliceblue" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path className="stroke" d="M22.69 10.82C23.35 10.16 28.25 9.75 29.26 9.75C30.27 9.75 35.18 10.16 35.84 10.82C36.5 11.48 40.9 19.3 40.9 20.31C40.9 21.32 36.5 29.14 35.84 29.81C35.18 30.48 30.28 30.88 29.26 30.88C28.24 30.88 23.35 30.47 22.69 29.81C22.03 29.15 17.63 21.33 17.63 20.31C17.63 19.29 22 11.49 22.69 10.82Z" stroke="pink" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path className="stroke" d="M24.29 11.9099C25.07 11.1399 28.79 10.6599 29.97 10.6599C31.15 10.6599 34.88 11.1399 35.65 11.9099C36.42 12.6799 39.56 18.3499 39.56 19.5299C39.56 20.7099 36.43 26.3799 35.65 27.1599C34.87 27.9399 31.16 28.4099 30 28.4099C28.84 28.4099 25.1 27.9299 24.32 27.1599C23.54 26.3899 20.42 20.7199 20.42 19.5299C20.42 18.3399 23.52 12.6799 24.29 11.9099Z" stroke="violet" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path className="stroke" d="M25.9 13.0001C26.78 12.1101 29.33 11.5601 30.68 11.5601C32.03 11.5601 34.58 12.1101 35.47 13.0001C36.36 13.8901 38.23 17.4001 38.23 18.7501C38.23 20.1001 36.35 23.6201 35.47 24.5101C34.59 25.4001 32 25.9401 30.68 25.9401C29.36 25.9401 26.78 25.3901 25.9 24.5101C25.02 23.6301 23.14 20.1001 23.14 18.7501C23.14 17.4001 25 13.8801 25.9 13.0001Z" stroke="orange" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path className="stroke" d="M36.9 17.9999C36.9028 19.2748 36.4635 20.5113 35.6568 21.4985C34.8501 22.4858 33.7261 23.1628 32.4762 23.4141C31.2262 23.6654 29.9279 23.4755 28.8023 22.8768C27.6767 22.278 26.7936 21.3074 26.3035 20.1305C25.8133 18.9536 25.7465 17.6431 26.1144 16.4224C26.4822 15.2017 27.262 14.1463 28.3208 13.4362C29.3796 12.726 30.652 12.405 31.921 12.5278C33.1899 12.6507 34.3771 13.2098 35.28 14.1099C35.7942 14.6186 36.2023 15.2245 36.4804 15.8923C36.7585 16.5601 36.9011 17.2765 36.9 17.9999Z" stroke="white" strokeWidth="0.5" strokeMiterlimit="10"></path>
                </svg>

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

                    {/* <Link href="/product" legacyBehavior>
                        <a className={styles.myNav_home}>Product</a>
                    </Link> */}
                    
                    <Link href="/jewel" legacyBehavior>
                        <a className={styles.myNav_home}>Jewellery</a>
                    </Link>

                    <Link href="/electronic" legacyBehavior>
                        <a className={styles.myNav_home}>Electronic</a>
                    </Link>

                    <Link href="/mens" legacyBehavior>
                        <a className={styles.myNav_home}>Mens</a>
                    </Link>

                    <Link href="/women" legacyBehavior>
                        <a className={styles.myNav_home}>Womens</a>
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
                <h1 className={styles.search_sep}>|</h1>
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
               <AuthDetails/>
             </div>

             {/* <AuthDetails/> */}
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