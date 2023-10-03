import './ProfileScreen.css';
import {AiFillSafetyCertificate} from "react-icons/ai";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from 'react';
import {getUserAccess} from "../../api/user.api"

export const ProfileScreen = ()=> {
    const loginGoogle = true;
    
    const [data,setData] = useState([])

    useEffect(()=>{
        const getStorage = localStorage.getItem('nervii')
        console.log("DOCUMENT",getStorage)
        const decoded = jwt_decode(getStorage);
        console.log(decoded.email)
        const email = decoded.email
        const get = getUserAccess("m@m.com").then(resp => setData(resp.data))
        console.log("data", data)
    },[])

    return (
        <div className="profileScreenContainer">
            <section  id="sectionProfileUser">
                <div id="profilePicContainer">
                    <div id="photoProfile">
                        <img src="https://picsum.photos/300/300"/>
                    </div>
                    {loginGoogle ? 
                        <AiFillSafetyCertificate className="iconeValid"/> 
                        : null}
                </div>
                <div id="ProfileInfo">
                    <div>{data.name}</div>
                    <div>{data.surname}</div>
                </div>
            </section>
            <section id="sectionProfileAppli">
                Application
            </section>
        </div>
    )
}