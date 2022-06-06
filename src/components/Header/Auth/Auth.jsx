/* eslint-disable max-len */
import {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';


export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [isExitButton, setIsExitButton] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const getOut = () => {
    setIsExitButton(!isExitButton);
  };

  const logOut = () => {
    delToken();
    clearAuth({});
  };

  /*   useAuth(token, setAuth, delToken); */

  return (
    <div className={style.container}>
      {auth.name ? (
        <div className={style.btn} onClick={getOut}>
          {isExitButton && (<button className={style.logout} onClick={logOut}>Выйти</button>)}
          <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
        </div>
      ) :
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon className={style.svg}/>
      </Text>
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
