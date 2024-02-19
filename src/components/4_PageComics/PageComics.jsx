import ComicsHeader from './4.1_ComicsHeader/ComicsHeader';
import ComicsList from './4.2_ComicsList/ComicsList';
import ComicsDescription from '../6_PageComicsDescription/PageComicsDescription';
import './PageComics.scss';

const PageComics = () => {
  return (
    <section className="comics_main">
      <ComicsHeader />
      <ComicsList />
    </section>
  );
};

export default PageComics;
