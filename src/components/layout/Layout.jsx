import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollTopButton from '../ui/ScrollTopButton/ScrollTopButton';
import { Outlet } from 'react-router-dom';

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default Layout;
