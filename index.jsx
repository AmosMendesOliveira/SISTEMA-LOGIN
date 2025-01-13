import { Link,Navigate,useNavigate } from "react-router-dom"
import { useRef } from "react"
import api from '../../../../../API NODE JWP/services/api'


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()


async function handleSubmit(event) {
    event.preventDefault()
try{
    const { data:token } =  api.post('/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value
    })
    localStorage.setItem('token', token)

    navigate('/listar-usuarios')
}catch(error){
    alert('Erro ao logar Usuario')
}
}

return (

    <div className=" max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg  ">
            <h1 className=" text-2xl font-bold mb-6 text-center text-gray-800 "  >Login</h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input ref={emailRef} placeholder="Email" type="email" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none"/>
            <input ref={passwordRef} placeholder="Senha" type="password"  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none"/>
            <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button> 
        </form>
        <Link to={"/cadastro"} className="w-full text-black pt-4 flex justify-center hover:text-blue-800 font-medium " >Não tem uma conta? Cadastrar-se</Link>
        
    </div>

)


}

export default Login