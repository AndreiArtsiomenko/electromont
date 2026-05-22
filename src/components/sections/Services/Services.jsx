import PageHero from '../../ui/PageHero/PageHero';
import contactsHeroImage from '../../../assets/images/services-hero.png';
import Container from '../../ui/Container/Container';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: 'Электромонтаж под ключ',
    text: 'Полный комплекс работ для квартир, домов и коммерческих помещений.',
    details: ['проектирование линий', 'штробление и прокладка кабеля', 'розетки, выключатели и освещение'],
  },
  {
    id: 2,
    title: 'Замена проводки',
    text: 'Демонтаж старой электрики и безопасная прокладка новых линий.',
    details: ['разделение по группам', 'подбор сечения кабеля', 'аккуратная подготовка под чистовую отделку'],
  },
  {
    id: 3,
    title: 'Сборка и монтаж щитов',
    text: 'Распределение групп, защита линий, аккуратная маркировка.',
    details: ['автоматы и УЗО', 'реле напряжения', 'подключение и проверка нагрузки'],
  },
  {
    id: 4,
    title: 'Освещение и точки подключения',
    text: 'Установка розеток, выключателей, светильников и подсветки.',
    details: ['люстры и бра', 'LED-подсветка', 'уличное и фасадное освещение'],
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
                <ul>
                  {service.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.cta}>
            <div>
              <h2>Не нашли нужную услугу?</h2>
              <p>Опишите задачу, и мы подскажем оптимальный состав работ, сроки и ориентировочную стоимость.</p>
            </div>
            <a href="tel:+375293315305" className={styles.ctaButton}>
              Позвонить мастеру
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
