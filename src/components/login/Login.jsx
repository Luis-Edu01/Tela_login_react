import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react"
import "./Login.css"

const Login = () => {
 
  const [useremail,setUseremail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(useremail, password)
    console.log("Envio")
  }
 
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>
            <div className="input-field">
                <input 
                type="email" 
                placeholder="E-mail: "
                onChange={(e) => setUseremail(e.target.value)}
                />
                <FaUser className="icon"/>
            </div>
            <div className="input-field">
                <input 
                type="password" 
                placeholder="Senha:"
                onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="icon"/>
            </div>

            <div className="recall-forget">
              <label>
                <input type="checkbox" />
                Manter-me conectado
              </label>
              <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
              <p>Não tem uma conta? <a href="#">Registrar-se</a></p>
            </div>

        </form>
    </div>
  )
}

export default Login