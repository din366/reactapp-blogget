/* eslint-disable max-len */
import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';


export const Auth = (prop) => {
  const {token, delToken} = prop;
  const [auth, setAuth] = useState({});
  const [isExitButton, setIsExitButton] = useState(false);

  useAuth(token, setAuth, delToken);

  return (
    <div className={style.container}>
      {auth.name ? (
        <div className={style.btn} onClick={() => {
          (!isExitButton) ? setIsExitButton(true) : setIsExitButton(false);
        }}>
          {isExitButton ? (<button className={style.logout} onClick={() => {
            delToken();
          }}>Выйти</button>) : null}
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
