import Layout from '@/components/Layout';
import Storelist from '@/components/Storelist';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Electronic = () => {

    const [electronic , setElectronic] = useState();

    useEffect ( () => {
        const getElectronic = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/category/electronics")
                setElectronic(res.data)
            } catch (e) {
                console.log(e.message);
            }
        }
        getElectronic();
    },[])

    return (
        <Layout> 
        <Storelist store={electronic}/>
        </Layout>
    )
}

export default Electronic;
