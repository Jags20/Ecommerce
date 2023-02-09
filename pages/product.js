import Link from "next/link"
import Layout from "@/components/Layout";

const myStyle = {
    color: "red", 
    fontSize:"40px"
}

const Productlist = () => {
    return (
        <Layout 
        mainTitle="I'm product page" 
        footer={`Made by me`}>
            <h1>Product page!</h1>
            <Link href="/" legacyBehavior>
                <a style={myStyle}>Home</a>
            </Link>
        </Layout>
    )
}

export default Productlist;