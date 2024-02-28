import { useEffect, useState } from 'react';
import useMarvelService from '../../services/1_MarvelService/MarvelService';
import './PageComicsDescription.scss';
import { useParams, Link } from 'react-router-dom';
import LoadingAnimation from '../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../0_General/ErrorMessage/ErrorMessage';
import Page404 from '../5_Page404/Page404';
import { Helmet } from 'react-helmet';

const PageComicsDescription = () => {
  const { comicsId } = useParams();
  const { loading, error, getOneComics, clearError } = useMarvelService();
  const [comics, setComics] = useState({});

  useEffect(() => {
    onLoadComics(comicsId);
    clearError();
  }, [comicsId]);

  const onLoadComics = () => {
    getOneComics(comicsId).then(onComicsAllLoaded);
  };

  const onComicsAllLoaded = comics => {
    setComics(comics);
  };

  const { title, description, price, thumbnail, page } = comics;

  const ComicsPage = () => {
    return (
      <>
        <Helmet>
          <meta name="description" content={`${title} comics book`} />
          <title>{`${title} comics book`}</title>
        </Helmet>
        <div className="comics_description">
          <div className="comics_description_img">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="comics_description_container">
            <header className="comics_description_container_header">
              <h2>{title}</h2>
              <Link to="/comics">Back to all</Link>
            </header>
            <p className="comics_description_text">{description}</p>
            <p>{`${page} pages`}</p>
            <p>Language: en-us</p>
            <p>{`$${price}`}</p>
          </div>
        </div>
      </>
    );
  };

  const hasLoading = loading ? <LoadingAnimation /> : null;
  const hasError = error ? <Page404 /> : null;
  const displyContent = !(hasLoading || hasError) ? <ComicsPage /> : null;

  return (
    <>
      {hasLoading}
      {hasError}
      {displyContent}
    </>
  );
};

export default PageComicsDescription;
