import style from './Post.module.css';
import PropTypes from 'prop-types';
import Image from './Image/Image';
import Rating from './Rating/Rating';
import TimePost from './TimePost/TimePost';
import DeleteButton from './DeleteButton/DeleteButton';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <Image title={title}/>

      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href='#post'>{title}</a>
        </h2>
        <a className={style.linkAuthor} href="#author">{author}</a>
      </div>

      <Rating ups={ups}/>
      <TimePost date={date}/>
      <DeleteButton/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
