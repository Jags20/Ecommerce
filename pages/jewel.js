import Layout from '@/components/Layout';
import Storelist from '@/components/Storelist';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Jewel = () => {

    const [jewel , setJewel] = useState();

    useEffect ( () => {
        const getJewel = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/category/jewelery")
                setJewel(res.data)
            } catch (e) {
                console.log(e.message);
            }
        }
        getJewel();
    },[])

    return (
        <Layout> 
        <Storelist store={jewel}/>
        </Layout>
    )
}

export default Jewel;
// men's clothing",
// "women's clothing"
