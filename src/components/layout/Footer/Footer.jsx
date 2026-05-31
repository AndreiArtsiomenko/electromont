import { Link } from 'react-router-dom';
import Container from '../../ui/Container/Container';
import Logo from '../../ui/Logo/Logo';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo className={styles.footerLogo} variant="light" />

            <p className={styles.brandText}>
              ИП Артёменко А.О. — профессиональный электромонтаж в квартирах и домах. 
              Мы гарантируем строгое соблюдение всех технических норм, аккуратность и долговечность результата. 
              Наша главная цель — ваше спокойствие и безопасность, обеспеченные качественной работой.
            </p>
          </div>

          <div className={styles.contacts}>
            <h3>Контакты</h3>
            <a href="tel:+375293315305" className={styles.phone}>
              +375 (29) 331-53-05
            </a>
            <p>Время работы: Пн-Пт, 9.00–18.00</p>
            <p>246030, г. Гомель, ул. Леонова 16</p>
          </div>

          <nav className={styles.nav}>
            <h3>Навигация</h3>
            <Link to="/">Главная</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/pricing">Цены</Link>
            <Link to="/portfolio">Портфолио</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026. Все права защищены.</p>
          <p className={styles.bottomInfo}>Сайт не является интернет-магазином, информация о товарах, услугах, ценах носит ознакомительный характер.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
