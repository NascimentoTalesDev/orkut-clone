import useAuth from '@/hooks/useAuth'
import { createContext } from 'react'

const context = createContext()

function UseProvider({children}) {
    
    const { authenticated, register, logout, login } = useAuth()
    
    return <context.Provider value={{ authenticated, register, logout, login }} >{children}</context.Provider>
}

export { context, UseProvider }