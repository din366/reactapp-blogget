import axios from 'axios';
import {URL_API} from '../../api/const';

export const SINGLE_POST_REQUEST = 'SINGLE_POST_REQUEST';
export const SINGLE_POST_REQUEST_SUCCESS = 'SINGLE_POST_REQUEST_SUCCESS';
export const SINGLE_POST_REQUEST_ERROR = 'SINGLE_POST_REQUEST_ERROR';

export const singlePostRequest = () => ({
  type: SINGLE_POST_REQUEST,
});

export const singlePostRequestSuccess = (data) => ({
  type: SINGLE_POST_REQUEST_SUCCESS,
  data,
});

export const singlePostRequestError = (error) => ({
  type: SINGLE_POST_REQUEST_ERROR,
  error,
});

export const singlePostRequestAsync = (prop) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;
  axios(`${URL_API}/comments/${prop}`, {
    headers: {
      Authorization: `bearer ${token}`
    },
  }).then((data) => {
    const singleArrayData = [data.data[0].data.children[0].data,
      data.data[1].data.children];
    dispatch(singlePostRequestSuccess(singleArrayData));
  }).catch(err => {
    dispatch(singlePostRequestError(err.toString()));
  });
};
