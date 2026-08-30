import { Link } from 'react-router-dom';
import Container from '../../../ui/Container/Container';
import heroImage from '../../../../assets/hero.png';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <h1>
              Электромонтажные работы
              <br />
              в квартирах и домах
            </h1>

            <p className={styles.description}>
              Выполняем монтаж электрики под ключ:
              проводка, щиты, освещение, автоматика и подключение оборудования
              с акцентом на безопасность, сроки и аккуратный результат.
            </p>

            <div className={styles.actions}>
              <Link to="/contacts" className={styles.primaryBtn}>
                Оставить заявку
              </Link>
            </div>

            <div className={styles.metrics}>
              <div className={styles.metricCard}>
                <strong>5+</strong>
                <span>лет опыта</span>
              </div>

              <div className={styles.metricCard}>
                <strong>100+</strong>
                <span>объектов</span>
              </div>

              <div className={styles.metricCard}>
                <strong>98%</strong>
                <span>довольных клиентов</span>
              </div>
            </div>
          </div>

          <div className={styles.heroImageBox}>
            <div className={styles.heroImageWrap}>
              <img
                src={heroImage}
                alt="Электромонтажные работы"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
