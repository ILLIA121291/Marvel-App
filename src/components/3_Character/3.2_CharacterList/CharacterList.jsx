import './CharacterList.scss';
import Button from '../../0_General/Button/Button'
import { Component } from 'react';
import MarvelService from '../../../services/1_MarvelService/MarvelService';
import LoadingAnimation from '../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../0_General/ErrorMessage/ErrorMessage';

class CharacterList extends Component {


  state = {
    charList: [],
    qtyDisplay: 9,
    loading: true,
    error: false,
  }


  marvelServer = new MarvelService()

  componentDidMount() {
    this.updateCharacterList()
  }

  updateCharacterList = () => {
    this.marvelServer
        .getAllCharacters()
        .then(this.onCharAllLoaded)
        .catch(this.onError)
  }

  onCharAllLoaded = (charList) => {
    this.setState({charList, loading: false, })
  }

  onError = () => {
    this.setState ({ loading: false, error: true,})
  }
  
  onLoadMore = () => {
    this.setState({qtyDisplay: this.state.qtyDisplay + 9})
  }




  render() {
      const {charList, qtyDisplay, loading, error } = this.state
      
      const elementsList = charList.slice(0, qtyDisplay).map(value => {
        
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

    return (
      <section className='character_list'>
        <div className='character_list_list'>
        {hasLoading}
        {hasError}
        {displyContent}
        </div>
        <div className='character_list_add'>
          <Button titel='LOAD MORE' className='btn-red' onClick={this.onLoadMore}/>
        </div>
      </section>
      )
  }
}

export default CharacterList