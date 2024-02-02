import Button from '../../../0_General/Button/Button';
import './CharacterInfoCard.scss';

const CharacterInfoCard = () => {
  return (
    <div className="character_info_card">
      <div className="character_info_card_image">
        <img src="/CharacterInfo/loki.svg" alt="loki" />
        <div>
          <h3>LOKI</h3>
          <Button titel="HOMEPAGE" className="btn-red" />
          <Button titel="WIKI" className="btn-grey" />
        </div>
      </div>
      <p className="character_info_card_text">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </p>
      <h4>Comics:</h4>
      <ul className="character_info_card_comics_list">
        <li className="character_info_card_comics_list_li">
          All-Winners Squad: Band of Heroes (2011) #3
        </li>
        <li className="character_info_card_comics_list_li">
          All-Winners Squad: Band of Heroes (2011) #3
        </li>
      </ul>
    </div>
  );
};

export default CharacterInfoCard;
