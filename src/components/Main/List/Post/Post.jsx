import style from './Post.module.css';
import PropTypes from 'prop-types';
import Image from './Image/Image';
import Rating from './Rating/Rating';
import TimePost from './TimePost/TimePost';
import DeleteButton from './DeleteButton/DeleteButton';
import {Content} from './Content/Content';

export const Post = ({postData}) => {
  const {
    title,
    author,
    ups,
    created,
    selftext: markdown,
    id,
    thumbnail} = postData;

  return (
    <li className={style.post}>
      <Image title={title} src={thumbnail}/>

      <Content title={title} author={author} markdown={markdown} id={id}/>

      <Rating ups={ups}/>
      <TimePost date={created}/>
      <DeleteButton/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
