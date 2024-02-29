import './PageComics.scss';

import { Helmet } from 'react-helmet';

import ComicsHeader from '../4.1_ComicsHeader/ComicsHeader';
import ComicsList from '../4.2_ComicsList/ComicsList';

const PageComics = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel Comics Page" />
        <title>Marvel Comics Page</title>
      </Helmet>
      <section className="comics_main">
        <ComicsHeader />
        <ComicsList />
      </section>
    </>
  );
};

export default PageComics;
