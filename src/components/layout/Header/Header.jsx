// import { NavLink } from 'react-router-dom';
// import styles from './Header.module.css';

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <nav>
//         <NavLink to="/">Главная</NavLink>
//         <NavLink to="/services">Услуги</NavLink>
//         <NavLink to="/pricing">Цены</NavLink>
//         <NavLink to="/portfolio">Портфолио</NavLink>
//         <NavLink to="/contacts">Контакты</NavLink>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <span className={styles.logo}>Электромонтаж</span>

          <div className={styles.links}>
            <NavLink to="/" end>Главная</NavLink>
            <NavLink to="/services">Услуги</NavLink>
            <NavLink to="/pricing">Цены</NavLink>
            <NavLink to="/portfolio">Портфолио</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
