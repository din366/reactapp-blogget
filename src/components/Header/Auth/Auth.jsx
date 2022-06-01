/* eslint-disable max-len */
import style from './Auth.module.css';
import PropTypes from 'prop-types';

import {ReactComponent as LoginImage} from './img/login.svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth :
    <LoginImage className={style.svg}/>
    }
  </button>
);

Auth.propTypes = {
  auth: PropTypes.string,
};
