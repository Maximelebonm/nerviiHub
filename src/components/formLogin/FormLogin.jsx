import './FormLogin.css';
import * as Yup from 'yup';
import { useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import nerviiLogo from '../../assets/logo/nerviiBlanc.svg';
import { Link } from 'react-router-dom';
import { getUser } from '../../api/user.api';
import { GoogleLogin } from "../../components/googleLogin/GoogleLogin";
import { useNavigate } from 'react-router-dom';

export const FormLogin = () => {
   // const [gestionError, setgestionerror] = useState([])
    //console.log(gestionError)
    const navigate = useNavigate()
    const formulaire = document.querySelector('form');

    const LoginSchema = Yup.object({
        email: Yup.string().required('le champs est obligatoire').email('le format de mail invalide'),
        password: Yup.string().required('le champ est obligatoire').min(8,'minimum 8 caractère').max(20,'maximum 20 caractère'),
    });

    const defaulValuesLogin = {
        email:'',
        password: '',
        rememberMe: false,
    };

    const userLogin = async (props) => {
        const user = await getUser(props).then(resp => 
            {
                console.log(resp)
                navigate("/")
            })
    }

    return (
        <div id="formLogin">
                <div id="logoLoginContainer">
                    <img src={nerviiLogo} id="formLoginLogo"/>

                </div>
            <div id='formContainer'>
            <Formik
            initialValues={defaulValuesLogin}
            onSubmit={userLogin}
            validationSchema={LoginSchema}
            >
                <Form>
                <div className="formLoginItem">
                    <label className="formLoginLabel">E-mail : </label>
                    <Field
                        type="email"
                        name="email"
                        placeholder="email"
                        component={''}
                        className="formLoginInput"
                    
                    />
                    <div className="loginErrorContainer">
                    <ErrorMessage
                        name="email"
                        component="small"
                        className="loginError"
                    />
                    </div>
                </div>
                <div className="formLoginItem">
                    <label className="formLoginLabel">Password : </label>
                        <Field
                            type="password"
                            name="password"
                            placeholder="password"
                            component={''}
                            className="formLoginInput"
                        
                        />
                        <div className="loginErrorContainer">
                            <ErrorMessage
                                name="password"
                                component="small"
                                className="loginError"
                            />
                        </div>
                </div>
                <div id="ButtonLoginContainer">
                    <button type="submit" className="ButtonLogin"> Connection </button>
                    <Link to='/register'>
                        <button className="ButtonLogin"> Register </button>
                    </Link>
                </div>
                </Form>
            </Formik>
                <GoogleLogin/>
            </div>
        </div>
    )
}