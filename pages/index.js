import Layout from "@/components/Layout";
import Head from "next/head";
import Productlist from "@/components/Productlist";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";


const Index = () => {

    const [items, setItems] = useState([])

    useEffect( () => {

        const getItems = async() => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                // console.log(response.data);
                setItems(response.data);
            } catch (error) {
                console.error(error);
            }
            

        }
        getItems();
        // geting data using fetch method
        // const data = 
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(users=>{
        //         console.log(users)
        //         setItems(users)});
    },[])
    



    return(
        <Layout 
        // footer={`Copyright ${new Date().getFullYear() }`}
        // mainTitle={`hello brother`}
        
        >
            <Head>
                <title>Home</title>
            </Head>
                <div className="home">
                    <img className="home_image" 
                    src="https://i.pinimg.com/originals/3b/f5/32/3bf5329387752da6456bdedd46351689.jpg"
                    alt="banner"
                    height="180px"
                    width='100%'/>

                    <img className="home_offer" 
                    src="https://brxcdn.com/plt-app-storage/c873bada-b26b-11eb-a00b-0e95affb47f1/media/original/38e9b236-8c47-11ed-a618-fee145427408"
                    alt="banner"
                    height="180px"
                    width='100%'/>

                    <div className="home_row">
                        <Productlist product={items} />
                    </div>

                    <div className="home_row2">
                        <div className="home_row2title">
                        <h1 style={
                            {color: "blue",
                            textAlign:"center"
                            }}
                            >Budget Buys</h1>
                        <h3 style={
                            {color: "red",
                            textAlign:"center"
                            }}
                            >WOW TRENDS AT WOW PRICES</h3>
                        <Link href="/product">    
                            <button style={
                                {color: "white",
                                background:"grey",
                                border: "1px solid grey",
                                width:"100%",
                                marginBottom:"10px",
                                padding:"7px",
                                
                                }}
                            >Shop Now
                            </button>
                        </Link>
                        </div>
                        <div className="home_row">
                        <Productlist product={items}/>
                    </div>

                    </div>

                </div>
            {/* scoped css */}
            <style jsx>{`
            .home_row{
                display: flex;

                justify-content: center;
            }

            button{
                font-size: 25px;
            }
            .home_row2{
                background: #0aaa1658;
                
            }`}</style>
        </Layout>
    )
}

export default Index;