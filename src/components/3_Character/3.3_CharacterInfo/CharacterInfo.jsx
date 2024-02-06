import './CharacterInfo.scss';
import CharacterInfoCard from './3.3.2_CharacterInfoCard/CharacterInfoCard';
import CharacterInfoDemo from './3.3.1_CharacterInfoDemo/CharacterInfoDemo';
import { Component } from 'react';
import MarvelService from '../../../services/1_MarvelService/MarvelService';
import LoadingAnimation from '../../0_General/LoadingAnimation/LoadingAnimation';
import ErrorMessage from '../../0_General/ErrorMessage/ErrorMessage';

class CharacterInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };

  marvleService = new MarvelService();

  componentDidMount() {
    this.updateChar()
  }

  componentDidUpdate(prevProps) {
    if(this.props.charId !== prevProps.charId) {
      this.updateChar()
    }
  }

  updateChar = (props) => {
    const { charId } = this.props;

    if (!charId) {return}

    this.marvleService
        .getOneCharacter(charId)
        .then(this.onCharLoaded)
        .catch(this.onError);
  };

  onLoading = () => {
    this.setState({loading: true})
  }

  onCharLoaded = char => {
    this.setState({ char, loading: false });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  render() {
    const { char, loading, error } = this.state;

    const infoDemo = char || loading || error ? null : <CharacterInfoDemo/>;
    const hasLoading = loading ? <LoadingAnimation/> : null;
    const hasError = error ? <ErrorMessage/> : null;
    const displyContent = !(loading || error || !char) ? <CharacterInfoCard char={char}/> : null;


    return (
      <section className="character_info">
        {infoDemo}
        {hasLoading}
        {hasError}
        {displyContent}
      </section>
    );
  }
}

export default CharacterInfo;
