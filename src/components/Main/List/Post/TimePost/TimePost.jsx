import style from './TimePost.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

const TimePost = (props) => (
  <time className={style.date} dateTime={props.date}>
    {formatDate(props.date)}
  </time>
);

TimePost.propTypes = {
  date: PropTypes.string,
};

export default TimePost;
