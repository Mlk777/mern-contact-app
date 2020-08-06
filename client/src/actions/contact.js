import axios from 'axios';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CONTACTS,
  CONTACT_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../actions/types';

export const getContacts = () => async dispatch => {
  try {
    const res = await axios.get('/api/contacts');
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

export const addContact = contact => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/contacts', contact, config);

    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`/api/contacts/${id}`);

    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

export const clearContacts = () => async dispatch => {
  dispatch({
    type: CLEAR_CONTACTS,
  });
};

export const updateContact = contact => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `/api/contacts/${contact._id}`,
      contact,
      config
    );
    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data,
    });
    getContacts();
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

export const setCurrent = contact => async dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: contact,
  });
};

export const clearCurrent = () => async dispatch => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

export const filterContacts = text => async dispatch => {
  dispatch({
    type: FILTER_CONTACTS,
    payload: text,
  });
};

export const clearFilter = () => async dispatch => {
  dispatch({
    type: CLEAR_FILTER,
  });
};
