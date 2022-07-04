import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {useParams} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

export const List = () => {
  const data = useSelector(state => state.posts.data);
  const afterCountPosts = useSelector(state => state.posts.afterCount);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  console.log(afterCountPosts);

  const testFunc = () => {
    dispatch(postsRequestAsync(null, 'more'));
  };

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);
  return (
    <>
      <div className={style.container}>
        <ul className={style.list}>
          {!(Object.keys(data).length === 0) && data.map((data) => (
            <Post key={data.data.created} postData={data.data}/>
          ))}
          {(afterCountPosts >= 2) ?
            <button onClick={testFunc}>Загрузить еще</button> :
              <li ref={endList} className={style.end}/>}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
