import './App.scss';
import AppHeader from '../2_AppHeader/AappHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from '../3_MainPage/MainPage';
import PageComics from '../4_PageComics/PageComics';
import Page404 from '../5_Page404/Page404';
import PageComicsDescription from '../6_PageComicsDescription/PageComicsDescription';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<PageComics />} />
            <Route path="/comics/:comicsId" element={<PageComicsDescription />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
