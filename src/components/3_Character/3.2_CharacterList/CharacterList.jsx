import './CharacterList.scss';
import Button from '../../0_General/Button/Button';
import { useState, useEffect, useRef } from 'react';
import MarvelService from '../../../services/1_MarvelService/MarvelService';
import LoadingAnimation from '../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../0_General/ErrorMessage/ErrorMessage';

const CharacterList = props => {
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newCharLoading, setNewCharLoading] = useState(false);
  const [charEnded, setCharEnded] = useState(false);
  const [offset, setOffset] = useState(Math.floor(Math.random() * (1 - 1546) + 1546));

  const marvelServer = new MarvelService();

  useEffect(() => {
    onLoadMore(offset);
  }, []);

  const onLoadMore = offset => {
    onCharListLoading();
    marvelServer.getAllCharacters(offset).then(onCharAllLoaded).catch(onError);
  };

  const onCharListLoading = () => {
    setNewCharLoading(true);
  };

  const onCharAllLoaded = newCharList => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList(charList => [...charList, ...newCharList]);
    setLoading(loading => false);
    setNewCharLoading(newCharLoading => false);
    setOffset(offset => offset + 9);
    setCharEnded(charEnded => ended);
  };

  const onError = () => {
    setLoading(loading => false);
    setError(error => true);
  };

  const onEnterPush = (e, id) => {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
      props.onCharSelected(id);
    }
    return
  };

  const elementsList = charList.map(value => {
    return (
      <div key={value.id} className="character_list_item" onClick={() => props.onCharSelected(value.id)} tabIndex="0" onKeyDown={e => onEnterPush(e, value.id)}>
        <div className="character_list_item_container_img">
          <img src={value.thumbnail} alt={value.name} />
        </div>
        <p>{value.name}</p>
      </div>
    );
  });

  const hasLoading = loading ? <LoadingAnimation /> : null;
  const hasError = error ? <ErrorMessage /> : null;
  const displyContent = !(hasLoading || hasError) ? elementsList : null;
  const addButton = charEnded ? (
    <p>Characters are over</p>
  ) : (
    <Button
      titel="LOAD MORE"
      className="btn-red"
      onClick={() => {
        onLoadMore(offset);
      }}
      disabele={newCharLoading}
    />
  );

  return (
    <section className="character_list">
      <div className="character_list_list">
        {hasLoading}
        {hasError}
        {displyContent}
      </div>
      <div className="character_list_add">{addButton}</div>
    </section>
  );
};

export default CharacterList;
