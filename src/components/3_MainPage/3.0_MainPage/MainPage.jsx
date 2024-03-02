import './MainPage.scss';

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import ErrorBoundary from '../../0_General/ErrorBoundary/ErrorBoundary';

import CharacterTopPanel from '../3.1_CharacterTopPanel/CharacterTopPanel';
import CharacterList from '../3.2_CharacterList/CharacterList';
import CharacterInfo from '../3.3_CharacterInfo/3.3.0_CharacterInfo/CharacterInfo';
import MobileCharacterInfoCard from '../3.3_CharacterInfo/3.3.4_MobileCharacterInfoCard/MobileCharacterInfoCard';

const MainPage = () => {
  const [selectChar, setChar] = useState(null);
  const [stateMobiCharInfo, setStateMobiCharInfo] = useState(false);

  if (window.innerWidth < 1100) {
    stateMobiCharInfo ? disablePageScroll() : enablePageScroll();
  }

  const onCharSelected = id => {
    setChar(id);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information portal" />
        <title>Marvel information portal</title>
      </Helmet>
      <section className="character">
        <ErrorBoundary>
          <CharacterTopPanel />
        </ErrorBoundary>
        <div className="character_main">
          <ErrorBoundary>
            <CharacterList onCharSelected={onCharSelected} setStateMobiCharInfo={setStateMobiCharInfo} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharacterInfo charId={selectChar} />
          </ErrorBoundary>
        </div>
        <MobileCharacterInfoCard
          charId={selectChar}
          stateMobiCharInfo={stateMobiCharInfo}
          setStateMobiCharInfo={setStateMobiCharInfo}
        />
      </section>
    </>
  );
};

export default MainPage;
