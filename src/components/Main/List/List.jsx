import style from './List.module.css';
import Post from './Post';
import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext';

export const List = () => {
  const {data} = useContext(postsContext);
  return (
    <ul className={style.list}>
      {!(Object.keys(data).length === 0) && data.map((data) => (
        <Post key={data.data.created} postData={data.data}/>
      ))}
    </ul>
  );
};
