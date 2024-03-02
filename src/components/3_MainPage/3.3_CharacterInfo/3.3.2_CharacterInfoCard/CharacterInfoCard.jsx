import './CharacterInfoCard.scss';

import { Link } from 'react-router-dom';

const CharacterInfoCard = ({ data }) => {
  const { name, thumbnail, wiki, description, comics } = data;

  let textColor = description.indexOf('Unfortunately,') == 0 ? { color: 'red', fontWeight: 900 } : {};

  let comicsDisplay = null;

  if (comics.length == 0) {
    comicsDisplay = (
      <li key={1} className="character_info_card_comics_list_item" style={{ fontWeight: 900, color: 'red' }}>
        Unfortunately, there is no data about the comics for this character!
      </li>
    );
  }

  if (comics.length > 0) {
    comicsDisplay = comics.slice(0, 10).map((value, i) => {
      return (
        <li key={i} className="character_info_card_comics_list_item">
          {value.name}
        </li>
      );
    });
  }

  return (
    <div className="character_info_card">
      <header className="character_info_card_header">
        <img className="character_info_card_header_img" src={thumbnail} alt={name} />
        <div className="character_info_card_header_contaner">
          <h3 className="character_info_card_header_contaner_name">{name}</h3>
          <div className="character_info_card_header_contaner_btns">
            <Link to={`/character/${name}`} className="btn-clas btn-red">
              HOMEPAGE
            </Link>
            <a href={wiki} className="btn-clas btn-grey" target="_blank">
              WIKI
            </a>
          </div>
        </div>
      </header>
      <p className="character_info_card_description" style={textColor}>
        {description}
      </p>
      <h4 className="character_info_card_titel_list">Comics:</h4>
      <ul className="character_info_card_comics_list">{comicsDisplay}</ul>
    </div>
  );
};

export default CharacterInfoCard;
