import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {deleteToken, store} from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = store.getState().token;

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(responce => {
      if (responce.status === 401) {
        store.dispatch(deleteToken());
        // delete token in localStorage if responce error auth
      }
      return responce.json();
    })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.log(err);
        setAuth({});
        store.dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
