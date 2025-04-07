import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout,emailVerificaiton } from "../firebase"
import {logout as logoutHandle} from "../store/auth"
import { useNavigate } from "react-router-dom"
import UpdateProfile from "../components/UpdateProfile"

export default function Home () {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)
    const handleLogout = async () => {
        await logout()
        dispatch(logoutHandle())
        navigate('/login', {
            replace: true
        })
    }

    const handleVerification = async () => {
await emailVerificaiton()
    }

    if (user) {
        return (
            <div className="max-w-2xl mx-auto py-5">
                <h1 className="flex gap-x-4 items-center">
                    {user.photoURL && <img src={user.photoURL} className="w-10 h-10 rounded-full"/> }
                    Oturum Açık ({user.email}) 
                <button onClick={handleLogout} className="h-8 rounded px-4 text-sm text-white bg-indigo-700">Çıkış Yap</button>
                {!user.emailVerified && <button onClick={handleVerification} className="h-8 rounded px-4 text-sm text-white bg-indigo-700">E-posta Onayla</button>}
                </h1>

<UpdateProfile/>

            </div>
        )
    }

    return (
        
        
        <div className="mb-5 flex justify-start gap-5 mt-10 ml-3">
        
       <Link to="/register" className="h-8 pt-1 text-center rounded px-4 text-sm text-white bg-indigo-700">KAYIT OL</Link>
       <Link to="/login" className="h-8 pt-1 rounded px-4 text-sm text-white bg-indigo-700">GİRİŞ YAP</Link>
       </div>
     
    )
}