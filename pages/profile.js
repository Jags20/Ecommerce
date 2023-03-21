import Nav from "@/components/Nav";
import styles from "@/styles/profile.module.css";
import {  useState } from "react";
import Link from "next/link";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import AuthDetails from "@/components/AuthDetails";


const Profile = () => {

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    const signIn = async (e) => {
        try{
            e.preventDefault();
            const res =await signInWithEmailAndPassword(auth, email, password);
            console.log(res);
            // .then((userAuthentication) => {
                // console.log(userAuthentication);
            // })
        }
        catch{(err) => {
            console.log(err.message);
        }
        }
        // e.preventDefault();
        // signInWithEmailAndPassword(auth, email, password)
        // .then((userAuthentication) => {
        //     console.log(userAuthentication);
        // })
        // .catch((error) =>{
        //     alert(error.message)
        // })
        // auth.signInWithEmailAndPassword(email,password)
        // .then(auth  =>{
        //     <Link href="/"></Link>
        // })
        // .catch(error => alert(error.message))
    }

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log();
        })
        .catch((error) =>{
            alert(error.message)
        })
    }

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
        {/* <div className={styles.field}>
            <span>+91 |</span>
            <input className={styles.inputset} type="text" placeholder="Mobile Number"/>
        </div> */}

        <div>
        <form onSubmit={signIn}>
                <h5 className={styles.heading}>E-mail</h5>
                <input placeholder='E-mail Id' type='email' 
                value={email} 
                onChange = { (e) =>SetEmail(e.target.value)}
                />

                <h5 className={styles.heading}>Password</h5>
                <input type='password' placeholder='password'
                value={password}  
                onChange ={ (e) =>SetPassword(e.target.value)}
                />
            </form>  
        </div>

        {/* <div>
        <form onSubmit={signUp}>
                <h5>E-mail</h5>
                <input placeholder='E-mail Id' type='email' 
                value={email} 
                onChange = { (e) =>SetEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input type='password' placeholder='password'
                value={password}  
                onChange ={ (e) =>SetPassword(e.target.value)}
                />
            </form>  
        </div> */}

        {/* <AuthDetails/> */}

        <p className={styles.para1}>By continuing, I agree to the 
            <a href="/"><span className={styles.span_content}> Terms of use </span></a> &
            <a href="/"> <span className={styles.span_content}>Privacy Policy </span></a>
        </p>
            <button type='submit' 
                onClick={signIn} className={styles.continue}>SignIn
            </button>
        {/* <button className={styles.continue}>Continue</button> */}
        <p className={styles.para1}>Have trouble logging in? <span className={styles.span_content}>Get help</span></p>

        <button type='submit' 
                onClick={signUp} className={styles.continue}>Creat your account
            </button>
        </div>
        </div>
        </div>
        </div>
    

    )
}

export default Profile;