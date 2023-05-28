import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/card.module.css";

const descStyle = {
    color: "black",
    margin: "auto",
    textAlign: "center",
    textDecoration: "none !important",
    textTransform:"uppercase",
    
}

const Card = ({pri, cat, image}) => {
    return (
        <div className="card_list">

            <Link href="/product">
                <Image src={image} alt="prod" height={180} width={180} className={styles.picture}/>
            </Link>
                {/* <img src = {image} alt="prod" */}
                {/* height='180px' width='180px'/> */}
                <div>        
                    <p className="product_title">
                        <small style={descStyle} className={styles.categorg_card}>{cat}</small><br/>
                        {/* <strong>${pri}</strong> */}
                    </p>    
                </div>
            

            <style jsx>{`
            Image{
                display: flex;
                justify-content: center;
                margin:auto;
            }
            .card_list{
                // display:flex;
                // flex-direction:column;
                // margin:2px;
                // border:1px solid grey;
                margin-top:15px;
            }

            strong{
                display:flex;
                justify-content:center;
            }

            .card_list:hover{
                cursor:pointer;
            }
            // .product{
            //     width:100%;
            //     display: flex;
            //     flex-direction: column;
            //     justify-content: center;
            //     padding:3px;
            // }
            .product_title{
                padding:2px;
                marging:2px;
                color: black;
                // background:red;
                text-align:center;
                text-decoration:none !important;
                
            }`}</style>
        </div>
    )
}

export default Card;