import './CharacterInfoCard.scss';

const CharacterInfoCard = ({ char }) => {
  const { name, thumbnail, homepage, wiki, description, comics } = char;

  let comicsDisplay = null;

  if (comics.length == 0) {
    comicsDisplay = (
      <li 
      key={1} 
      className="character_info_card_comics_list_li"
      style={{fontWeight: 900, textDecoration: 'underline',}}>
        !!! Unfortunately, there is no information about the comics for this character.
      </li>
    );
  }

  if (comics.length > 0) {
    comicsDisplay = comics.slice(0, 10).map((value, i) => {
      return (
        <li key={i} className="character_info_card_comics_list_li">
          {value.name}
        </li>
      );
    });
  }

  return (
    <div className="character_info_card">
      <div className="character_info_card_image">
        <img src={thumbnail} alt={name} />
        <div>
          <h3>{name}</h3>
          <div>
            <a href={homepage} className="btn-clas btn-red" target='_blank'>
              HOMEPAGE
            </a>
            <a href={wiki} className="btn-clas btn-grey" target='_blank'>
              WIKI
            </a>
          </div>
        </div>
      </div>
      <p className="character_info_card_text">{description}</p>
      <h4>Comics:</h4>
      <ul className="character_info_card_comics_list">{comicsDisplay}</ul>
    </div>
  );
};

export default CharacterInfoCard;
