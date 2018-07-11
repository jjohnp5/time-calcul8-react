import React from 'react';
import PropTypes from 'prop-types';

const Timeheader = (props) => {
  const {
    date,
    toggleWeekend,
    saveTimesheet,
    clearTimesheet,
    onWeekCommencingChange } = props;

  return (
    <div className="row timesheet-header">

        {/* DATE */}
        <div className="col s5 week-commencing card-panel grey lighten-2 z-depth-0">
        <div className="row week-commencing--container">
            <div className="col s5 valign-wrapper week-commencing--container--label">
                <p>
                Week starting:
                </p>
            </div>
          <div className="col s7 week-commencing--container--date">
            <input
              id="first_name"
              type="date"
              className="datepicker"
              value={ date }
              onChange={ onWeekCommencingChange }
            />
          </div>
        </div>
        </div>

        <div className="col s1" />

        <div className="col s6 settings">

            {/* WEEKEND TOGGLE */}
            <div className="col s4">
            <p>
                <input type="checkbox" className="filled-in" id="filled-in-box" onClick={ toggleWeekend } />
                <label htmlFor="filled-in-box">Show weekend</label>
            </p>
            </div>

            {/* SAVE */}
            <div className="col s4">
            <a
                className="waves-effect waves-light green btn"
                onClick={ saveTimesheet }
            >Save</a>
            </div>

            {/* CLEAR */}
            <div className="col s4">
            <a
                className="waves-effect waves-light danger btn"
                onClick={ clearTimesheet }
            >Clear</a>
            </div>
      
        </div>

    </div>
  );
};

Timeheader.propTypes = {
  date: PropTypes.string.isRequired,
  toggleWeekend: PropTypes.func.isRequired,
  saveTimesheet: PropTypes.func.isRequired,
  clearTimesheet: PropTypes.func.isRequired,
  onWeekCommencingChange: PropTypes.func.isRequired,
};

export default Timeheader;