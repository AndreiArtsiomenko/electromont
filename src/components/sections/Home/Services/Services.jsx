import { Link } from 'react-router-dom';

import Container from '../../../ui/Container/Container';
import styles from './Services.module.css';

const services = [
  {
    number: '01',
    title: 'Электромонтаж под ключ',
    text: 'Полный комплекс электромонтажных работ для квартир, частных домов и коммерческих помещений.',
    items: [
      'Разводка электропроводки',
      'Монтаж розеток и выключателей',
      'Подключение освещения',
    ],
  },
  {
    number: '02',
    title: 'Сборка и подключение щитов',
    text: 'Собираем и подключаем электрощиты с учётом нагрузки, требований безопасности и особенностей объекта.',
    items: [
      'Автоматы и УЗО',
      'Электрощиты для квартиры и дома',
      'Замена старых щитов',
    ],
  },
  {
    number: '03',
    title: 'Освещение и подсветка',
    text: 'Устанавливаем основное, декоративное и фасадное освещение с аккуратным монтажом и продуманной схемой.',
    items: [
      'Люстры и светильники',
      'LED-подсветка',
      'Уличное и фасадное освещение',
    ],
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <Container>
        <div className={styles.head}>
          <h2>Наши услуги</h2>
          <p>
            Выполняем электромонтажные работы для квартир, частных домов и
            коммерческих помещений. Подбираем решения под задачи объекта и
            соблюдаем требования безопасности на каждом этапе.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(({ number, title, text, items }) => (
            <article key={number} className={styles.card}>
              <span className={styles.cardNumber}>{number}</span>

              <h3>{title}</h3>

              <p className={styles.cardText}>{text}</p>

              <ul className={styles.list}>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link to="/services" className={styles.btn}>
                Подробнее
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;