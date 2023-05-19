import Nav from "@/components/Nav";
import styles from "@/styles/profile.module.css";
import { useState } from "react";
import Link from "next/link";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { Router } from "next/router";
import { useRouter } from "next/router";
// import AuthDetails from "@/components/AuthDetails";


const Profile = () => {

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const router= useRouter();

    const signIn = async (e) => {
        try{
            e.preventDefault();
            const res =await signInWithEmailAndPassword(auth, email, password);
           router.push("/");
        }
        catch{(err) => {
            console.log(err.message);
        }
        }
    }

    const signUp = async (e) => {
    try{
        e.preventDefault();
        const resp = await createUserWithEmailAndPassword(auth, email, password)
        // console.log(resp);
        router.push('/');
    }
    catch{ (err) =>{
        console.log(err.message);
    }
    }
}


    return(
        <div>
            <Nav/>

        <div className={styles.profile}> 
            <div className={styles.profile_content}>
                <div className={styles.nova}>
                    {/* <div className={styles.logo}> 
                    // src="https://media.istockphoto.com/id/1303004294/vector/free-shipping-red-label-free-shipping-banner-template-vector-design.jpg?s=612x612&w=0&k=20&c=GnhelWcF554-Z_lTrbgDbHT6hiPQ3seYYt6paDgAoBM=" alt="logo"
                    // height={136} width={300}
                     </div>*/}
                    <p className={styles.para1}> <strong className={styles.bold} >Login</strong> or <strong className={styles.bold} >Signup</strong></p>
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
                    <p className={styles.para1}>By continuing, I agree to the 
                    
                        <Link href="/" legacyBehavior>
                            <a><span className={styles.span_content}> Terms of use </span></a>
                        </Link> &
                        <Link href="/" legacyBehavior>
                            <a> <span className={styles.span_content}>Privacy Policy </span></a>
                        </Link>
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