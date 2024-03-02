import './PageCharacterDescription.scss';

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/1_MarvelService/MarvelService';
import setContent from '../../utils/setContents';

const PageCharacterDescription = () => {
  const { nameChar } = useParams();
  const { getOneCharacterByName, clearError, process, setProcess } = useMarvelService();
  const [char, setChar] = useState({});

  useEffect(() => {
    onLoadchar(nameChar);
    clearError();
  }, [nameChar]);

  const onLoadchar = () => {
    getOneCharacterByName(nameChar)
      .then(onCharAllLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onCharAllLoaded = char => {
    setChar(char);
  };

  const { name, description, thumbnail, comics } = char;

  const CharPage = () => {
    let comicsDisplay = null;

    if (comics.length == 0) {
      comicsDisplay = (
        <li key={1} className="character_info_card_comics_list_item" style={{ fontWeight: 900, color: 'red' }}>
          Unfortunately, there is no data about the comics for this character!
        </li>
      );
    } else {
      comicsDisplay = comics.map((value, i) => {
        return (
          <li key={i} className="character_info_card_comics_list_item">
            {value.name}
          </li>
        );
      });
    }

    return (
      <>
        <Helmet>
          <meta name="description" content={`${name} description page`} />
          <title>{`${name} description page`}</title>
        </Helmet>

        <header className="char_description_header">
          <Link to="/" className="char_description_header_link">
            Back to all
          </Link>
        </header>
        <div className="char_description">
          <div className="char_description_img">
            <img src={thumbnail} alt={name} />
          </div>
          <div className="char_description_container">
            <h2 className="char_description_container_titel">{name}</h2>
            <p className="char_description_container_text">{description}</p>
            <ul className="character_info_card_comics_list">{comicsDisplay}</ul>
          </div>
        </div>
      </>
    );
  };

  return <>{setContent(process, CharPage)}</>;
};

export default PageCharacterDescription;
