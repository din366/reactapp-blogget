import style from './DeleteButton.module.css';
import {ReactComponent as DeleteImage} from './img/deleteButton.svg';
/* import PropTypes from 'prop-types'; */

const DeleteButton = () => (
  <button className={style.delete}>
    <DeleteImage />
  </button>
);

export default DeleteButton;
