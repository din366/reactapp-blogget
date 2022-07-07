import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const singlePostRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then((data) => {
      const singleArrayData = [data.data[0].data.children[0].data,
        data.data[1].data.children];
      return {data: singleArrayData};
    }).catch(err => (err.toString()));
  },
);
