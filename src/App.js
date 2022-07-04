import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {PostsContextProvider} from './context/postsContext';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
import {Routes, Route} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));
  return (
    <Routes>
      <Route
        path='*'
        element={
          <PostsContextProvider>
            <Header />
            <Main />
          </PostsContextProvider>
        }
      />
    </Routes>
  );
}

export default App;
