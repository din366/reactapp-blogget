import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import MainContent from './MainContent';
import ErrorContent from './ErrorContent';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path='/' element={<MainContent />}></Route>
        <Route path='/auth' element={<MainContent />}></Route>
        <Route path='*' element={<ErrorContent />}></Route>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
      </Routes>
    </Layout>
  </main>
);

