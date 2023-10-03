import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './routes/Routes';
import { BaseScreen } from './screens/BaseScreen/BaseScreen';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { LoginScreen } from './screens/loginScreen/LoginScreen';
import { RegisterScreen } from './screens/registerScreen/RegisterScreen';
import { useEffect,useState } from 'react';
import { ProfileScreen } from './screens/ProfileScreen/ProfileScreen';
import jwt_decode from 'jwt-decode';

import { checkUser } from './services/checkUser';
import { getToken } from './services/token';
import { Header } from './components/Header/Header';

function App() {
  const [user, setUser]= useState();

  return (
    <BrowserRouter>
        <Header/>
        <main>
          <Routes/>   
        </main>  
    </BrowserRouter>
  )
}

export default App
