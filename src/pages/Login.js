import { useState } from "react"
import {login} from "../firebase"
import {login as loginHandle} from "../store/auth"
import { useNavigate } from "react-router-dom"

export default function Login () {

    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleSubmit = async e => {
    e.preventDefault()
    
    const user = await login(email,password)
if (user) {
    navigate('/', {
        replace: true
    })
    }
    }
    

    return (
        <form className="max-w-xl mx-auto grid gap-y-4 py-4" onSubmit={handleSubmit}>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-posta
                </label>
                <div className="mt-1">
                    <input
                    type="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500"
                    placeholder="you@example.com"
                    value={email} onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Parola
                </label>
                <div className="mt-1">
                    <input
                    type="password"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500"
                    placeholder="******"
                    value={password} onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>

        <div>
        <button disabled={!email || !password} 
        className="bg-blue-500 text-white disabled:opacity-20 cursor-pointer px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300" 
        type="submit" >
            Giriş yap
            </button>
        </div>
      </form>
    )
}