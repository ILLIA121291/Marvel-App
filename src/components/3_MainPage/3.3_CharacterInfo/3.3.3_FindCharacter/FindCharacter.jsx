import './FindCharacter.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import useMarvelService from '../../../../services/1_MarvelService/MarvelService';
import { Link } from 'react-router-dom';

const FindCharacter = () => {
  const { getOneCharacterByName, clearError } = useMarvelService();

  const [disabeleSeaBtn, setDisabeleSeaBtn] = useState(false);
  const [nameChar, setNameChar] = useState('');
  const [char, setChar] = useState(null);
  const [charNotFind, setCharNotFind] = useState(false);

  useEffect(() => {
    searchChar(nameChar);
  }, [nameChar]);

  const searchChar = nameChar => {
    if (!nameChar) return;

    setDisabeleSeaBtn(true);
    clearError();
    getOneCharacterByName(nameChar).then(onCharLoaded);
  };

  const onCharLoaded = char => {
    if (char) {
      setChar(char);
    } else {
      setCharNotFind(true);
    }
    setDisabeleSeaBtn(false);
  };

  const charWasFind = char ? <CharWasFind nameChar={nameChar} /> : null;
  const charWasNotFind = charNotFind ? <CharWasNotFind /> : null;

  return (
    <div className="find_character">
      <Formik
        initialValues={{
          nameChar: '',
        }}
        validationSchema={Yup.object({
          nameChar: Yup.string().required('This field is required'),
        })}
        onSubmit={values => {
          setNameChar(nameChar => values.nameChar), setChar(null), setCharNotFind(false);
        }}
      >
        <Form>
          <label htmlFor="nameChar">Or find a character by name:</label>
          <br />
          <Field placeholder="Enter name" name="nameChar" type="text" />
          <button className="btn-clas btn-red" disabled={disabeleSeaBtn} type="submit">
            FIND
          </button>
          <ErrorMessage className="message_block error_message" name="nameChar" component="p" />
        </Form>
      </Formik>
      {charWasFind}
      {charWasNotFind}
    </div>
  );
};

const CharWasFind = ({ nameChar }) => {
  return (
    <div className="char_was_find">
      <p className="message_block successful_message">There is! Visit {nameChar} page?</p>
      <Link to={`/${nameChar}`} className="btn-clas btn-grey" type="button">
        TO PAGE
      </Link>
    </div>
  );
};

const CharWasNotFind = () => {
  return <p className="message_block error_message">The character was not found. Check the name and try again</p>;
};

export default FindCharacter;
