import Layout from "@/components/Layout";
import Head from "next/head";
import Productlist from "@/components/Productlist";
import { useState, useEffect } from "react";
import axios from "axios";

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
                        <Productlist items={items} />
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
                        <button style={
                            {color: "white",
                             background:"blue",
                             border: "1px solid blue",
                             width:"20%",
                            }}
                            >Shop Now</button>
                        </div>
                        <div className="home_row">
                        <Productlist items={items}/>
                    </div>

                    </div>

                </div>

            <style jsx>{`
            .home_row{
                display: flex;

                justify-content: center;
            }
            .home_row2{
                background: #0aaa1658;
                
            }`}</style>
            {/* <h1>Hello! world</h1>
            <h6>My name is pal. <br/>
                <span className="fds"> My favourite game is you </span>
            </h6> */}
            {/* <Link href="/product" legacyBehavior>
                <a> Product </a>
            </Link> */}
            {/* <p> Hey Whats up guys, Im <span className="p1">new to react </span> as well as next
                .Hope you guys ignore my mistakes.
            </p> */}

        {/* Scoped Css
            <style jsx>{`
            p{
                color: red;
                fontSize: 40px;
            }
            .p1{
                color: green;
            }
            `}
            </style> */}
        </Layout>
    )
}

export default Index;