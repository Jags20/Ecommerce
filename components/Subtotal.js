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
            <p>Total: $
                <strong>{Math.floor(totalPrice - (totalPrice*10)/100)}</strong>
            </p>
            <p>
                you saved: ${totalPrice- (totalPrice - (totalPrice*10)/100)}
            </p>
        </div>
    );
}

export default Subtotal;