import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const error = () => {
    return (
        <div>
            <Nav/>
            <h1>Error! 404 page not found.</h1>
            <Footer/>
            <style jsx>{`
            h1
            {display:flex;
            justify-content:center;
            align-items:center; 
            background:grey;
            font-weight:600;
            color:black;
            height:100vh;}
            `}
            </style>    
         </div>
    )
}

export default error;