import './CharacterInfo.scss';

import { useState, useEffect } from 'react';

import useMarvelService from '../../../../services/1_MarvelService/MarvelService';
import PropTypes from 'prop-types';
import setContent from '../../../../utils/setContents.jsx';

import CharacterInfoCard from '../3.3.2_CharacterInfoCard/CharacterInfoCard';
import FindCharacter from '../3.3.3_FindCharacter/FindCharacter';
import ErrorBoundary from '../../../0_General/ErrorBoundary/ErrorBoundary';
import getOneCharacterInfo from '../../../../utils/getOneCharacterInfo';

const CharacterInfo = (props) => {

  const {process, char} = getOneCharacterInfo(props)

  
  return (
    <>
    <section className="contaner_character_info" >
      <div className="character_info">
        {setContent(process, CharacterInfoCard, char)}
        <div className="character_info_find">
          <ErrorBoundary>
            <FindCharacter />
          </ErrorBoundary>
        </div>
      </div>
      <img src="/bg_asset.svg" alt="" className="contaner_character_info_background_img" />
    </section>
    </>
  );
};

CharacterInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharacterInfo;
