import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function textToUpper
 * @description A function that returns uppercase text input
 * @param text
 *
 * @example
 * textToUpper('well') /this will return 'WELL'
 */
const textToUpper = text => text && text.toUpperCase();

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
