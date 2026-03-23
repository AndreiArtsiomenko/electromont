import ReliabilityIcon from '../../../ui/icons/ReliabilityIcon';
import SafetyIcon from '../../../ui/icons/SafetyIcon';
import ComfortIcon from '../../../ui/icons/ComfortIcon';

import Container from '../../../ui/Container/Container';
import styles from './Advantages.module.css';

const items = [
  {
    icon: ReliabilityIcon,
    title: 'Надежность',
    text: 'Работаем по договору, соблюдаем сроки и выполняем обязательства на каждом этапе проекта.',
  },
  {
    icon: SafetyIcon,
    title: 'Безопасность',
    text: 'Используем качественные материалы, соблюдаем нормы монтажа и обеспечиваем безопасность эксплуатации.',
  },
  {
    icon: ComfortIcon,
    title: 'Комфорт',
    text: 'Подбираем решения под объект и задачи клиента, чтобы результат был не только аккуратным, но и удобным в повседневном использовании.',
  },
];

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <Container>
        <div className={styles.head}>
          <h2>Почему выбирают нас</h2>
          <p>
            Предлагаем продуманные инженерные решения с вниманием к качеству,
            срокам и комфорту дальнейшей эксплуатации.
          </p>
        </div>

        <ul className={styles.list}>
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className={styles.item}>
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Advantages;