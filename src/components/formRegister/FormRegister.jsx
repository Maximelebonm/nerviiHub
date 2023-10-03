import './FormRegister.css';
import * as Yup from 'yup';
import { useState } from 'react';
import { GoogleRegister } from "../../components/googleRegister/GoogleRegister"
import { Field, Form, Formik, ErrorMessage } from 'formik';
import nerviiLogo from '../../assets/logo/nerviiBlanc.svg';
import { Link } from 'react-router-dom';
import {postUserRegister} from '../../api/user.api'

export const FormRegister = () => {
   // const [gestionError, setgestionerror] = useState([])
    //console.log(gestionError)

    const formulaire = document.querySelector('form');

    const RegisterSchema = Yup.object({
        surname: Yup.string().required('le champs est obligatoire').min(1,'minimum 1 caractère').max(30,'maximum 20 caractère'),
        name: Yup.string().required('le champs est obligatoire').min(1,'minimum 1 caractère').max(30,'maximum 20 caractère'),
        email: Yup.string().required('le champs est obligatoire').email('le format de mail invalide'),
        password: Yup.string().required('le champ est obligatoire').min(8,'minimum 8 caractère').max(20,'maximum 20 caractère'),
    });

    const defaulValuesRegister = {
        name:'',
        surname:'',
        email:'',
        password: '',
        rememberMe: false,
    };

    const userRegister =  (props) => {
        postUserRegister(props);
        
    }

    return (
        <div id="formRegister">
              <div id="logoRegisterContainer">
                <img src={nerviiLogo} id="formRegisterLogo"/>
            </div>
            <div className='formRegisterContainer'>

  
            <Formik
            initialValues={defaulValuesRegister}
            onSubmit={userRegister}
            validationSchema={RegisterSchema}
            >
                <Form>
                <div className="formRegisterItem">
                    <label className="formRegisterLabel">E-mail : </label>
                    <Field
                        type="email"
                        name="email"
                        placeholder="email"
                        component={''}
                        className="formRegisterInput"
                    
                    />
                    <div className="RegisterErrorContainer">
                    <ErrorMessage
                        name="email"
                        component="small"
                        className="RegisterError"
                    />
                    </div>
                </div>
                <div className="formRegisterItem">
                    <label className="formRegisterLabel">Name : </label>
                    <Field
                        type="text"
                        name="name"
                        placeholder="name"
                        component={''}
                        className="formRegisterInput"
                    
                    />
                    <div className="RegisterErrorContainer">
                    <ErrorMessage
                        name="name"
                        component="small"
                        className="RegisterError"
                    />
                    </div>
                </div>
                <div className="formRegisterItem">
                    <label className="formRegisterLabel">prenom : </label>
                    <Field
                        type="text"
                        name="surname"
                        placeholder="prenom"
                        component={''}
                        className="formRegisterInput"
                    
                    />
                    <div className="RegisterErrorContainer">
                    <ErrorMessage
                        name="surname"
                        component="small"
                        className="RegisterError"
                    />
                    </div>
                </div>
                <div className="formRegisterItem">
                    <label className="formRegisterLabel">Password : </label>
                        <Field
                            type="password"
                            name="password"
                            placeholder="password"
                            component={''}
                            className="formRegisterInput"
                        
                        />
                        <div className="RegisterErrorContainer">
                            <ErrorMessage
                                name="password"
                                component="small"
                                className="RegisterError"
                            />
                        </div>
                </div>
                <div id="ButtonRegisterContainer">
                    <Link to='/login'>
                    <button className="ButtonRegister"> Connection </button>
                    </Link>
                        <button type="submit" className="ButtonRegister"> send </button>
                </div>
                </Form>
            </Formik>
            <GoogleRegister/>
            </div>
        </div>
    )
}