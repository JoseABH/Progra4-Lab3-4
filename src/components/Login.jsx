
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useUserState } from '../Hooks/useUserState'


export default function Login() {

    const { setUser } = useContext(AuthContext)
    const { emailRef, passwordRef, error, login, seterror } = useUserState()


    const handlelogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isSuccess = login(email, password);
        if (!isSuccess) {
            seterror("Credenciales incorrectas")
        } else {
            console.log("Set User State")
            setUser(email)
        }

    }

    return (
        <div id="card">
            <h2>Login</h2>
            <input type="email" placeholder='Correo' ref={emailRef} />
            <input type="password" placeholder='Contraseña' ref={passwordRef} />
            <button onClick={handlelogin}> Iniciar secion</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

    );
}