import Layout from '@/components/Layout';
import Storelist from '@/components/Storelist';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Womens = () => {

    const [womens , setWomens] = useState();

    useEffect ( () => {
        const getWomens = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
                setWomens(res.data)
            } catch (e) {
                console.log(e.message);
            }
        }
        getWomens();
    },[])

    return (
        <Layout> 
        <Storelist store={womens}/>
        </Layout>
    )
}

export default Womens;
