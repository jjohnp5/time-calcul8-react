import React from 'react';
import PropTypes from 'prop-types';

import Day from './TimeDay';

import { notWeekend, weekdays } from '../../util/moment';

const Timetable = (props) => {
  const { showWeekend, timesheet, errors, onChange, calculateHours, total } = props;
  console.log('SHOW WEEKEND: ', showWeekend);
  const renderDays = () => {
    const calendarDays = weekdays
      .map((day) => {
        const weekday = day.toLowerCase();
        return (
          <Day
            weekday={ day }
            day={ timesheet.days[weekday] }
            errors={ errors[weekday] }
            onChange={ onChange }
            key={ day }
            calculateHours={ calculateHours }
          />
        );
      });
    if (!showWeekend) {
      return calendarDays.filter(notWeekend);
    }
    return calendarDays;
  };

  return (
    <div className="row">
      <table>
        <thead>
          <tr className="row">
            <th className="col s2" />
            <th className="col s2">Start</th>
            <th className="col s2">Lunch</th>
            <th className="col s2">Finish</th>
            <th className="col s2">Hours</th>
            <th className="col s2" />
          </tr>
        </thead>

        <tbody>
          { renderDays() }
        </tbody>

        <tfoot>
          <tr className="row">
            <th className="col s2" />
            <th className="col s2" />
            <th className="col s2" />
            <th className="col s2" />
            <th className="col s2">{ total }</th>
            <th className="col s2" />
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const dayPropTypes = {
  start: PropTypes.string.isRequired,
  lunch: PropTypes.string.isRequired,
  finish: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
};

Timetable.propTypes = {
  showWeekend: PropTypes.bool.isRequired,
  timesheet: PropTypes.shape({
    week_commencing: PropTypes.string.isRequired,
    days: PropTypes.shape({
      monday: PropTypes.shape(dayPropTypes).isRequired,
      tuesday: PropTypes.shape(dayPropTypes).isRequired,
      wednesday: PropTypes.shape(dayPropTypes).isRequired,
      thursday: PropTypes.shape(dayPropTypes).isRequired,
      friday: PropTypes.shape(dayPropTypes).isRequired,
      saturday: PropTypes.shape(dayPropTypes).isRequired,
      sunday: PropTypes.shape(dayPropTypes).isRequired,
    }).isRequired,
  }).isRequired,
  
  errors: PropTypes.shape({
    start: PropTypes.string,
    lunch: PropTypes.string,
    finish: PropTypes.string,
    hours: PropTypes.string,
  }).isRequired,

  onChange: PropTypes.func.isRequired,
  calculateHours: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};

export default Timetable;