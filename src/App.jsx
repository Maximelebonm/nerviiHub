import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseScreen } from './screens/BaseScreen/BaseScreen';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { LoginScreen } from './screens/loginScreen/LoginScreen';
import { RegisterScreen } from './screens/registerScreen/RegisterScreen';

function App() {
  const isIdentify = false
  return (
    <>
    <BrowserRouter>   
      <Routes>
          {isIdentify ? 
            <Route path="/" element={< BaseScreen />}>
              <Route index element={< HomeScreen />} />
            </Route>
          :
            <Route path="/" element={< BaseScreen />}>
              <Route index element={<LoginScreen/>}/>
              <Route path="/register" element={<RegisterScreen/>}/>
            </Route>
          }
      </Routes>      
    </BrowserRouter>
  </>
  )
}

export default App
