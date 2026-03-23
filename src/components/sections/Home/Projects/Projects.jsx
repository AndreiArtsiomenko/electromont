import { Link } from 'react-router-dom';

import Container from '../../../ui/Container/Container';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    number: '01',
    type: 'Квартира',
    title: 'Электромонтаж в квартире 72 м²',
    description:
      'Полная замена проводки, перенос розеток, сборка щита и подключение освещения.',
  },
  {
    id: 2,
    number: '02',
    type: 'Частный дом',
    title: 'Электрика в частном доме',
    description:
      'Разводка линий по этажам, наружное освещение, щитовая и защита по группам.',
  },
  {
    id: 3,
    number: '03',
    type: 'Коммерческий объект',
    title: 'Монтаж электрики в офисе',
    description:
      'Рабочие зоны, освещение, отдельные линии для техники и аккуратная маркировка.',
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <Container>
        <div className={styles.head}>
          <h2>Наши работы</h2>
          <p>
            Несколько примеров выполненных объектов. Работаем с квартирами,
            частными домами и коммерческими помещениями.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map(({ id, number, type, title, description }) => (
            <article key={id} className={styles.card}>
              <span className={styles.number}>{number}</span>
              <span className={styles.type}>{type}</span>
              <h3>{title}</h3>
              <p>{description}</p>

              <Link to="/portfolio" className={styles.link}>
                Смотреть проект
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to="/portfolio" className={styles.button}>
            Все работы
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Projects;