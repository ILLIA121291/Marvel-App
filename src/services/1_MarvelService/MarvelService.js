class MarvelService {
  __apiBase = 'https://gateway.marvel.com:443/v1/public/';
  __apiKey = 'apikey=22c95a59120e95d258164f006e3b8fd6';


  getResource = async url => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getOneCharacter = async id => {
    const getRes = await this.getResource(`${this.__apiBase}characters/${id}?${this.__apiKey}`);
    return this._transformOneCharacter(getRes.data.results[0]);
  };

  _transformOneCharacter = char => {
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

  getAllCharacters = async (offset) => {
    const getResAll = await this.getResource(`${this.__apiBase}characters?limit=9&offset=${offset}&${this.__apiKey}`);
    return getResAll.data.results.map(this._transformOneCharacter);
  };
}

export default MarvelService;
