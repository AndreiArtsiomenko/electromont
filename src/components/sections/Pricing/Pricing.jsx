import PageHero from '../../ui/PageHero/PageHero';
import contactsHeroImage from '../../../assets/images/pricing-hero.png';
import Container from '../../ui/Container/Container';
import styles from './Pricing.module.css';

const pricingItems = [
  { id: 1, title: 'Диагностика электрики', price: 'от 30 руб.' },
  { id: 2, title: 'Установка розетки', price: 'от 20 руб.' },
  { id: 3, title: 'Перенос точки', price: 'от 35 руб.' },
  { id: 4, title: 'Сборка электрощита', price: 'от 180 руб.' },
];

export default function Pricing() {
  return (
    <main className={styles.page}>
      <PageHero
        title="Цены"
        description="Базовые ориентиры по стоимости электромонтажных работ. Итоговая цена зависит от объёма, сложности и особенностей объекта."
        image={contactsHeroImage}
        imageAlt="Цены"
      />

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.grid}>
            {pricingItems.map((item) => (
              <article key={item.id} className={styles.card}>
                <h2>{item.title}</h2>
                <p className={styles.price}>{item.price}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}