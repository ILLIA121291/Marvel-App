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
        <div className="comics_description_link_container">
          <Link className="comics_description_link_container_link" to="/comics">
            Back to all
          </Link>
        </div>
        <div className="comics_description">
          <div className="comics_description_img">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="comics_description_container">
            <h2 className="comics_description_container_title">{title}</h2>
            <p className="comics_description_container_text">{description}</p>
            <p className="comics_description_container_page">{`${page} pages`}</p>
            <p className="comics_description_container_languge">Language: en-us</p>
            <p className="comics_description_container_price">{`$${price}`}</p>
          </div>
        </div>
      </>
    );
  };

  return <>{setContent(process, ComicsPage)}</>;
};

export default PageComicsDescription;
