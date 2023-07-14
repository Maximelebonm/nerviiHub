import { Outlet } from "react-router-dom"
import "./BaseScreen.css"

export const BaseScreen =()=>{

    return(
        <>
            <main>
                <Outlet />
            </main>   
        </>
    )
}