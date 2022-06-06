import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token, delToken} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(responce => {
      if (responce.status === 401) {
        delToken(); // delete token in localStorage if responce error auth
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
        delToken();
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};

/* export const useAuth = (token, setAuth, delToken) => {

useEffect(() => {
if (!token) return;

fetch(`${URL_API}/api/v1/me`, {
  headers: {
    Authorization: `bearer ${token}`
  },
}).then(responce => {
  if (responce.status === 401) {
    delToken(); // delete token in localStorage if responce error auth
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
  });
}, [token]);
}; */
