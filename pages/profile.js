import Layout from "@/components/Layout";

const Profile = () => {
    return(
    <Layout
    mainTitle={<img src="" />}
    >
        <div style={
            {background:"pink"}}>
        <h3>Login or Signup</h3>
        <input type="text" placeholder="+91 | Mobile Number"/>
        <p>By continuing, I agree to the 
            <a href="/">Terms of use</a> &
            <a href="/">Privacy Policy</a>
        </p>
        <button>Continue</button>
        </div>
    </Layout>

    )
}

export default Profile;