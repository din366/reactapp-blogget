import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {store} from '../store';

export const useGetPosts = (prop = 'best') => {
  const [data, setData] = useState({});

  const token = store.getState().tokenReducer.token;

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/${prop}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(async responce => {
      const test = await responce.json();
      setData(test.data.children);
    }).catch(err => {
      console.log(err);
    });
  }, [token, prop]);

  return [data, setData];
};
/* prop.handing = best */