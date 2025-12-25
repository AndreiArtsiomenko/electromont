import Container from '../../../ui/Container/Container';
import styles from './Advantages.module.css';

const advantages = [
  'Используем только проверенные материалы',
  'Применяем профессиональный инструмент',
  'Соблюдаем все нормы и правила',
  'Четкие сроки выполнения работ',
  'Чистота после монтажа',
  'Гарантия 2 года на все работы',
  'Учитываем ваши пожелания и бюджет'
];

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <Container>
        <h2>Наши преимущества</h2>
        <ul className={styles.list}>
          {advantages.map((text, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.icon}>✔</span>
              {text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Advantages;
