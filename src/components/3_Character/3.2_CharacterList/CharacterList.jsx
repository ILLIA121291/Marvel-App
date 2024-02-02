import './CharacterList.scss';
import CharacterListItem from './CharacterListItem/CharacterListItem';
import Button from '../../0_General/Button/Button'

const CharacterList = () => {
  return (
  <section className='character_list'>
    <div className='character_list_list'>
    <CharacterListItem/>
    <CharacterListItem/>
    <CharacterListItem/>
    <CharacterListItem/>
    <CharacterListItem/>
    <CharacterListItem/>
    <CharacterListItem/>
    </div>
    <div className='character_list_add'>
      <Button titel='LOAD MORE' className='btn-red'/>
    </div>
  </section>
  )
}

export default CharacterList