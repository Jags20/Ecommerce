import Layout from "@/components/Layout";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Storelist from "@/components/Storelist";
// import Link from "next/link";


const Product = () => {

    const [products , SetProducts] = useState([]);

    useEffect ( () => {

        const getProducts = async () => {
            try{
                const response = await axios.get('https://fakestoreapi.com/products')
                // console.log(response.data)
                SetProducts(response.data);
            } catch (error)
            {
                console.log(error);
            }
        }
        getProducts();
    },[])

    return (
        <Layout>
            <Head>
            <title>Product Page</title>
            </Head>

            <div>
            <Storelist store={products}/>
            </div>
        </Layout>
    )
}

export default Product;