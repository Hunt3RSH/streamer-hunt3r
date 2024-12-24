import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = () => (
    <div>
      <Header />
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
        <Outlet />
    </Suspense>
    <Footer />
    </div>
);

export default Layout;