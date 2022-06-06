import React from 'react';
import PropTypes from 'prop-types';
import {useGetPosts} from '../hooks/useGetPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [postCategory, setPostCategory] = React.useState('best');
  const [data, setData] = useGetPosts(postCategory);
  return (
    <postsContext.Provider value={{data, setData, postCategory,
      setPostCategory}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
