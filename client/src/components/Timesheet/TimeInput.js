import React from 'react';
import PropTypes from 'prop-types';

const TimeInput = (props) => {
  const { error = null, value, onChange, weekday, field } = props;

  return (
    <input
      className={ error ? 'validate invalid' : 'validate' }
      value={ value }
      onChange={ onChange }
      data-day={ weekday.toLowerCase() }
      data-field={ field }
    />
  );
};

TimeInput.propTypes = {
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  error: PropTypes.string,
  weekday: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;