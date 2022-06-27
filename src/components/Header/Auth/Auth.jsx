/* eslint-disable max-len */
import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {deleteToken} from '../../../store/tokenReducer';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import AuthLoader from './AuthLoader';

export const Auth = () => {
  const [isExitButton, setIsExitButton] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getOut = () => {
    setIsExitButton(!isExitButton);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth({});
  };

  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoader />
        ) : auth.name ? (
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
