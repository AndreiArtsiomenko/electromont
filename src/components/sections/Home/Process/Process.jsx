import Container from '../../../ui/Container/Container';
import styles from './Process.module.css';

const items = [
  {
    number: '1',
    title: 'Заявка',
    text: 'Свяжитесь с нами, и мы проконсультируем вас по услуге, срокам и стоимости работ.',
  },
  {
    number: '2',
    title: 'Выезд мастера',
    text: 'Выезжаем на объект, оцениваем объём работ и уточняем технические детали.',
  },
  {
    number: '3',
    title: 'Заключение договора',
    text: 'Согласовываем условия, фиксируем сроки, стоимость и объём работ в договоре.',
  },
  {
    number: '4',
    title: 'Подбор материалов',
    text: 'Помогаем подобрать надёжные материалы и комплектующие под задачи вашего объекта.',
  },
  {
    number: '5',
    title: 'Выполнение работ',
    text: 'Выполняем электромонтажные работы в соответствии с действующими нормами и требованиями безопасности.',
  },
  {
    number: '6',
    title: 'Уборка и сдача объекта',
    text: 'Убираем строительный мусор, проверяем выполненные работы и сдаём объект заказчику.',
  },
];

const Process = () => {
  return (
    <section className={styles.process}>
      <Container>
        <div className={styles.head}>
          <h2>Как мы работаем</h2>
          <p>
            Сопровождаем проект поэтапно: от первой заявки и выезда мастера
            до выполнения работ и сдачи готового объекта.
          </p>
        </div>

        <ul className={styles.list}>
          {items.map(({ number, title, text }) => (
            <li key={number} className={styles.item}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.markerNumber}>{number}</span>
              </div>

              <div className={styles.content}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Process;