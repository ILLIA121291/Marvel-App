import './Button.scss'

const Button = ({titel, className}) => {
  return <button className={'btn-clas ' + className}>{titel}</button>
}

export default Button