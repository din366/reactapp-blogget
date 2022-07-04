import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {SingleComment} from './SingleComment/SingleComment';

export const Comments = ({comments}) => (
  <ul className={style.list}>
    {(comments.length === 0) ? <p>Комментариев нет</p> :
      (comments.map((data) => data.data && (
        <SingleComment
          author={data.data.author}
          postText={data.data.body}
          key={data.data.created * Math.floor(Math.random() * 10000)}
          date={data.data.created}
        />
      )))}
  </ul>
);


Comments.propTypes = {
  comments: PropTypes.array,
};
