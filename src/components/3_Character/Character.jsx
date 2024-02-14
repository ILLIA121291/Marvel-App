import './Character.scss';
import CharacterTopPanel from './3.1_CharacterTopPanel/CharacterTopPanel';
import CharacterList from './3.2_CharacterList/CharacterList';
import CharacterInfo from './3.3_CharacterInfo/CharacterInfo';
import { useState } from 'react';
import ErrorBoundary from '../0_General/ErrorBoundary/ErrorBoundary';

const Character = () => {
  const [selectChar, setChar] = useState(null);

  const onCharSelected = id => {
    setChar(id);
  };

  return (
    <section className="character">
      <ErrorBoundary>
        <CharacterTopPanel />
      </ErrorBoundary>
      <div className="character_main">
        <ErrorBoundary>
          <CharacterList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharacterInfo charId={selectChar} />
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default Character;
