import {
  SINGLE_POST_REQUEST,
  SINGLE_POST_REQUEST_ERROR,
  SINGLE_POST_REQUEST_SUCCESS,
} from './singlePostAction';

const initialState = {
  status: 'loading',
  data: {},
  error: '',
};

export const singlePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_POST_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case SINGLE_POST_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        data: action.data,
        error: '',
      };
    case SINGLE_POST_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};
