import './CharacterInfo.scss';
import CharacterInfoCard from './3.3.2_CharacterInfoCard/CharacterInfoCard';
import CharacterInfoDemo from './3.3.1_CharacterInfoDemo/CharacterInfoDemo';

const CharacterInfo = () => {
  return (
    <section className="character_info">
      {/* <CharacterInfoDemo/> */}
      <CharacterInfoCard/>
    </section>
  );
};

export default CharacterInfo;
