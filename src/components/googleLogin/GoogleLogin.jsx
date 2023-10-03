import './GoogleLogin.css';
import { FcGoogle } from "react-icons/fc";

export const GoogleLogin = () => {
    const getUser = async () => {
        try {
          const url2 = "https://localhost:5000/auth/login/success";
          
          const dataload2 = await fetch(url2, {method : "GET" , credentials: 'include'})
          .then(response => {
              console.log('ici')
              console.log(response)
              return true
            })
        } catch(err){
          console.log('erreur : ',err)
        }
      }

  
    const googleAuth = () => {
        console.log("googleLogin")
        const env = import.meta.env.MODE
        if(env === 'development')
        window.open(
            `https://localhost:5000/auth/google`,
            "self"
        );
    };

    return (
        <>
            <button id="googleLoginbtn" onClick={googleAuth}>
                <FcGoogle id="googleLoginIcon"/>
                <span>Sign in with google</span>

            </button>
            <button id="googleLoginbtn" onClick={getUser}>
                <FcGoogle id="googleLoginIcon"/>
                <span>confirm success</span>

            </button>
        </>
    )
}