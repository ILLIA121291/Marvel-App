import './ComicsList.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../../services/1_MarvelService/MarvelService';

import Button from '../../0_General/Button/Button';
import LoadingAnimation from '../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../0_General/ErrorMessage/ErrorMessage';

const setContent = (process, Component, newComicsLoading) => {
  switch (process) {
    case 'waiting':
      return <LoadingAnimation />;
    case 'loading':
      return newComicsLoading ? <Component /> : <LoadingAnimation />;
    case 'confirmed':
      return <Component />;
    case 'error':
      return <ErrorMessage />;
    default:
      throw new Error('Unexpected process state');
  }
};

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newComicsLoading, setNewComicsLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);
  const [offset, setOffset] = useState(Math.floor(Math.random() * (1 - 1546) + 1546));

  const { getAllComics, process, setProcess } = useMarvelService();

  useEffect(() => {
    onLoadMore(offset, true);
  }, []);

  const onLoadMore = (offset, initial) => {
    initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
    getAllComics(offset)
      .then(onComicsAllLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onComicsAllLoaded = newComicsList => {
    if (newComicsList.length < 7) {
      setComicsEnded(comicsEnded => true);
    }

    setComicsList(comicsList => [...comicsList, ...newComicsList]);
    setNewComicsLoading(newComicsLoading => false);
    setOffset(offset => offset + 8);
  };

  const elementsList = comicsList => {
    return comicsList.map(value => {
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
  };

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
      <div className="comics_main_comics_list">{setContent(process, () => elementsList(comicsList), newComicsLoading)}</div>
      <div className="comics_main_comics_list_add">{addButton}</div>
    </section>
  );
};

export default ComicsList;
