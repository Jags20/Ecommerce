import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const Final = () => {

    const router = useRouter();
    // console.log(router);
    const { query } = router;
    const fname = query.fname;   // Retrieve the fname value from the query parameters
    // const lname = query.lname;
    // const state = query.state;
    // const payment = query.payment;

    const OrderNo = Math.random();

    return (
        <Layout>
        <div style={
            {display:"flex",
            flexDirection:"column",
            alignItems:"center",
            backgroundColor:"lightcyan",
            height:"80vh"
            }
        }>
            <h1 style={
                {display:"flex",
                margin:"3rem"
                }
            }>🎉Thanks {fname} For Supporting us.🎉</h1>
            <div style={
                {
                    margin:"1.75rem"
                }
            }>
                Your Order No is 
                <span style={
                    {fontSize:"1.5rem",
                     fontWeight:"600",
                }
                }>
                    {` AD-${Math.floor(OrderNo*10000)}`}
                </span>
            </div>
            <Link href="/product">
            <button style={
                {padding:"0.75rem",
                 backgroundColor:"blue",
                 color:"white",
                 border:"none",
                 fontSize:"1.5rem",
                 fontWeight:"600",
                 borderRadius:"5%"
                    
            }
            }>Continue Shopping</button>
            </Link>
        </div>
        </Layout>
    )
}

export default Final;