import './CharacterInfo.scss';
import CharacterInfoCard from '../3.3.2_CharacterInfoCard/CharacterInfoCard';
import CharacterInfoDemo from '../3.3.1_CharacterInfoDemo/CharacterInfoDemo';
import { useState, useEffect } from 'react';
import useMarvelService from '../../../../services/1_MarvelService/MarvelService';
import LoadingAnimation from '../../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../../0_General/ErrorMessage/ErrorMessage';
import PropTypes from 'prop-types';
import FindCharacter from '../3.3.3_FindCharacter/FindCharacter';
import ErrorBoundary from '../../../0_General/ErrorBoundary/ErrorBoundary';

const CharacterInfo = props => {
  const [char, setChar] = useState(null);
  const { loading, error, getOneCharacter, getOneCharacterByName, clearError } = useMarvelService();

  useEffect(() => {
    updateChar(props);
  }, [props.charId]);

  const updateChar = props => {
    const { charId } = props;

    if (!charId) {
      return;
    }

    clearError();
    getOneCharacter(charId).then(onCharLoaded);
  };

  const onCharLoaded = char => {
    setChar(char);
  };

  const infoDemo = char || loading || error ? null : <CharacterInfoDemo />;
  const hasLoading = loading ? <LoadingAnimation /> : null;
  const hasError = error ? <ErrorMessage /> : null;
  const displyContent = !(loading || error || !char) ? <CharacterInfoCard char={char} /> : null;

  return (
    <section className="contaner_character_info">
      <div className="character_info">
        {infoDemo}
        {hasLoading}
        {hasError}
        {displyContent}
        <ErrorBoundary>
          <FindCharacter />
        </ErrorBoundary>
      </div>
      <img src="/bg_asset.svg" alt="" className="contaner_character_info_background_img" />
    </section>
  );
};

CharacterInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharacterInfo;
