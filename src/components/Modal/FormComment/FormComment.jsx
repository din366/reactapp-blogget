import style from './FormComment.module.css';
import {useRef} from 'react';

export const FormComment = () => {
  const commentRef = useRef(null);

  const handleClick = e => {
    console.log(commentRef.current.value);
  };

  return (
    <form className={style.form}>
      <h3 size={14} tsize={18}>Имя авторизованного пользователя</h3>
      <textarea className={style.textarea}
        ref={commentRef} autoFocus></textarea>
      <button className={style.btn} onClick={handleClick}>Отправить</button>
    </form>
  );
};

