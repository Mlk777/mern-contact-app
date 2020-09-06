import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../actions/types';

const initialState = {
  contactsList: null,
  current: null,
  filtered: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contactsList: payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contactsList: [payload, ...state.contactsList],
        loading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contactsList: state.contactsList.map(contact =>
          contact._id === payload._id ? payload : contact
        ),
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contactsList: state.contactsList.filter(
          contact => contact._id !== payload
        ),
        loading: false,
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contactsList: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contactsList.filter(contact => {
          const regex = new RegExp(`${payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
