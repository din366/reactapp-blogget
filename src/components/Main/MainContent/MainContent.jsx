import style from './MainContent.module.css';
/* import PropTypes from 'prop-types'; */

export const MainContent = () => {
  console.log(style);
  return (
    <div>
      <h1 className={style.title}>Стартовая страница</h1>
      <span className={style.welcome}>Добро пожаловать!</span>
      <span className={style.choice}>Выберите категорию</span>
    </div>
  );
};
