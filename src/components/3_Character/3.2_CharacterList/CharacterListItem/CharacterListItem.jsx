import './CharacterListItem.scss';

const CharacterListItem = ({name, thumbnail}) => {
  return (
    <div className='character_list_item'>
      <div className='character_list_item_container_img'>
      <img src={thumbnail} alt="Character image" />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default CharacterListItem