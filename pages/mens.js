import Layout from '@/components/Layout';
import Storelist from '@/components/Storelist';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Mens = () => {

    const [mens , setMens] = useState();

    useEffect ( () => {
        const getMens = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
                setMens(res.data)
            } catch (e) {
                console.log(e.message);
            }
        }
        getMens();
    },[])

    return (
        <Layout> 
        <Storelist store={mens}/>
        </Layout>
    )
}

export default Mens;
// "women's clothing"
