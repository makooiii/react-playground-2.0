
// Much better to be in alphabetical order
interface Props {
  children: string;
  // it will only accept colors that listed, otherwise it will not display any
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => 1;
}




function TestButton({children, color,  onClick} : Props) {
  return (
    <>
    <button type="button" className={'btn btn-'+color} onClick={onClick}>{children}</button>
    </>
  )
}

export default TestButton