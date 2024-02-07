import './Button.scss'

const Button = ({titel, className, onClick, disabele}) => {
  return (
  <button
  className={'btn-clas ' + className}
  onClick={onClick}
  disabled={disabele}
  >{titel}</button>)
}

export default Button