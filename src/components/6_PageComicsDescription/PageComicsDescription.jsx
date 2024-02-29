import './PageComicsDescription.scss';

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useMarvelService from '../../services/1_MarvelService/MarvelService';
import setContent from '../../utils/setContents';

const PageComicsDescription = () => {
  const { comicsId } = useParams();
  const { getOneComics, clearError, process, setProcess } = useMarvelService();
  const [comics, setComics] = useState({});

  useEffect(() => {
    onLoadComics(comicsId);
    clearError();
  }, [comicsId]);

  const onLoadComics = () => {
    getOneComics(comicsId)
      .then(onComicsAllLoaded)
      .then(() => setProcess('confirmed'));
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

  return <>{setContent(process, ComicsPage)}</>;
};

export default PageComicsDescription;
