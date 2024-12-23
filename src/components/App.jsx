import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import AboutMe from 'views/About';
import Layout from './Layout/Layout';
import { GlobalStyles } from 'utils/GlobalStyle';
// import NotFound from 'views/404/404';

const HomeView = lazy(() => import('views/HomeView'));


export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="loaderStyle"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="about" element={<AboutMe />} />
            {/* <Route path="*" element={<Comm />} /> */}
          </Route>
        </Routes>
        <GlobalStyles />
      </Suspense>
    </>
  );
};

