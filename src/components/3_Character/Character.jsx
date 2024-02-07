import './Character.scss';
import CharacterTopPanel from './3.1_CharacterTopPanel/CharacterTopPanel';
import CharacterList from './3.2_CharacterList/CharacterList';
import CharacterInfo from './3.3_CharacterInfo/CharacterInfo';
import { Component } from 'react';
import ErrorBoundary from '../0_General/ErrorBoundary/ErrorBoundary';

class Character extends Component {
  state = {
    selectChar: null,
  };

  onCharSelected = id => {
    this.setState({ selectChar: id });
  };

  render() {
    return (
      <section className="character">
        <ErrorBoundary>
          <CharacterTopPanel/>
        </ErrorBoundary>
        <div className="character_main">
          <ErrorBoundary>
            <CharacterList onCharSelected={this.onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharacterInfo charId={this.state.selectChar} />
          </ErrorBoundary>
        </div>
      </section>
    );
  }
}

export default Character;
