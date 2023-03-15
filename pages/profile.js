import Nav from "@/components/Nav";
import styles from "@/styles/profile.module.css";

const Profile = () => {
    return(
        <div>
            <Nav/>
            
        <div className={styles.profile}> 
        {/* <input type="text" placeholder="search"/> */}
            <div className={styles.profile_content}>
        <div className={styles.nova}>
        <img className={styles.logo} src="https://media.istockphoto.com/id/1303004294/vector/free-shipping-red-label-free-shipping-banner-template-vector-design.jpg?s=612x612&w=0&k=20&c=GnhelWcF554-Z_lTrbgDbHT6hiPQ3seYYt6paDgAoBM=" alt="logo"
            height={136} width={300}/>
        <p className={styles.para1}> <strong className={styles.bold} >Login</strong> or <strong className={styles.bold} >Signup</strong></p>
        <div className={styles.field}>
            <span>+91 |</span>
            <input className={styles.inputset} type="text" placeholder="Mobile Number"/>
        </div>
        <p className={styles.para1}>By continuing, I agree to the 
            <a href="/"><span className={styles.span_content}> Terms of use </span></a> &
            <a href="/"> <span className={styles.span_content}>Privacy Policy </span></a>
        </p>
        <button className={styles.continue}>Continue</button>
        <p className={styles.para1}>Have trouble logging in? <span className={styles.span_content}>Get help</span></p>
        </div>
        </div>
        </div>
        </div>
    

    )
}

export default Profile;