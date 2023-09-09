import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const route = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {

            setAuthenticated(true)
        }

    }, [])
    

    async function register(user) {

        await authUser(user);

    }

    async function authUser(user){
        
        localStorage.setItem('token', JSON.stringify(user.token))

        console.log("authUser", authenticated);
        
        route.push('/welcome')
    }

    async function login(user) {
        
        await authUser(user)
    }

    async function logout(user) {

        setAuthenticated(false)

        localStorage.removeItem('token')

        route.push('/')
    }

    return { authenticated, register, logout, login }
}
