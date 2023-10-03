import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


export const PrivateRoute = ({ children, roles }) => {
        const getStorage = localStorage.getItem('nervii')
        const decoded = jwt_decode(getStorage);
        console.log("decoded : ",decoded)
        const roleUser = decoded.role

    console.log("children roles : ", roles)
    const location = useLocation();
    const isAuthenticated = roles

    if (roleUser != roles)
        return <Navigate replace to={"/login"} state={{ from: location }} />;

    //if (roleUser == roles) return <Navigate replace to={{ pathname: "/" }} />;

    return children;
};

