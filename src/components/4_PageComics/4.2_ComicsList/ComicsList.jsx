import Button from '../../0_General/Button/Button';
import './ComicsList.scss';
import { useState, useEffect } from 'react';
import useMarvelService from '../../../services/1_MarvelService/MarvelService';
import LoadingAnimation from '../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../0_General/ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newComicsLoading, setNewComicsLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);
  const [offset, setOffset] = useState(Math.floor(Math.random() * (1 - 1546) + 1546));

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => {
    onLoadMore(offset, true);
  }, []);

  const onLoadMore = (offset, initial) => {
    initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
    getAllComics(offset).then(onComicsAllLoaded);
  };

  const onComicsAllLoaded = newComicsList => {
    if (newComicsList.length < 7) {
      setComicsEnded(comicsEnded => true);
    }

    setComicsList(comicsList => [...comicsList, ...newComicsList]);
    setNewComicsLoading(newComicsLoading => false);
    setOffset(offset => offset + 8);
  };

  const elementsList = comicsList.map(value => {
    const { id, title, thumbnail, price } = value;

    return (
      <div key={id} className="comics_list_card" tabIndex="0">
        <Link to={`/comics/${id}`}>
          <div>
            <img src={thumbnail} alt="" />
          </div>
          <p>{title}</p>
          <p>{price}$</p>
        </Link>
      </div>
    );
  });

  const hasLoading = loading && !newComicsLoading ? <LoadingAnimation /> : null;
  const hasError = error ? <ErrorMessage /> : null;
  const displyContent = !(hasLoading || hasError) ? elementsList : null;

  const addButton = comicsEnded ? (
    <p>Comics are over</p>
  ) : (
    <Button
      titel="LOAD MORE"
      className="btn-red"
      onClick={() => {
        onLoadMore(offset);
      }}
      disabele={newComicsLoading}
    />
  );

  return (
    <section>
      <div className="comics_main_comics_list">
        {hasLoading}
        {hasError}
        {displyContent}
      </div>
      <div className="comics_main_comics_list_add">{addButton}</div>
    </section>
  );
};

export default ComicsList;
