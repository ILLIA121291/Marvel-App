import './CharacterList.scss';
import CharacterListItem from './CharacterListItem/CharacterListItem';
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
      const elemntDisplay = charList.slice(0, qtyDisplay)

      const elementsList = elemntDisplay.map(value => {
        const {id, ...elemProps} = {...value}
        return <CharacterListItem 
        key={id}
        {...value}
        />
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