import { useRouter } from 'next/router'
import { useEffect } from 'react'

export async function checkUser(){
    const router = useRouter() 

    useEffect(() => {
        let token = localStorage.getItem('token')

        if (!token) {
            router.push('/login')
            return
        }
    })

}