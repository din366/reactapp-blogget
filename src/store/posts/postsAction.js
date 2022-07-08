import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {URL_API} from '../../api/const';
import {store} from '../index';
import {postsSlice} from './postsSlice';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    let page = getState().posts.page;
    if (newPage) {
      page = newPage;
      store.dispatch(postsSlice.actions.changePage({page}));
    }

    if (page === 'main') {
      store.dispatch(postsSlice.actions.changePage({page}));
      return;
    }
    const token = getState().tokenReducer.token;
    const after = getState().posts.after;
    const isLast = getState().posts.isLast;
    if (!token || isLast) return;

    return axios(`${URL_API}/${page}?limit=10&${after ?
      `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then((data) => {
      const postsArray = data.data.data;
      if (after) {
        store.dispatch(
          postsSlice.actions.postsRequestSuccessAfter({data: postsArray}));
      } else {
        store.dispatch(
          postsSlice.actions.postsRequestSuccess({data: postsArray}));
      }
    }).catch(err => (err.toString()));
  });


