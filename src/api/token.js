export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';
  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');
    setToken(token);
  }

  if (localStorage.getItem('bearer', token)) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};

/* import {useState, useEffect} from 'react';

export const useToken = ({state}) => {
  const [token, setToken] = useState(state);

  const delToken = () => {
    localStorage.removeItem('bearer');
    location.href = 'http://localhost:3000';
  };

  useEffect(() => {

  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  return [token, delToken];
};
 */
