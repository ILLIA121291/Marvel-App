import './Page404.scss';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
  <div className='page_not_found'>
    <p>404 PAGE NOT FOUND</p>
    <Link to='/'>go to Home Page click here</Link>
    <img src="/bg_asset.svg" alt="" />
  </div>)
}

export default Page404