import { Route, Routes as RoutesContainer  } from "react-router-dom";
import { BaseScreen } from '../screens/BaseScreen/BaseScreen';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { LoginScreen } from '../screens/loginScreen/LoginScreen';
import { RegisterScreen } from '../screens/registerScreen/RegisterScreen';
import { useEffect,useState } from 'react';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import jwt_decode from 'jwt-decode';
import {getUserAccess} from "../api/user.api";
import { checkUser } from '../services/checkUser';
import { PrivateRoute } from './PrivateRoute';

const Routes = () => {
    return (
        <RoutesContainer>
                <Route
                 path={"/"} 
                 element={
                    <PrivateRoute roles={"user" || "userGoogle"}>
                        < HomeScreen />
                   </PrivateRoute>
                    }
                />
                
                <Route
                 path={"/profile"} 
                 element={
                    <PrivateRoute roles={"user" || "userGoogle"}>
                        <ProfileScreen/>
                    </PrivateRoute>}
                />

                <Route path='/login' element={<LoginScreen/>}/>
                <Route path="/register" element={<RegisterScreen/>}/> 
                {/* <<Route path="/*" element={<ErrorScreen/>}/>    */}
        </RoutesContainer>
    );
};

export default Routes;
