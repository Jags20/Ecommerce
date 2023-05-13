import { useSelector } from "react-redux";

const Subtotal = () => {

    const total = useSelector((state)=> {
        return state.basket
    });

    const totalPrice = total.reduce((acc, user) => {
        return acc + user.price;
      }, 0);

    return(
        <div>
            <p style={
                {marginBottom:"1px",
                fontSize:"22px"
                }} 
                >Total: $
                <strong>{Math.floor(totalPrice - (totalPrice*10)/100)}</strong>
            </p>
            <p style={
                {marginBottom:"15px",
                 fontSize:"18px",
                 color:"grey",
                 fontWeight:"600",
                 textDecoration:"underLine"
                }}
                >you saved: ${Math.round(totalPrice- (totalPrice - (totalPrice*10)/100))}
            </p>
        </div>
    );
}

export default Subtotal;