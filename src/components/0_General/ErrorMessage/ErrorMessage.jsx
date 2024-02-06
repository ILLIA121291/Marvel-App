import './ErrorMessage.scss';
import Img from './error.gif'

const ErrorMessage = () => {
  return (
    <div className='error-message'>
      <img src={Img} alt="Error message" />
    </div>
  )
}

export default ErrorMessage