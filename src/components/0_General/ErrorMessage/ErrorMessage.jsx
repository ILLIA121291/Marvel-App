import './ErrorMessage.scss';

import Img from './error.gif';

const ErrorMessage = ({ errmessage = 'Please reload this page!' }) => {
  return (
    <div className="component_error_message">
      <img className='component_error_message_img' src={Img} alt="Error message" />
      <p className='component_error_message_p' >Oops, something went wrong!</p>
      <p className='component_error_message_p' >{errmessage}</p>
    </div>
  );
};

export default ErrorMessage;
