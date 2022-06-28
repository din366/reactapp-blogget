import style from './List.module.css';
import Post from './Post';
import AuthLoader from '../../../UI/AuthLoader';
import {useGetPosts} from '../../../hooks/useGetPosts';

export const List = () => {
  const [data, loading] = useGetPosts();
  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoader size={60} />
        ) : (
          <ul className={style.list}>
            {!(Object.keys(data).length === 0) && data.map((data) => (
              <Post key={data.data.created} postData={data.data}/>
            ))}
          </ul>
      )}
    </div>
  );
};
