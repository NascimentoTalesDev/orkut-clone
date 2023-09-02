import React from 'react'

export default function TextArea(props) {
  return (
    <textarea 
        className={`outline-none pl-1 ${props.className}`}
        rows={props.rows}
        cols={props.cols}
        placeholder={props.placeholder}
        name={props.name}
    >{props.content}</textarea>
  )
}
