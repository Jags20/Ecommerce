import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import axios from "axios";

const Detailproduct = () => {

    const [product, setProduct] = useState();

    useEffect ( () => {
        const getItems = async () => {
            try{
                const resp = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setProduct(resp.data);
            }
            catch(e) {
                console.log(e.message);
            }
        }
        getItems();
    },[product])

    return(
        <Layout>
            <div>

            </div>

        </Layout>
    );
}

export default Detailproduct;