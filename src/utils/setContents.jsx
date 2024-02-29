import ErrorMessage from '../components/0_General/ErrorMessage/ErrorMessage';
import LoadingAnimation from '../components/0_General/LoadingAnimation/LoadingAnimation';
import CharacterInfoDemo from '../components/3_MainPage/3.3_CharacterInfo/3.3.1_CharacterInfoDemo/CharacterInfoDemo';

const setContent = (process, Component, data, errormessage) => {
  switch (process) {
    case 'waiting':
      return <CharacterInfoDemo />;
    case 'loading':
      return <LoadingAnimation />;
    case 'confirmed':
      return <Component data={data} />;
    case 'error':
      return <ErrorMessage errmessage={errormessage} />;
    default:
      throw new Error('Unexpected process state');
  }
};

export default setContent;
