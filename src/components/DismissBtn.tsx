
interface Props {
    onClick: () => void
}

function DismissBtn({onClick} : Props) {
  return (
    <button type="button" className="btn btn-alert" onClick={onClick}>Click me</button> 
  )
}

export default DismissBtn