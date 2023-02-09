import Link from "next/link";

const Nav = () => {
    return (
        <div className="myNav">
            <img src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png" 
            alt='logo' height='50px' width="50px"/>
            <Link href="/" legacyBehavior>
                <a>Home</a>
            </Link>
            
            <Link href="/product" legacyBehavior>
                <a>Product</a>
            </Link>

            <Link href='/homedecor' legacyBehavior>
                <a>Decor</a>
            </Link>

            <Link href='/items' legacyBehavior>
                <a>Items</a>
            </Link>

            <input type={`text`} placeholder='search the store'/>

            <Link href='/profile' legacyBehavior>
                <a>Profile</a>
            </Link>

            <Link href='/wishlist' legacyBehavior>
                <a>Cart</a>
            </Link>

{/* Scoped css */}
            <style jsx>{`
            a{
                padding: 10px;
                color: Black;
                margin: 5px;
                margin-top: 5px;
            }
            input{
                border: 2px solid red;
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