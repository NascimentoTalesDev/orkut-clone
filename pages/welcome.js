
import { checkUser } from '@/helpers/checkUser'
import React from 'react'

export default function welcome(){

  checkUser()

  return (
    <div>welcome</div>
  )
}
