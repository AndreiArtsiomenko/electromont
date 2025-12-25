import { Link } from 'react-router-dom';
import Container from '../../../ui/Container/Container';
import styles from './Hero.module.css';
import hero from '../../../../assets/hero.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h1>Электромонтаж в квартирах и домах</h1>
            <p>Профессиональные решения для безопасности вашего дома</p>
            <Link to="/contacts" className={styles.btn}>
              Получить консультацию
            </Link>
          </div>
          <img src={hero} alt="Электромонтаж" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
