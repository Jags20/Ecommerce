import Link from "next/link";
import styles from "../styles/nav.module.css"

const Nav = () => {

    const buttonClick= () =>{}
    return (
        <div className={styles.myNav}>
            <Link href="/">
            <img className={styles.myNav_logo} src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png" 
            alt='logo' height='50px' width="50px"/>
            </Link>
            <div className={styles.myNav_home}>
            <Link href="/" legacyBehavior>
                <a>Home</a>
            </Link>
            </div>
            
            <div className={styles.dropdown}>
            <Link href="/product" legacyBehavior>
                <a>Product</a>
            </Link>
            <div className={styles.menu}>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <div>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    </div>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                <div>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    </div>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                <div>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    </div>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                <div>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    <p className={styles.dropmenu}>Shirt</p>
                    </div>
                </div>
            </div>
            </div>

            <div className={styles.dropdown}>
            <Link href='/product' legacyBehavior>
                <a>Decor</a>
            </Link>
            <div className={styles.menu}>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                </div>
            </div>
            </div>

            <div className={styles.dropdown}>
            <Link href='/product' legacyBehavior>
                <a>Items</a>
            </Link>
            <div className={styles.menu}>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                </div>
                
                <div className={styles.firstChild}>
                <p className={styles.para}>Boys</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                    <p>Shirt</p>
                </div>
            </div>
            </div>

            <div className={styles.nav}>
            <input className={styles.myNav_search} type={`text`} placeholder='search the store'
            onButtonClick={buttonClick}/>

            <Link className={styles.myNav_profile} href='/profile' legacyBehavior>
                <a>Profile</a>
            </Link>

            <Link className={styles.myNav_cart} href='/wishlist' legacyBehavior>
                <a>Cart</a>
            </Link>
            </div>

{/* Scoped css */}
            <style jsx>{`
            a{
                padding: 10px;
                color: Black;
                text-decoration:none;
                margin: 5px;
                margin-top: 5px;
            }
            a:hover{
                border-bottom: 2px solid orange;
            }
           
            img{
                margin-top: 5px;
            }
            `}
            </style>
        </div>
    )
}

export default Nav;