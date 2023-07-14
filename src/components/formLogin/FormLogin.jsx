import './FormLogin.css'
export const FormLogin = () => {
    return (
        <form id="formLogin">
            <label className="formLoginLabel">mail : </label>
            <input className="formLoginInput"></input>
            <label className="formLoginLabel">Password : </label>
            <input className="formLoginInput"></input>
        </form>
    )
}