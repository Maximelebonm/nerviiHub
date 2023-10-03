import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { logoutApi } from '../../api/user.api';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getToken } from '../../services/token';


export const Header = (user)=> {
    const navigate = useNavigate()
    const logout = () => {
        const logoutFinish = logoutApi().then(resp => 
            {
                localStorage.removeItem("nervii"),
                console.log(resp)
                navigate("/login")
            })
    }

    const location = useLocation()
    const [isLogin, setIsLogin] = useState(false);  
  
    useEffect(() => {
      const token = getToken();
      if(token){
        setIsLogin(true);
      }else {
        setIsLogin(false);
      }
    }, [location.pathname]);
  
  


  
       return (
        <>
        {isLogin===true &&
           <nav id="HeaderContainer">
               <ul>
                   <li>  <Link to="/"className="iconHeader">< AiFillHome/></Link></li>
                   <li>  <Link to="Profile" className="iconHeader"><BiSolidUser/> </Link></li>
                   <li>  <Link onClick={()=>logout()} className="iconHeader"><FiLogOut/> </Link></li>
               </ul>
           </nav>
       }
        
        </>
       )
   }