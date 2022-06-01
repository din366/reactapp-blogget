/* eslint-disable max-len */
import style from './Search.module.css';
import {ReactComponent as SearchImage} from './img/search.svg';

export const Search = () => (
  <form className={style.form}>
    <input className={style.search} type="search" />
    <button className={style.button}>
      <SearchImage className={style.svg} />
    </button>
  </form>
);
