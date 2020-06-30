import React from 'react';
import { AlertContext } from '../../context/Alert/AlertContext';

const AlertInput = () => {
  const { addAlert } = React.useContext(AlertContext);
  const [alertText, setAlertText] = React.useState('');

  const handleClickInput = () => {
    addAlert(alertText);
  };

  const handleChangeInput = event => {
    setAlertText(event.target.value);
  };

  return (
    <>
      <input onChange={handleChangeInput} defaultValue="" />
      <button onClick={handleClickInput} type="button">
        Alertar
      </button>
    </>
  );
};

export { AlertInput };
