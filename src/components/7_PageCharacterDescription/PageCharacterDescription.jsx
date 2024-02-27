import useMarvelService from '../../services/1_MarvelService/MarvelService';
import './PageCharacterDescription.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingAnimation from '../0_General/LoadingAnimation/LoadingAnimation';
import Page404 from '../5_Page404/Page404';

const PageCharacterDescription = () => {
  const { nameChar } = useParams();
  const { loading, error, getOneCharacterByName, clearError } = useMarvelService();
  const [char, setChar] = useState({});

  useEffect(() => {
    onLoadchar(nameChar);
    clearError();
  }, [nameChar]);

  const onLoadchar = () => {
    getOneCharacterByName(nameChar)
    .then(oncharAllLoaded);
  };

  const oncharAllLoaded = char => {
    setChar(char);
  };

  const { name, description, thumbnail } = char;

  const CharPage = () => {
    return (
      <div className="char_description">
        <div className="char_description_img">
          <img src={thumbnail} alt={name} />
        </div>
        <div className="char_description_container">
          <h2>{name}</h2>
          <p className="char_description_text">{description}</p>
        </div>
      </div>
    );
  };

  const hasLoading = loading ? <LoadingAnimation /> : null;
  const hasError = error ? <Page404 /> : null;
  const displyContent = !(hasLoading || hasError) ? <CharPage /> : null;

  return (
    <>
      {hasLoading}
      {hasError}
      {displyContent}
    </>
  );
};

export default PageCharacterDescription;
