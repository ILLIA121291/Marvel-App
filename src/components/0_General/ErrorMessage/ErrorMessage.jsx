import './ErrorMessage.scss';
import Img from './error.gif'

const ErrorMessage = () => {
  return (
    <div className='error-message'>
      <img src={Img} alt="Error message" />
      <p>Oops, something went wrong!</p>
      <p>Please reload the page.</p>
    </div>
  )
}

export default ErrorMessage