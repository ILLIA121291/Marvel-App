import './Character.scss'
import CharacterTopPanel from './3.1_CharacterTopPanel/CharacterTopPanel'
import CharacterList from './3.2_CharacterList/CharacterList'
import CharacterInfo from './3.3_CharacterInfo/CharacterInfo'
import { Component } from 'react'

class Character extends Component {

  state = { 
    selectChar: null
  }

  onCharSelected = (id) => {
    this.setState({selectChar: id})
  }


render () {

  return (
    <section className='character'>
      <CharacterTopPanel/>
      <div className='character_main'>
      <CharacterList onCharSelected={this.onCharSelected}/>
      <CharacterInfo charId={this.state.selectChar}/>
      <img src="/bg_asset.svg" alt="" className='character_main_background_img'/>
      </div>
    </section>)
}
}

export default Character