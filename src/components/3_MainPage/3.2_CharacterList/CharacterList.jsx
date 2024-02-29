import './CharacterList.scss';

import { useState, useEffect, useMemo } from 'react';

import useMarvelService from '../../../services/1_MarvelService/MarvelService';

import Button from '../../0_General/Button/Button';
import LoadingAnimation from '../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../0_General/ErrorMessage/ErrorMessage';

const setContent = (process, Component, newCharLoading) => {
  switch (process) {
    case 'waiting':
      return <LoadingAnimation />;
    case 'loading':
      return newCharLoading ? <Component /> : <LoadingAnimation />;
    case 'confirmed':
      return <Component />;
    case 'error':
      return <ErrorMessage />;
    default:
      throw new Error('Unexpected process state');
  }
};

const CharacterList = props => {
  const [charList, setCharList] = useState([]);
  const [newCharLoading, setNewCharLoading] = useState(false);
  const [charEnded, setCharEnded] = useState(false);
  const [offset, setOffset] = useState(Math.floor(Math.random() * (1 - 1546) + 1546));

  const { getAllCharacters, process, setProcess } = useMarvelService();

  useEffect(() => {
    onLoadMore(offset, true);
  }, []);

  const onLoadMore = (offset, initial) => {
    initial ? setNewCharLoading(false) : setNewCharLoading(true);

    getAllCharacters(offset)
      .then(onCharAllLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onCharAllLoaded = newCharList => {
    if (newCharList.length < 9) {
      setCharEnded(charEnded => true);
    }

    setCharList(charList => [...charList, ...newCharList]);
    setNewCharLoading(newCharLoading => false);
    setOffset(offset => offset + 9);
  };

  const onEnterPush = (e, id) => {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
      props.onCharSelected(id);
    }
    return;
  };

  const elementsList = charList => {
    return charList.map(value => {
      return (
        <div key={value.id} className="character_list_item" onClick={() => props.onCharSelected(value.id)} tabIndex="0" onKeyDown={e => onEnterPush(e, value.id)}>
          <div className="character_list_item_container_img">
            <img src={value.thumbnail} alt={value.name} />
          </div>
          <p>{value.name}</p>
        </div>
      );
    });
  };

  const elementsListMemo = useMemo(() => {
    return setContent(process, () => elementsList(charList), newCharLoading);
  }, [process]);

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
      <div className="character_list_list">{elementsListMemo}</div>
      <div className="character_list_add">{addButton}</div>
    </section>
  );
};

export default CharacterList;
