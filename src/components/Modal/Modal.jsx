import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentData';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const [data, status] = useCommentsData(id);
  const [isFormShow, setIsFormShow] = useState(false);
  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => { // click in modal overlay
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => { // click Escape button
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && 'Загрузка...'}
        {status === 'error' && 'ошибка'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{data[0].title}</h2>
            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    }
                  }
                }
              }}>
                {data[0].selftext}
              </Markdown>
            </div>
            <p className={style.author}>{data[0].author}</p>
            {!isFormShow && (
              <button className={style.btn} onClick={() => {
                setIsFormShow(true);
              }}>
              Оставить комментарий
              </button>
            )}
            {isFormShow && <FormComment />}
            <Comments comments={data[1]} />
          </>)}

        <button className={style.close} onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
