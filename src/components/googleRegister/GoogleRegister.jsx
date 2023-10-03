import './GoogleRegister.css';
import { FcGoogle } from "react-icons/fc";

export const GoogleRegister = () => {
    console.log(import.meta.env.MODE)
    const googleRegister = () => {
        const env = import.meta.env.MODE
        if(env === 'development')
        window.open(
            `http://localhost:5000/auth/google`,
            "self"
        );
    };

    
    return (
        <>
            <button id="googleRegisterbtn" onClick={googleRegister}>
                <FcGoogle/>
                <span>register with google</span>
            </button>
        </>
    )
}