import {useEffect} from 'react';
import {store} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {authLogout, authRequestAsync} from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = store.getState().tokenReducer.token;
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};
