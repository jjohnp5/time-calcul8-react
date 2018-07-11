import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import TimeInput from './TimeInput';


const Calculate = (props) => {
  const { weekday, calculateHours } = props;
  return (
    <a
    className="waves-effect waves-light btn blue lighten-3 grey-text text-darken-2 calculate-button"
    onClick={ () => calculateHours(weekday) }
    >Calculate</a>
  );
};
  
const TimeDay = (props) => {
  const { weekday, day, errors = {}, onChange, calculateHours } = props;
  const { start, lunch, finish, hours } = day;
  const renderCalculateButton = (errorsLocal) => {
    let showButton = false;
    if (!errorsLocal) showButton = true;
    if (isEmpty(errorsLocal)) showButton = true;
    if (!errorsLocal.start && !errorsLocal.lunch && !errorsLocal.finish) showButton = true;
    if (!showButton) return '';
    return <Calculate weekday={ weekday.toLowerCase() } calculateHours={ calculateHours } />;
  };
  return (
    <tr key={ weekday } className="row">
      <td className="col s2"><p className="day">{ weekday }</p></td>
      <td className="col s2">
        <TimeInput
          value={ start }
          field="start"
          weekday={ weekday }
          onChange={ onChange }
          error={ errors.start }
        />
      </td>
      <td className="col s2">
        <TimeInput
          value={ lunch }
          field="lunch"
          onChange={ onChange }
          weekday={ weekday }
          error={ errors.lunch }
        />
      </td>
      <td className="col s2">
        <TimeInput
          value={ finish }
          field="finish"
          onChange={ onChange }
          weekday={ weekday }
          error={ errors.finish }
        />
      </td>
      <td className="col s2">
        <TimeInput
          value={ hours }
          field="hours"
          onChange={ onChange }
          weekday={ weekday }
          error={ errors.hours }
        />
      </td>
      <td className="col s2">
        { renderCalculateButton(errors) }
      </td>
    </tr>
  );
};

Calculate.propTypes = {
    weekday: PropTypes.string.isRequired,
    calculateHours: PropTypes.func.isRequired,
  };
TimeDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  day: PropTypes.shape({
    start: PropTypes.string.isRequired,
    lunch: PropTypes.string.isRequired,
    finish: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    start: PropTypes.string,
    lunch: PropTypes.string,
    finish: PropTypes.string,
    hours: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  calculateHours: PropTypes.func.isRequired,
};

export default TimeDay;