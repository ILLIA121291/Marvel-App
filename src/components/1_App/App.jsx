import './App.scss';
import AppHeader from '../2_AppHeader/AappHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import LoadingAnimation from '../0_General/LoadingAnimation/LoadingAnimation';
import PageCharacterDescription from '../7_PageCharacterDescription/PageCharacterDescription';

const Page404 = lazy(() => import('../5_Page404/Page404'));
const MainPage = lazy(() => import('../3_MainPage/3.0_MainPage/MainPage'));
const PageComics = lazy(() => import('../4_PageComics/PageComics'));
const PageComicsDescription = lazy(() => import('../6_PageComicsDescription/PageComicsDescription'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<LoadingAnimation />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/character/:nameChar" element={<PageCharacterDescription />} />
              <Route path="/comics" element={<PageComics />} />
              <Route path="/comics/:comicsId" element={<PageComicsDescription />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
