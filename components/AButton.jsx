

export default function AButton(props) {
  return (
    <a 
      href={props.href}
      className={`btn-login ${props.className}`}>{props.text}</a>
  )
}
