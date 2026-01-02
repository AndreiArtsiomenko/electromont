import {
  ShieldCheck,
  Wrench,
  ClipboardCheck,
  Clock,
  Sparkles,
  Award,
  Wallet
} from 'lucide-react';

import Container from '../../../ui/Container/Container';
import styles from './Advantages.module.css';

const advantages = [
  {
    icon: ShieldCheck,
    text: 'Используем только проверенные материалы'
  },
  {
    icon: Wrench,
    text: 'Применяем профессиональный инструмент'
  },
  {
    icon: ClipboardCheck,
    text: 'Соблюдаем все нормы и правила'
  },
  {
    icon: Clock,
    text: 'Четкие сроки выполнения работ'
  },
  {
    icon: Sparkles,
    text: 'Чистота после монтажа'
  },
  {
    icon: Award,
    text: 'Гарантия 2 года на все работы'
  },
  {
    icon: Wallet,
    text: 'Учитываем ваши пожелания и бюджет'
  }
];

const Advantages = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Наши преимущества</h2>

        <ul className={styles.list}>
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i} className={styles.item}>
                <Icon className={styles.icon} />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Advantages;
