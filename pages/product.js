import Layout from "@/components/Layout";

const myStyle = {
    color: "red", 
    fontSize:"40px"
}

const Productlist = () => {
    return (
        <Layout
        footer={`Made by me`}>
            <div>
              <div>
                <img src="" alt="" />
                <p>name</p>
                <p>description</p>
                <div>
                    <small>Rs.</small>
                    <strong>150</strong>
                    <p>Rs. 50 off</p>    
                </div>
              </div>  
            </div>
        </Layout>
    )
}

export default Productlist;