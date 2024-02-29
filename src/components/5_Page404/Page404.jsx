import './Page404.scss';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Page404 = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel 404 Page" />
        <title>Marvel 404 Page</title>
      </Helmet>
      <div className="page_not_found">
        <p>404 PAGE NOT FOUND</p>
        <Link to="/">go to Home Page click here</Link>
        <img src="/bg_asset.svg" alt="" />
      </div>
    </>
  );
};

export default Page404;
