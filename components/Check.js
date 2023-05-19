import React from "react";
// import Layout from "../components/Layout";
import styles from "@/styles/checkout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Check = () => {

    const router = useRouter();

    const handlePlaceOrder = () => {
        const fnameValue = document.querySelector(`input[name='fname']`).value;
        // const lnameValue = document.querySelector(`input[name="Lastname"]`).value;
        // const stateValue = document.querySelector(`select[name="state"]`).value;
        // const paymentValue = document.querySelector(`select[name="payment"]`).value;

        router.push(`/final?fname=${fnameValue}`);
        // router.push(`/final?fname=${fnameValue}&lname=${lnameValue}&state=${stateValue}&payment=${paymentValue}`);

    };

    return(
        
            <div className={styles.check}>
                <h3 className={styles.checkout_heading}>Shipping address</h3>
                <div className={styles.checkout}>
                    <form method="get">
                        <select  className={styles.checkout_country} name="DropDown">
                            <option value="India" selected>India</option>
                            <option value="Usa">Usa</option>
                            <option value="Canada">Canada</option>
                            <option value="Uganda" disabled>Uganda</option>
                        </select>
                        <div className={styles.checkout_name}>
                            <input type="text" className={styles.checkout_fname} name="fname" placeholder="First name" required/>
                            <input type="text" className={styles.checkout_lname} name="Lastname" placeholder="Last name" required/>
                        </div>
                        <div className={styles.checkout_street_add}>
                            <input className={styles.checkout_street_address} type="text" name="address" placeholder="Address" required/>
                            <input className={styles.checkout_street_apartment}type="text" name="apartment" placeholder="Apartment,suite(optional)"/>
                        </div>
                        <div className={styles.checkout_state}>
                            <input className={styles.checkout_city} type="text" name="city" placeholder="City" required/>
                            <select name="state" className={styles.checkout_capital}>
                                <option value="India">Bihar</option>
                                <option value="Usa">Up</option>
                                <option value="Canada">Delhi</option>
                                <option value="Uganda" >Punjab</option>
                                <option value="India">Telangana</option>
                                <option value="Usa">Ap</option>
                                <option value="Canada">Kolkata</option>
                                <option value="Uganda" >Goa</option>
                            </select>
                            <input className={styles.checkout_pin} type="number" name="pin" placeholder="Pin Code" required/>
                        </div>
                        <input className={styles.checkout_phone} type="text" name="Phone" placeholder="Phone" required/>
                        <div className={styles.checkout_save}>
                            <input type="checkbox"/>
                            <p className={styles.checkout_para}>Save this information for next time</p>
                        </div>
                        <h4 className={styles.h4}>Payment options</h4>
                        <select className={styles.checkout_payment} name="payment">
                            <option value="Prepaid">Prepaid</option>
                            <option value="Cod">Cod</option>
                        </select> <br/>
                        <Link href="/final">
                        <button className={styles.checkout_button} onClick={handlePlaceOrder}>Place Order</button>
                        </Link>
                    </form>
                </div>
            </div>
        
    );
}

export default Check;