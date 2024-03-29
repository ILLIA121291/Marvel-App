import './CharacterTopPanel.scss';

import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../../services/1_MarvelService/MarvelService';
import setContent from '../../../utils/setContents';

import Button from '../../0_General/Button/Button';
import FindCharacter from '../3.3_CharacterInfo/3.3.3_FindCharacter/FindCharacter';

const CharacterTopPanel = () => {
  const [char, setChar] = useState({});
  const { getOneCharacter, clearError, process, setProcess } = useMarvelService();

  useEffect(() => {
    updataChar();
  }, []);

  const updataChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getOneCharacter(id)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  const setContentMemo = useMemo(() => {
    return setContent(process, RandomCharacter, char, 'Please click on the "TRY IT" button one more time for fix it!');
  }, [process]);

  const onCharLoaded = char => {
    if (char.description.length > 250) {
      char.description = char.description.slice(0, 250) + '...';
    }

    setChar(char);
  };

  const onTryIt = () => {
    updataChar();
  };

  return (
    <section className="character_top_panel">
      <div className="character_top_panel_character">{setContentMemo}</div>
      <div className="character_top_panel_random">
        <img src="/CharacterTopPanel/mjolnir.svg" alt="mjolnir" className="character_top_panel_random_mjolnir" />
        <img src="/CharacterTopPanel/shield.svg" alt="shield" className="character_top_panel_random_shield" />
        <div className="character_top_panel_random_text_block">
          <p>Random character for today!</p>
          <p>Do you want to get to know him better?</p>
          <p>Or choose another one</p>
          <Button titel="TRY IT" className="btn-red" onClick={onTryIt} />
        </div>
      </div>
      <div className="character_top_panel_find">
        <FindCharacter />
      </div>
    </section>
  );
};

const RandomCharacter = props => {
  const { name, description, thumbnail, wiki } = props.data;

  let displayDescrip = description;

  if (description) {
    displayDescrip = description.length > 250 ? description.slice(0, 250) + '...' : description;
  }

  let textColor = displayDescrip.indexOf('Unfortunately,') == 0 ? { color: 'red', fontWeight: 900 } : {};

  return (
    <>
      <div className="character_top_panel_character_image">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="character_top_panel_character_description">
        <h2>{name}</h2>
        <p style={textColor}>{displayDescrip}</p>
        <div className="character_btn">
          <Link to={`/character/${name}`} className="btn-red btn-clas">
            HOMEPAGE
          </Link>
          <a href={wiki} className="btn-grey btn-clas" style={{ color: 'white' }} target="_blank">
            WIKI
          </a>
        </div>
      </div>
    </>
  );
};

export default CharacterTopPanel;
