import './ErrorMessage.scss';

import Img from './error.gif';

const ErrorMessage = ({ errmessage = 'Please reload this page!' }) => {
  return (
    <div className="error-message">
      <img src={Img} alt="Error message" />
      <p>Oops, something went wrong!</p>
      <p>{errmessage}</p>
    </div>
  );
};

export default ErrorMessage;
