import PageHero from '../../ui/PageHero/PageHero';
import contactsHeroImage from '../../../assets/images/pricing-hero.png';
import Container from '../../ui/Container/Container';
import styles from './Pricing.module.css';

const pricingItems = [
  { id: 1, title: 'Диагностика электрики', unit: 'выезд и проверка', price: 'от 30 руб.' },
  { id: 2, title: 'Установка розетки или выключателя', unit: '1 точка', price: 'от 20 руб.' },
  { id: 3, title: 'Перенос точки подключения', unit: '1 точка', price: 'от 35 руб.' },
  { id: 4, title: 'Прокладка кабельной линии', unit: '1 метр', price: 'от 8 руб.' },
  { id: 5, title: 'Сборка электрощита', unit: 'щит до 12 модулей', price: 'от 180 руб.' },
  { id: 6, title: 'Монтаж светильника', unit: '1 прибор', price: 'от 25 руб.' },
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
                <span>{item.unit}</span>
                <p className={styles.price}>{item.price}</p>
              </article>
            ))}
          </div>

          <div className={styles.notice}>
            <h2>Как формируется итоговая цена</h2>
            <p>
              Стоимость зависит от объёма работ, состояния объекта, способа прокладки кабеля,
              количества точек и выбранных материалов. Перед началом работ согласуем смету и
              фиксируем понятный состав задач.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
