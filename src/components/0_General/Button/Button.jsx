import './Button.scss'

const Button = ({titel, className, onClick}) => {
  return <button className={'btn-clas ' + className} onClick={onClick}>{titel}</button>
}

export default Button