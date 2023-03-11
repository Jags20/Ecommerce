const descStyle = {
    color: "white",
    margin: "auto",
    textAlign: "center",
}

const Card = ({price, category, image}) => {
    return (
        <div className="card_list">
            <img src = {image} alt="prod"
            height='60px' width='50px'/>
            <div>
            <p className="product_title">
                    <small style={descStyle}>{category}</small><br/>
                    <strong>${price}</strong>
                </p>
            </div>

            <style jsx>{`
            img{
                display: flex;
                justify-content: center;
                margin:auto;
            }
            .card_list{
                // display:flex;
                // flex-direction:column;
                margin:2px;
                border:1px solid orange;
            }

            strong{
                display:flex;
                justify-content:center;
            }

            .card_list:hover{
                cursor:pointer;
            }
            .product{
                width:100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding:3px;
            }
            .product_title{
                padding:2px;
                marging:2px;
                color: white;
                background:red;
                text-align:center;
                
            }`}</style>
        </div>
    )
}

export default Card;