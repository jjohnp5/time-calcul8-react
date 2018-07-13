import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import clone from 'lodash/clone';


import Timeheader from './TimeHeader';
import Timetable from './TimeTable';

import { saveTimesheet } from '../../actions/timesheet';

import { calculateHours, calculateTotalHours } from '../../util/moment';

//import './TimesStyle.scss';

class Timesheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesheet: props.currentTimesheet,
      showWeekend: false,
      errors: {},
    };

    this.calculateHours = this.calculateHours.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleWeekend = this.toggleWeekend.bind(this);
    this.saveTimesheet = this.saveTimesheet.bind(this);
    this.clearTimesheet = this.clearTimesheet.bind(this);
    this.onWeekCommencingChange = this.onWeekCommencingChange.bind(this);
  }

  onChange(event) {
    const { day, field } = event.target.dataset;
    const { value } = event.target;
    let newState = clone(this.state);
    newState = this.validate(newState, day, field, value);
    newState.timesheet.days[day][field] = value;
    this.setState(newState);
  }

  toggleWeekend() {
    this.setState({
      showWeekend: !this.state.showWeekend,
    });
  }

  calculateHours(day) {
    const { start, lunch, finish } = this.state.timesheet.days[day];
    const newState = clone(this.state);
    this.state.timesheet.days[day].hours = calculateHours(start, lunch, finish);
    this.setState(newState);
  }

  saveTimesheet() {
    const timesheet = this.state.timesheet;
    this.props.saveTimesheet(timesheet);
  }

  clearTimesheet() {
    const blankDay = { start: '', lunch: '', finish: '', hours: '' };
    const newState = clone(this.state);
    newState.timesheet.days = {
      monday: clone(blankDay),
      tuesday: clone(blankDay),
      wednesday: clone(blankDay),
      thursday: clone(blankDay),
      friday: clone(blankDay),
      saturday: clone(blankDay),
      sunday: clone(blankDay),
    };
    this.setState(newState);
  }

  onWeekCommencingChange(event) {
    const { value } = event.target;
    const newState = clone(this.state);
    newState.timesheet.week_commencing = value;
    this.setState(newState);
  }

  render() {
    //const date = moment(this.props.currentTimesheet.week_commencing).format('YYYY-MM-DD');
    const { showWeekend } = this.state;
    const total = calculateTotalHours(this.state.timesheet);
    
    return (
    <div className="container">
        <div className="section">
            <div className="row">
                <Timeheader
                    //date={ date }
                    toggleWeekend={ this.toggleWeekend }
                    saveTimesheet={ this.saveTimesheet }
                    clearTimesheet={ this.clearTimesheet }
                    onWeekCommencingChange={ this.onWeekCommencingChange }
                />

                <Timetable
                    showWeekend={ showWeekend }
                    timesheet={ this.state.timesheet }
                    errors={ this.state.errors }
                    onChange={ this.onChange }
                    calculateHours={ this.calculateHours }
                    total={ total }
                />
            </div>
        </div>
    </div>
    );
  }
}

// const dayPropTypes = {
//   start: PropTypes.string.isRequired,
//   lunch: PropTypes.string.isRequired,
//   finish: PropTypes.string.isRequired,
//   hours: PropTypes.string.isRequired,
// };

// Timesheet.propTypes = {
//   currentTimesheet: PropTypes.shape({
//     week_commencing: PropTypes.string.isRequired,
//     days: PropTypes.shape({
//       monday: PropTypes.shape(dayPropTypes).isRequired,
//       tuesday: PropTypes.shape(dayPropTypes).isRequired,
//       wednesday: PropTypes.shape(dayPropTypes).isRequired,
//       thursday: PropTypes.shape(dayPropTypes).isRequired,
//       friday: PropTypes.shape(dayPropTypes).isRequired,
//       saturday: PropTypes.shape(dayPropTypes).isRequired,
//       sunday: PropTypes.shape(dayPropTypes).isRequired,
//     }).isRequired,
//   }).isRequired,
//   saveTimesheet: PropTypes.func.isRequired,
// };

function mapStateToProps(state) {
  return {
    currentTimesheet: state.currentTimesheet,
  };
}

export default connect(mapStateToProps, { saveTimesheet })(Timesheet);