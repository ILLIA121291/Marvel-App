import './FindCharacter.scss';

import useMarvelService from '../../../../services/1_MarvelService/MarvelService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
        <Form className="find_character_form">
          <label htmlFor="nameChar" className="find_character_form_label">
            Or find a character by name:
          </label>
          <Field placeholder="Enter name" name="nameChar" type="text" className="find_character_form_input" />
          <button className="btn-clas btn-red find_character_form_btn" disabled={disabeleSeaBtn} type="submit">
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
      <p className="message_block successful_message char_was_find_p">There is! Visit {nameChar} page?</p>
      <Link to={`/character/${nameChar}`} className="btn-clas btn-grey char_was_find_a" type="button">
        TO PAGE
      </Link>
    </div>
  );
};

const CharWasNotFind = () => {
  return <p className="message_block error_message char_was_not_find_p">The character was not found. Check the name and try again</p>;
};

export default FindCharacter;
