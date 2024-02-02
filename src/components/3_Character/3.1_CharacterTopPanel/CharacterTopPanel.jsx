import Button from '../../0_General/Button/Button';
import './CharacterTopPanel.scss';

const CharacterTopPanel = () => {
  return (
    <section className="character_top_panel">
      <div className="character_top_panel_character">
        <img src="/thumbnail.svg" alt="" />
        <div>
          <h2>THOR</h2>
          <p>
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate..
          </p>
          <div className="character_btn">
              <Button titel="HOMEPAGE" className="btn-red" />
              <Button titel="WIKI" className="btn-grey" />
          </div>
        </div>
      </div>
      <div className="character_top_panel_random">
      <img src="/CharacterTopPanel/mjolnir.svg" alt="mjolnir" className='character_top_panel_random_mjolnir'/>
      <img src="/CharacterTopPanel/shield.svg" alt="shield" className='character_top_panel_random_shield'/>
      <div className='character_top_panel_random_text_block'>
        <p>Random character for today!</p>
        <p>Do you want to get to know him better?</p>
        <p>Or choose another one</p>
        <Button
        titel="TRY IT"
        className="btn-red"
        />
      </div>
      </div>
    </section>
  );
};

export default CharacterTopPanel;
