import { useState, useEffect } from 'react';
import './CharacterTopPanel.scss';

import Button from '../../0_General/Button/Button';
import useMarvelService from '../../../services/1_MarvelService/MarvelService';
import LoadingAnimation from '../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../0_General/ErrorMessage/ErrorMessage';

const CharacterTopPanel = () => {
  const [char, setChar] = useState({});
  const { loading, error, getOneCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updataChar();
  }, []);

  const updataChar = () => {
    clearError()
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getOneCharacter(id).then(onCharLoaded);
  };

  const onCharLoaded = char => {
    setChar(char);
  };

  const onTryIt = () => {
    updataChar();
  };

  const hasLoading = loading ? <LoadingAnimation /> : null;
  const hasError = error ? <ErrorMessage /> : null;
  const displyContent = !(loading || error) ? <RandomCharacter char={char} /> : null;

  return (
    <section className="character_top_panel">
      <div className="character_top_panel_character">
        {hasLoading}
        {hasError}
        {displyContent}
      </div>
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
    </section>
  );
};

const RandomCharacter = props => {
  const { name, description, thumbnail, homepage, wiki } = props.char;

  let displayDescrip = description;

  if (description) {
    description.length > 250 ? description.slice(0, 250) + '...' : description;
  }

  return (
    <>
      <div className="character_top_panel_character_image">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="character_top_panel_character_description">
        <h2>{name}</h2>
        <p>{displayDescrip}</p>
        <div className="character_btn">
          <a href={homepage} className="btn-red btn-clas" style={{'color' : 'white'}} target="_blank">
            HOMEPAGE
          </a>
          <a href={wiki} className="btn-grey btn-clas" style={{'color' : 'white'}} target="_blank">
            WIKI
          </a>
        </div>
      </div>
    </>
  );
};

export default CharacterTopPanel;
