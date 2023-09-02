import React from 'react'

export default function InputButton(props) {
  return (
    <input 
        className={`outline-none pl-1 ${props.className}`}
        type={props.type}
        border={props.border}
        placeholder={props.placeholder}
        name={props.name}
    ></input>
  )
}
