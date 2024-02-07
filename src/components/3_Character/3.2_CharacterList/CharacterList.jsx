import './CharacterList.scss';
import Button from '../../0_General/Button/Button'
import { Component } from 'react';
import MarvelService from '../../../services/1_MarvelService/MarvelService';
import LoadingAnimation from '../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../0_General/ErrorMessage/ErrorMessage';

class CharacterList extends Component {

  state = {
    charList: [],
    loading: true,
    error: false,
    newCharLoading: false,
    charEnded: false,
    offset: Math.floor(Math.random() * (1 - 1546) + 1546),
  }
  
  marvelServer = new MarvelService()
  
  componentDidMount() {
    this.onLoadMore(this.state.offset)
  }


  onLoadMore = (offset) => {
    this.onCharListLoading(); 
    this.marvelServer
        .getAllCharacters(offset)
        .then(this.onCharAllLoaded)
        .catch(this.onError)
}


  onCharAllLoaded = (newCharList) => {
    let ended = false
    if(newCharList.length < 9) {
      ended = true
    }

    
    this.setState(({offset, charList}) => ({
      charList: [...charList, ...newCharList ], 
      loading: false, 
      newCharLoading: false, 
      offset: offset + 9,
      charEnded: ended,
    }))
  }

  onCharListLoading = () => {
    this.setState({
      newCharLoading: true,
    })
  }


  onError = () => {
    this.setState ({ loading: false, error: true,})
  }
  

  render() {
      const {charList, loading, error, newCharLoading, offset, charEnded } = this.state
      
      const elementsList = charList.map(value => {
        
        return (
          <div key={value.id} className='character_list_item' onClick={ () => this.props.onCharSelected(value.id)}>
          <div className='character_list_item_container_img'>
          <img src={value.thumbnail} alt={value.name} />
          </div>
          <p>{value.name}</p>
        </div>
        )
      })

      const hasLoading = loading ? <LoadingAnimation/> : null;
      const hasError = error ? <ErrorMessage/> : null;
      const displyContent = !(hasLoading || hasError) ? elementsList : null;
      const addButton = charEnded ? <p>Characters are over</p> : <Button titel='LOAD MORE' className='btn-red' onClick={()=>{this.onLoadMore(offset)}} disabele={newCharLoading} />;

    return (
      <section className='character_list'>
        <div className='character_list_list'>
        {hasLoading}
        {hasError}
        {displyContent}
        </div>
        <div className='character_list_add'>
        {addButton}
        </div>
      </section>
      )
  }
}

export default CharacterList