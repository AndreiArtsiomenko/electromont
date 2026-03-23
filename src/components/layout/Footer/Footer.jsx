import { Link } from 'react-router-dom';
import Container from '../../ui/Container/Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.legalTitle}>
              Индивидуальный предприниматель Артёменко Андрей Олегович
            </p>

            <div className={styles.legalBlock}>
              <p>
                Свидетельство о государственной регистрации № 491238846 от
                24.02.2021, выданное Гомельским городским исполнительным комитетом,
                администрацией Железнодорожного района г. Гомеля
              </p>
              <p>
                Свидетельство о включении в государственный информационный ресурс
                &quot;Реестр бытовых услуг Республики Беларусь&quot; № 100753 от
                24.03.2025
              </p>
            </div>
          </div>

          <div className={styles.contacts}>
            <h3>Контакты</h3>
            <a href="tel:+375293315305" className={styles.phone}>
              +375 (29) 331-53-05
            </a>
            <p>Время работы: Пн-Вс, 9.00–18.00</p>
            <p>246030, г. Гомель, ул. Леонова 16/89</p>
          </div>

          <nav className={styles.nav}>
            <h3>Навигация</h3>
            <Link to="/">Главная</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/pricing">Цены</Link>
            <Link to="/portfolio">Работы</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© 2026. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;