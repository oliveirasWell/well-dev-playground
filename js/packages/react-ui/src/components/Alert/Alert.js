import React from 'react';
import PropTypes from 'prop-types';
import { textToUpper } from '@oliveiras-well/es-shared';

const style = { backgroundColor: 'red' };

export const Alert = ({ text = 'Alerta', onClick: onClickInput, index }) => {
  const onClick = () => onClickInput(index);

  return (
    <div style={style} onClick={onClick} onKeyDown={() => {}}>
      {textToUpper(text)}
    </div>
  );
};

Alert.propTypes = {
  /* text input  */
  text: PropTypes.string,
  /* onClick  function */
  onClick: PropTypes.func,
};
