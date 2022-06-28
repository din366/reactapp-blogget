import style from './ModalNotifications.module.css';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


export const ModalNotifications = ({notificationText}) => (
  ReactDOM.createPortal(
    <div
      className={style.bar}>
      {notificationText}
    </div>,
    document.getElementById('modal-notifications'),
  )
);

ModalNotifications.propTypes = {
  notificationText: PropTypes.string,
};
