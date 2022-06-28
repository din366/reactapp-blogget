import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = (prop) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  axios(`${URL_API}/${prop}`, {
    headers: {
      Authorization: `bearer ${token}`
    },
  }).then((data) => {
    const postsArray = data.data.data.children;
    dispatch(postsRequestSuccess(postsArray));
  }).catch(err => {
    dispatch(postsRequestError(err.toString()));
  });
};

