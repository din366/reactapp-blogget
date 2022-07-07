import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../store';
import {singlePostRequestAsync} from '../store/singlePost/singlePostAction';

export const useCommentsData = (prop) => {
  const data = useSelector(state => state.comments.data);
  const token = store.getState().tokenReducer.token;
  const status = useSelector(state => state.comments.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singlePostRequestAsync(prop));
  }, [token, prop]);

  return [data, status];
};
