import { Link } from 'react-router-dom';
import Container from '../../../ui/Container/Container';
import styles from './Services.module.css';
import servicesBg from '../../../../assets/images/services-bg.jpg';

const services = [
  {
    title: 'Электромонтаж под ключ',
    text: 'Полный комплекс электромонтажных работ для квартир и частных домов.',
    items: ['Квартиры', 'Частные дома и коттеджи'],
  },
  {
    title: 'Освещение и подсветка',
    text: 'Монтаж освещения — от базовых решений до декоративных световых сценариев.',
    items: ['Светильники и люстры', 'LED-подсветка и фасадный свет'],
  },
  {
    title: 'Щиты, автоматы, розетки',
    text: 'Установка и замена электрощитов, автоматов, УЗО, розеток и выключателей.',
    items: ['Сборка и подключение щитов', 'Розетки и выключатели'],
  },
];

const Services = () => {
  return (
    <section 
      className={styles.services}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0.38)), url(${servicesBg})`,
      }}
    >
      <Container>
        <div className={styles.head}>
          <h2>Наши услуги</h2>

          <p className={styles.textBlock}>
            Электромонтажные решения для любых задач. Выполняем работы аккуратно, по проекту и с соблюдением требований
            безопасности.
          </p>

        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={index} className={styles.card}>
              <span className={styles.cardNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{service.title}</h3>

              <p className={styles.cardText}>{service.text}</p>

              <ul className={styles.list}>
                {service.items.map((item) => (
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