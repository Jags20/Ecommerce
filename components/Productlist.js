
const descStyle = {
    color: "white",
    margin: "auto",
    

}


const Productlist = ( {id, image, desc, title} ) =>{
    return(
        <div className="product">
            <img src={image} alt="" 
             height='60px' width='50px'/>
            <div>
                <p className="product_title">
                    <small style={descStyle}>{desc}</small><br/>
                    <strong>{title}</strong>
                </p>
            </div>

            <style jsx>{`
            img{
                display: flex;
                justify-content: center;
                margin:auto;
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
            }`}</style>
        </div>
    )
}

export default Productlist;