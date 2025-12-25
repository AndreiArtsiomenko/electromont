import Container from '../../../ui/Container/Container';
import styles from './Process.module.css';

const steps = [
  {
    title: 'Заявка',
    text: 'Свяжитесь с нами и мы проконсультируем вас по всем вопросам.'
  },
  {
    title: 'Бесплатный выезд мастера',
    text: 'Осмотр объекта и уточнение всех нюансов.'
  },
  {
    title: 'Заключение договора',
    text: 'Фиксируем сроки и стоимость работ.'
  },
  {
    title: 'Выполнение работ',
    text: 'Работаем строго по нормам и правилам.'
  },
  {
    title: 'Сдача объекта',
    text: 'Проверка и приёмка выполненных работ.'
  }
];

const Process = () => {
  return (
    <section className={styles.process}>
      <Container>
        <h2>Как мы работаем</h2>

        <ol className={styles.list}>
          {steps.map((step, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.number}>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default Process;
