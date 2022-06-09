import style from './SingleComment.module.css';
import PropTypes from 'prop-types';
import TimePost from '../../../Main/List/Post/TimePost/TimePost';

export const SingleComment = ({author, postText, date}) => (
  <li className={style.item}>
    <h3 className={style.author} size={18} tsize={22}>{author}</h3>
    <p className={style.comment} size={14} tsize={18}>{postText}</p>
    {date ? <TimePost date={date} /> : null}
  </li>
);


SingleComment.propTypes = {
  author: PropTypes.string,
  postText: PropTypes.string,
  date: PropTypes.number,
};
