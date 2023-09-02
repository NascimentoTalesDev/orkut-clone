

export default function Button(props) {
  return (
    <button 
      className={`btn-login ${props.className}`}>{props.text}</button>
  )
}
