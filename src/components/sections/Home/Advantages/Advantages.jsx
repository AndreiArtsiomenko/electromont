import {
  ShieldCheck,
  Wrench,
  ClipboardCheck,
  Clock,
  Sparkles,
  Award,
} from 'lucide-react';

import Container from '../../../ui/Container/Container';
import styles from './Advantages.module.css';

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <Container>
        <div className={styles.head}>
          <h2>Наши преимущества</h2>
        </div>

        <ul className={styles.list}>
          <li className={styles.card}>
            <div className={styles.iconWrap}>
              <ShieldCheck className={styles.icon} />
            </div>
            <p className={styles.cardText}>
              Используем проверенные материалы
            </p>
          </li>

          <li className={styles.card}>
            <div className={styles.iconWrap}>
              <Wrench className={styles.icon} />
            </div>
            <p className={styles.cardText}>
              Применяем профессиональный инструмент
            </p>
          </li>

          <li className={styles.card}>
            <div className={styles.iconWrap}>
              <ClipboardCheck className={styles.icon} />
            </div>
            <p className={styles.cardText}>
              Соблюдаем все нормы и правила
            </p>
          </li>

          <li className={styles.card}>
            <div className={styles.iconWrap}>
              <Clock className={styles.icon} />
            </div>
            <p className={styles.cardText}>
              Четкие сроки выполнения работ
            </p>
          </li>

          <li className={styles.card}>
            <div className={styles.iconWrap}>
              <Sparkles className={styles.icon} />
            </div>
            <p className={styles.cardText}>
              Чистота после монтажа
            </p>
          </li>

          <li className={styles.card}>
            <div className={styles.iconWrap}>
              <Award className={styles.icon} />
            </div>
            <p className={styles.cardText}>
              Гарантия 2 года на все работы
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Advantages;