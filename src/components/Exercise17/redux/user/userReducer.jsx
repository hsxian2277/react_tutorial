import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userTypes';

const initialState = {
  isLoading: false,
  users: [],
  error: '',
};

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  };
};

export default userReducer;
