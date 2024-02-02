import './Character.scss'
import CharacterTopPanel from './3.1_CharacterTopPanel/CharacterTopPanel'
import CharacterList from './3.2_CharacterList/CharacterList'
import CharacterInfo from './3.3_CharacterInfo/CharacterInfo'

const Character = () => {
  return (
  <section>
    <CharacterTopPanel/>
    <div className='character_main'>
    <CharacterList/>
    <CharacterInfo/>
    <img src="/bg_asset.svg" alt="" className='character_main_background_img'/>
    </div>
  </section>)
}

export default Character