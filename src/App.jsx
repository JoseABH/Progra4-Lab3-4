import { useRef, useState } from 'react'
import './App.css'
import Home from './components/Home'


function App() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, seterror] = useState('')
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    if (email === "admin" && password === "1234") {
     
      return true;
    }
    return false;
  }


  const handlelogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const isSuccess = login(email, password);
    if (!isSuccess) {
      seterror("Credenciales incorrectas")
    } else {
      setUser({ email })
    }


  }



  return (
    <>
      <h1>App</h1>
      {
        !user ? (
          <div id="card">
            <h2>Login</h2>
            <input type="email" placeholder='Correo' ref={emailRef} />
            <input type="password" placeholder='Contraseña' ref={passwordRef} />
            <button onClick={handlelogin}> Iniciar secion</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

        ) : (
          <Home email= {user.email}/>
        )
      }
    </>
  )
}

export default App
