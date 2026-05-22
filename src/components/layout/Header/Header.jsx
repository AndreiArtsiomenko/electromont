import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../../ui/Container/Container';
import Logo from '../../ui/Logo/Logo';
import PhoneIcon from '../../ui/icons/PhoneIcon';
import BurgerMenuIcon from '../../ui/icons/BurgerMenuIcon';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const navLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  const closeMenu = () => setIsMenuOpen(false);

  const headerClassName = `${styles.header} ${
    isHomePage ? styles.headerHome : styles.headerInner
  }`;

  return (
    <>
      <header className={headerClassName}>
        <Container>
          <div className={styles.inner}>
            <Link to="/" className={styles.logo} onClick={closeMenu}>
              <Logo />
            </Link>

            <nav className={styles.nav}>
              <NavLink to="/" className={navLinkClass}>
                Главная
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Услуги
              </NavLink>
              <NavLink to="/pricing" className={navLinkClass}>
                Цены
              </NavLink>
              <NavLink to="/portfolio" className={navLinkClass}>
                Портфолио
              </NavLink>
              <NavLink to="/blog" className={navLinkClass}>
                Блог
              </NavLink>
              <NavLink to="/contacts" className={navLinkClass}>
                Контакты
              </NavLink>
            </nav>

            <div className={styles.contactBlock}>
              <div className={styles.contactWrap}>
                <PhoneIcon className={styles.contactIcon} />

                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Позвонить нам</span>
                  <a className={styles.phone} href="tel:+375293315305">
                    +375 (29) 331-53-05
                  </a>
                </div>
              </div>

              <button
                type="button"
                className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
                aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <BurgerMenuIcon className={styles.menuIcon} isOpen={isMenuOpen} />
              </button>
            </div>

            {isMenuOpen && (
              <div className={styles.mobileMenuPanel}>
                <button
                  type="button"
                  className={styles.mobileMenuClose}
                  aria-label="Закрыть меню"
                  onClick={closeMenu}
                >
                  <BurgerMenuIcon className={styles.menuIcon} isOpen />
                </button>

                <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                  Главная
                </NavLink>
                <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>
                  Услуги
                </NavLink>
                <NavLink to="/pricing" className={navLinkClass} onClick={closeMenu}>
                  Цены
                </NavLink>
                <NavLink to="/portfolio" className={navLinkClass} onClick={closeMenu}>
                  Портфолио
                </NavLink>
                <NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>
                  Блог
                </NavLink>
                <NavLink to="/contacts" className={navLinkClass} onClick={closeMenu}>
                  Контакты
                </NavLink>
              </div>
            )}
          </div>
        </Container>
      </header>

      {isMenuOpen && <div className={styles.backdrop} onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
