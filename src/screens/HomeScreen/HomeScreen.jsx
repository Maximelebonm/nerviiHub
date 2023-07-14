import './HomeScreen.css';
import nerviiLogo from '../../assets/logo/nerviiBlanc.svg';

export const HomeScreen = () =>{
    return (
   
        <div id="HomeScreenContainer">
            <h1>Nervii</h1>
            <h2>Bienvenue sur Nervii</h2>
            <img src={nerviiLogo} id="logoHome"/>
        </div>
    )
}