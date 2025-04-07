import { useState } from "react"
import { update,auth } from "../firebase"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/auth"

export default function UpdateProfile() {

    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)
    const [displayName, setDisplayName] = useState(user.displayName || "")
    const [avatar, setAvatar] = useState(user.photoURL || "")

const handleSubmit = async e => {
    e.preventDefault()
    await update({
        displayName,
        photoURL: avatar
    })
    console.log(auth.currentUser)
    dispatch(login(auth.currentUser))
}

    return (
        <form onSubmit={handleSubmit} className="grid gap-y-4">
            <h1 className="text-xl font-bold mb-4">Profili Güncelle</h1>
        <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Ad-Soyad
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500"
                    placeholder="John doe"
                    value={displayName} onChange={e => setDisplayName(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Fotograf
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500"
                    placeholder="John doe"
                    value={avatar} onChange={e => setAvatar(e.target.value)}
                    />
                </div>
            </div>

            <div>
        <button 
        className="bg-blue-500 text-white disabled:opacity-20 cursor-pointer px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300" 
        type="submit" >
            Güncelle
            </button>
        </div>

            </form>
    )
}

