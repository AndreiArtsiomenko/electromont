import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollTopButton from '../ui/ScrollTopButton/ScrollTopButton';
import ScrollBottomButton from '../ui/ScrollBottomButton/ScrollBottomButton';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollBottomButton />
      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default Layout;
