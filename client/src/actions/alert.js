import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

export const setAlert = (msg, type, timeout = 3500) => async dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { id, msg, type },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, timeout);
};
