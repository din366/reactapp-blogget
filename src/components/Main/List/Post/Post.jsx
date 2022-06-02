import style from './Post.module.css';
import PropTypes from 'prop-types';
import Image from './Image/Image';
import Rating from './Rating/Rating';
import TimePost from './TimePost/TimePost';
import DeleteButton from './DeleteButton/DeleteButton';
import {Text} from '../../../../UI/Text';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <Image title={title}/>

      <div className={style.content}>
        <Text As='h2' className={style.title}>
          <Text As='a' size={18} tsize={24}
            className={style.linkPost} href='#post'>{title}</Text>
        </Text>
        <Text As='a' size={12} tsize={14} color='orange'
          className={style.linkAuthor} href="#author">{author}</Text>
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
