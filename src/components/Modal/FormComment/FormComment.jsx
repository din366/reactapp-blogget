import style from './FormComment.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';

export const FormComment = () => {
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form}>
      <h3 size={14} tsize={18}>Имя авторизованного пользователя</h3>
      <textarea
        className={style.textarea}
        autoFocus
        value={value}
        onChange={handleChange}></textarea>
      <button className={style.btn} onClick={handleClick}>Отправить</button>
    </form>
  );
};

