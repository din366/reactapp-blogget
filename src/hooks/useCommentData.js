import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (prop) => {
  const [data, setData] = useState({});
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${prop}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    }).then(async responce => {
      const test = await responce.json();
      setData([test[0].data.children[0].data,
        test[1].data.children]);
    }).catch(err => {
      console.log(err);
    });
  }, [token, prop]);

  return [data, setData];
};
