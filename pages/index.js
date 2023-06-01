import Layout from "@/components/Layout";
import Head from "next/head";
import Productlist from "@/components/Productlist";
import CategoryList from "@/components/CategoryList";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
// import Image from "next/image";
// import { Margin } from "@mui/icons-material";


const Index = () => {

    const [items, setItems] = useState([]);
    const [jewel, setJewel] = useState([]);
    const [men, setMen] = useState([]);
    const [women, setWomen] = useState([]);
    const [electronic, setElectronic] = useState([]);



    useEffect( () => {

        const getItems = async() => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products")
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
    
    useEffect( () => {

        const getJewels = async() => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/category/jewelery")
                // console.log(response.data);
                setJewel(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getJewels();
    },[])

    useEffect( () => {

        const getMclothing = async() => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
                // console.log(response.data);
                setMen(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMclothing();
    },[])

    useEffect( () => {

        const getWclothing = async() => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
                // console.log(response.data);
                setWomen(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getWclothing();
    },[])

    useEffect( () => {

        const getElectronic = async() => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/category/electronics")
                // console.log(response.data);
                setElectronic(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getElectronic();
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
                    {/* <Image className="home_image" 
                    src="https://i.pinimg.com/originals/3b/f5/32/3bf5329387752da6456bdedd46351689.jpg"
                    alt="banner"
                    height={180}
                    width={1000}/>

                    <Image className="home_offer" 
                    src="https://brxcdn.com/plt-app-storage/c873bada-b26b-11eb-a00b-0e95affb47f1/media/original/38e9b236-8c47-11ed-a618-fee145427408"
                    alt="banner"
                    height={180}
                    width={1000}/> */}

                    <div className="home_row">
                        {/* <Productlist product={items} /> */}
                        {/* <Link href="/jewel"> */}
                        <div className="home_row2title">
                        <h3 style={
                            {color: "#967E76",
                            textAlign:"center",
                            background:"#EEE3CB",
                            padding:"5px",
                            marginBottom:"0",
                            }}
                            >Jewellery Collection</h3>
                        </div>
                        <Link href="/jewel">
                        <CategoryList category={jewel}/>
                        </Link>

                        
                        <div className="home_row2title">
                        <h3 style={
                            {color: "#967E76",
                            textAlign:"center",
                            background:"#EEE3CB",
                            padding:"5px",
                            marginBottom:"0",
                            }}
                            >Men Collection</h3>
                        </div>
                        <Link href="/mens">
                        <CategoryList category={men}/>
                        </Link>

                        
                        <div className="home_row2title">
                        <h3 style={
                            {color: "#967E76",
                            textAlign:"center",
                            background:"#EEE3CB",
                            padding:"5px",
                            marginBottom:"0",
                            }}
                            >Electronic Collection</h3>
                        </div>
                        <Link href="/electronic">
                        <CategoryList category={electronic}/>
                        </Link>

                        
                        <div className="home_row2title">
                        <h3 style={
                            {color: "#967E76",
                            textAlign:"center",
                            background:"#EEE3CB",
                            padding:"5px",
                            marginBottom:"0",
                            }}
                            >Womens Collection</h3>
                        </div>
                        <Link href="/women">
                        <CategoryList category={women}/>
                        </Link>
                    </div>

                    <div className="home_row2">
                        <div className="home_row2title">
                        <h1 style={
                            {color: "#967E76",
                            padding:"0.3rem",
                            textAlign:"center"
                            }}
                            >Budget Buys</h1>
                        <h3 style={
                            {color: "#967E76",
                            textAlign:"center"
                            }} className="wow"
                            >WOW TRENDS AT WOW PRICES</h3>
                        <Link href="/product">    
                            <button style={
                                {color: "white",
                                background:"rgb(224,170,21)",
                                borderRadius:"45px",
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
                flex-direction:column;

                justify-content: center;
            }
            .home_row2title{
                    background:#EEE3CB;
                
            }

            @media screen and (max-width: 500px) {
                .wow{
                    font-size:1rem;
                }
              }

            button{
                font-size: 25px;
            }
            `}</style>
        </Layout>
    )
}

export default Index;