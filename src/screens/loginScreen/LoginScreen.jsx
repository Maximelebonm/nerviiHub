import { useState } from "react";
import { FormLogin } from "../../components/formLogin/formLogin";
import "./LoginScreen.css";


export const LoginScreen = () => {
    const [user,setUser]=useState()
    
    return (
        <div id="loginScreenContainer">
            <div id="loginContainer">
                <FormLogin/>
    
            </div>

        </div>
    )
}