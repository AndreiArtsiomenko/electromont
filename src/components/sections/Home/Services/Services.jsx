import { Link } from 'react-router-dom';
import Container from '../../../ui/Container/Container';
import styles from './Services.module.css';

const services = [
  {
    title: 'Электромонтаж «под ключ»',
    items: ['Дома', 'Квартиры', 'Гаражи']
  },
  {
    title: 'Монтаж осветительного оборудования',
    items: ['Лампы', 'Светильники', 'Диодные ленты']
  },
  {
    title: 'Монтаж и установка розеток и выключателей',
    items: ['Демонтаж', 'Установка']
  }
];

const Services = () => {
  return (
    <section className={styles.services}>
      <Container>
        <h2>Услуги</h2>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <article key={i} className={styles.card}>
              <h3>{service.title}</h3>

              <ul>
                {service.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link to="/contacts" className={styles.btn}>
                Заказать
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
