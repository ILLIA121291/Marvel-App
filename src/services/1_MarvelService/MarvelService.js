import useHttp from '../../hooks/http.hook.js'


const useMarvelService = () => {

  const {loading, request, error, clearError} = useHttp()

    const __apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const __apiKey = 'apikey=22c95a59120e95d258164f006e3b8fd6';


  const getOneCharacter = async id => {
    const getRes = await request(`${__apiBase}characters/${id}?${__apiKey}`);
    return _transformOneCharacter(getRes.data.results[0]);
  };


  const getAllCharacters = async (offset) => {
    const getResAll = await request(`${__apiBase}characters?limit=9&offset=${offset}&${__apiKey}`);
    return getResAll.data.results.map(_transformOneCharacter);
  };


  const _transformOneCharacter = char => {
    let displayDescription = char.description == '' ? '!!! Unfortunately, this character does not have a description.' : char.description;

    return {
      id: char.id,
      name: char.name,
      description: displayDescription,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  /*---------------------------------------------------------------------------------------------------------------- */
  /*---------------------------------------------------------------------------------------------------------------- */
  /*---------------------------------------------------------------------------------------------------------------- */

  const getOneComics = async id => {
    const getRes = await request(`${__apiBase}comics/${id}?${__apiKey}`);
    return _transformOneComics(getRes.data.results[0]);
  };



  const getAllComics = async (offset) => {
    const getResAll = await request(`${__apiBase}comics?limit=8&offset=${offset}&${__apiKey}`);
    return getResAll.data.results.map(_transformOneComics);
  };


  const _transformOneComics = comics => {
    let displayDescription = comics.description == '' ? '!!! Unfortunately, this character does not have a description.' : comics.description;

    return {
      id: comics.id,
      title: comics.title,
      description: displayDescription,
      page: comics.pageCount,
      price: comics.prices[0].price,
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
    };
  };

  /*---------------------------------------------------------------------------------------------------------------- */
  /*---------------------------------------------------------------------------------------------------------------- */
  /*---------------------------------------------------------------------------------------------------------------- */



  const getOneCharacterByName = async nameChar => {
    const getRes = await request(`${__apiBase}characters?name=${nameChar}&${__apiKey}`);
    
    if (getRes.data.results.length >= 1) {
      return _transformOneCharacter(getRes.data.results[0]);
    } else {
      return false
    }
  };









  return {
    loading, 
    error, 
    clearError, 
    getOneCharacter, 
    getAllCharacters, 
    getAllComics, 
    getOneComics, 
    getOneCharacterByName,
  }
}

export default useMarvelService;
