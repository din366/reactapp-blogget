import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../store';
import {postsRequestAsync} from '../store/posts/postsAction';

export const useGetPosts = (prop = 'best') => {
  const data = useSelector(state => state.posts.data);
  const token = store.getState().tokenReducer.token;
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync(prop));
  }, [token, prop]);

  return [data, loading];
};
/* prop.handing = best */
