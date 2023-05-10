import Link from "next/link";

const descStyle = {
    color: "black",
    margin: "auto",
    textAlign: "center",
    textDecoration: "none !important",
    textTransform:"uppercase"
}

const Card = ({price, category, image}) => {
    return (
        <div className="card_list">

            <Link href="/product">
                <img src = {image} alt="prod"
                height='180px' width='180px'/>
                <div>
                <p className="product_title">
                        <small style={descStyle}>{category}</small><br/>
                        <strong>${price}</strong>
                    </p>
                </div>
            </Link>

            <style jsx>{`
            img{
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