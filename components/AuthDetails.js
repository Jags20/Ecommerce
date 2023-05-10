import { auth } from "@/pages/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";


const AuthDetails = () => {

    const [authUser, SetauthUser] = useState(null);

    useEffect (() =>{
        const jjj = (user) => {
            if (user){
             SetauthUser(user)
            } else{
             SetauthUser(null);
            }
         }
         const listen = onAuthStateChanged(auth, jjj)

        // const listen = onAuthStateChanged(auth, (user) => {
        //    if (user){
        //     SetauthUser(user)
        //    } else{
        //     SetauthUser(null);
        //    }
        // });
        
        return ( () =>{
            listen();
        })
    }, []);

    const userSignOut = () =>{
        signOut(auth).then(() =>{
            // console.log("Sign out Sucessfully")
        }).catch(error => console.log(error))
    }

    return (
        <div>
            {authUser ? 
            <>  
                <p className="para">{`Hello ${authUser.email.substring(0,3).toUpperCase()}`}</p>
                <a onClick={userSignOut}>Sign out</a>
            </>:
            <p></p> }

            <style jsx>{`
            p{
                 margin:5px;
                 color:white;
            }
            .para{
                font-size:12px;
                font-weight:600;
            }
            a{
                text-decoration:none;
                color:white;
                border:2px solid;
                font-weight:500;
                cursor:pointer;
            }
            div{
                display:flex;
                flex-direction:column;
                margin-right:8px;
                line-height:100%;
            }
            `}</style>

        </div>
    )
}

export default AuthDetails;