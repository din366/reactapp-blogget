import {createSlice} from '@reduxjs/toolkit';
import {singlePostRequestAsync} from './singlePostAction';

const initialState = {
  status: 'loading',
  data: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [singlePostRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [singlePostRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload.data;
      state.error = '';
    },
    [singlePostRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default commentsSlice.reducer;
