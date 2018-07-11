import axios from 'axios';

const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';
const FETCH_TIMESHEETS_SUCCESS = 'FETCH_TIMESHEETS_SUCCESS';
const FETCH_SINGLE_TIMESHEET_SUCCESS = 'FETCH_SINGLE_TIMESHEET_SUCCESS';
const SAVE_TIMESHEET_SUCCESS = 'SAVE_TIMESHEET_SUCCESS';
const SAVE_TIMESHEET_FAILURE = 'SAVE_TIMESHEET_FAILURE';
const CLEAR_CURRENT_TIMESHEET = 'CLEAR_CURRENT_TIMESHEET';


export function addFlashMessage(message) {
  console.log('New message: ', message);
  return {
    type: ADD_FLASH_MESSAGE,
    message,
  };
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id,
  };
}

function updateTimesheetsList(timesheets) {
  return {
    type: FETCH_TIMESHEETS_SUCCESS,
    timesheets,
  };
}

export function fetchTimesheets() {
  return (dispatch) => {
    return axios.get('/api/timesheets')
      .then(response => response.data)
      .then(timesheets => dispatch(updateTimesheetsList(timesheets)));
  };
}

function updateCurrentTimesheet(timesheet) {
  return {
    type: FETCH_SINGLE_TIMESHEET_SUCCESS,
    timesheet,
  };
}

export function fetchTimesheetById(id) {
  return (dispatch) => {
    return axios.get(`/api/timesheets/${userId}`)
      .then(response => response.data)
      .then(timesheet => dispatch(updateCurrentTimesheet(timesheet)));
  };
}

function timesheetSaved(statusCode) {
  return (dispatch) => {
    if (statusCode === 200) {
      return dispatch(addFlashMessage({
        type: 'success',
        text: 'Timesheet saved',
      }));
    }
    return dispatch(addFlashMessage({
      type: 'error',
      text: 'Failed to save',
    }));
  };
}

export function saveTimesheet(timesheet) {
  const { userId } = timesheet;

  return (dispatch) => {
    if (userId) {
      return axios.put(`/api/timesheets/${userId}`, timesheet)
        .then(response => response.status)
        .then(statusCode => dispatch(timesheetSaved(statusCode)));
    }
    return axios.post('/api/timesheets/', timesheet)
      .then(response => response.status)
      .then(statusCode => dispatch(timesheetSaved(statusCode)));
  };
}

export function clearCurrentTimesheet() {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch({ type: CLEAR_CURRENT_TIMESHEET });
      resolve();
    });
  };
}