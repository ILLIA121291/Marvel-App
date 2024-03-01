import './MobileCharacterInfoCard.scss';

import getOneCharacterInfo from '../../../../utils/getOneCharacterInfo';
import setContent from '../../../../utils/setContents';
import CharacterInfoCard from '../3.3.2_CharacterInfoCard/CharacterInfoCard';

const MobileCharacterInfoCard = props => {
  const { process, char } = getOneCharacterInfo(props);

  let openCloseMobileCharInfo = props.stateMobiCharInfo ? 'mobile_character_info_card_open' : 'mobile_character_info_card_close';

  return (
    <div className={`mobile_character_info_card  ${openCloseMobileCharInfo}`}>
      <div className="mobile_character_info_card_close_btn">
        <button className="mobile_character_info_card_close_btn_btn" onClick={() => props.setStateMobiCharInfo(false)}>
          x
        </button>
      </div>
      {setContent(process, CharacterInfoCard, char)}
    </div>
  );
};

export default MobileCharacterInfoCard;
