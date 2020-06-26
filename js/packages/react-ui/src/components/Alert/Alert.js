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

export const Alert = ({ text = 'Alerta' }) => (
  <div style={{ backgroundColor: 'red' }}>{textToUpper(text)}</div>
);

Alert.propTypes = {
  /* text input  */
  text: PropTypes.string,
};
