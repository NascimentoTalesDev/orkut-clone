const IMG = "https://www.orkut.com/img/orkut-logo.png"
export default function Logo(props) {
  return (
    <img
      src={IMG}
      width={props.width}
      alt="Picture of the author"
    />
  )
};
