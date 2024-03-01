import { useState, useEffect } from "react";
import useMarvelService from "../services/1_MarvelService/MarvelService";

const getOneCharacterInfo = (props) => {

  const [char, setChar] = useState(null);
  const { getOneCharacter, clearError, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateChar(props);
  }, [props.charId]);

  const updateChar = props => {
    const { charId } = props;

    if (!charId) {
      return;
    }

      clearError();
      getOneCharacter(charId)
        .then(onCharLoaded)
        .then(() => setProcess('confirmed'));
  };

  const onCharLoaded = char => {
    setChar(char);
  };


  return {process, char}

}

export default getOneCharacterInfo