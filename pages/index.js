import Link from "next/link";
import Layout from "@/components/Layout";
import Head from "next/head";
import Productlist from "@/components/Productlist";

const Index = () => {
    return(
        <Layout 
        footer={`Copyright ${new Date().getFullYear() }`}>
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
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                    </div>

                    <div className="home_row">
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
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
                             width:"20%"
                            }}
                            >Shop Now</button>
                        </div>
                        <div className="home_row">
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                    </div>

                    <div className="home_row">
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
                        <Productlist 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnzj_lqmmRnJzF93alLZ_Pxd-XOVAAPbaeQ&usqp=CAU"
                        desc="50% off"
                        title={`Trousers`}/>
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
            <h6>My name is pallawi kumari. <br/>
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