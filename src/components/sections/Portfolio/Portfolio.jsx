import PageHero from '../../ui/PageHero/PageHero';
import contactsHeroImage from '../../../assets/images/contacts-hero.png';
import Container from '../../ui/Container/Container';
import styles from './Portfolio.module.css';

const projects = [
  {
    id: 1,
    title: 'Электрика в квартире 72 м²',
    text: 'Полная замена проводки, сборка щита и подключение освещения.',
    tags: ['квартира', 'щит', 'освещение'],
  },
  {
    id: 2,
    title: 'Частный дом',
    text: 'Разводка линий по этажам, наружное освещение и щитовая.',
    tags: ['дом', 'фасадный свет', 'защита линий'],
  },
  {
    id: 3,
    title: 'Коммерческий объект',
    text: 'Монтаж электрики для офиса с выделенными линиями для техники.',
    tags: ['офис', 'рабочие зоны', 'маркировка'],
  },
  {
    id: 4,
    title: 'Ремонт и модернизация',
    text: 'Обновление старой электрики и перенос точек подключения.',
    tags: ['ремонт', 'перенос точек', 'диагностика'],
  },
];

export default function Portfolio() {
  return (
    <main className={styles.page}>
      <PageHero
        title="Портфолио"
        description="Несколько примеров выполненных объектов: квартиры, дома и коммерческие помещения."
        image={contactsHeroImage}
        imageAlt="Портфолио"
      />

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.grid}>
            {projects.map((project) => (
              <article key={project.id} className={styles.card}>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
