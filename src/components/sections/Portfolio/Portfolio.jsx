import PageHero from '../../ui/PageHero/PageHero';
import contactsHeroImage from '../../../assets/images/portfolio-hero.png';
import Container from '../../ui/Container/Container';
import styles from './Portfolio.module.css';

const projects = [
  {
    id: 1,
    title: 'Электрика в квартире 72 м²',
    text: 'Полная замена проводки, сборка щита и подключение освещения.',
  },
  {
    id: 2,
    title: 'Частный дом',
    text: 'Разводка линий по этажам, наружное освещение и щитовая.',
  },
  {
    id: 3,
    title: 'Коммерческий объект',
    text: 'Монтаж электрики для офиса с выделенными линиями для техники.',
  },
  {
    id: 4,
    title: 'Ремонт и модернизация',
    text: 'Обновление старой электрики и перенос точек подключения.',
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
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}