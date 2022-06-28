import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';
import {singlePostReducer} from './singlePost/singlePostReducer';

const rootReducer = combineReducers({ // сборка reducers в один reducer
  tokenReducer,
  commentReducer,
  auth: authReducer,
  posts: postsReducer,
  singlePost: singlePostReducer,
});

export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
