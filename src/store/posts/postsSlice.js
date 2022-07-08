import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsRequestSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data.children;
      state.error = '';
      state.after = action.payload.data.after;
      state.isLast = !action.payload.data.after;
    },
    postsRequestSuccessAfter: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload.data.children];
      state.error = '';
      state.after = action.payload.data.after;
      state.isLast = !action.payload.data.after;
    },
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    }
  },
});

export default postsSlice.reducer;
