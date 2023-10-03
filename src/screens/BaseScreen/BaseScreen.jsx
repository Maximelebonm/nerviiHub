import { Outlet } from "react-router-dom";
import "./BaseScreen.css";
import { Header } from "../../components/Header/Header";


export const BaseScreen =(user)=>{
    return(
        <>
            <Header userRole={user.userRole}/>
            <main>
                <Outlet/>
            </main>   
        </>
    )
}