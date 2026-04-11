import PageHero from '../../ui/PageHero/PageHero';
import contactsHeroImage from '../../../assets/images/services-hero.png';
import Container from '../../ui/Container/Container';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: 'Электромонтаж под ключ',
    text: 'Полный комплекс работ для квартир, домов и коммерческих помещений.',
  },
  {
    id: 2,
    title: 'Замена проводки',
    text: 'Демонтаж старой электрики и безопасная прокладка новых линий.',
  },
  {
    id: 3,
    title: 'Сборка и монтаж щитов',
    text: 'Распределение групп, защита линий, аккуратная маркировка.',
  },
  {
    id: 4,
    title: 'Освещение и точки подключения',
    text: 'Установка розеток, выключателей, светильников и подсветки.',
  },
];

export default function Services() {
  return (
    <main className={styles.page}>
      <PageHero
        title="Услуги"
        description="Выполняем электромонтажные работы для частных и коммерческих объектов — аккуратно, безопасно и в согласованные сроки."
        image={contactsHeroImage}
        imageAlt="Услуги"
      />

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.grid}>
            {services.map((service) => (
              <article key={service.id} className={styles.card}>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}