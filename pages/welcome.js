
import PrivateRoute from '@/components/PrivateRoute'
import { AuthContext } from '@/context/authContext'
import React, { useContext } from 'react'

export default function welcome(){

  const { user, setUser } = useContext(AuthContext)

  return (
    
    <div>{user} welcome</div>
    
  )
}
