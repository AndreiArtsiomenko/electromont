import { useState } from 'react';
import Container from '../../../ui/Container/Container';
import styles from './Request.module.css';

const Request = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSent(true);
  };

  return (
    <section className={styles.request}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2>Нужен электромонтаж под ключ?</h2>
            <p>
              Оставьте заявку, и мы свяжемся с вами, уточним задачу, поможем
              сориентироваться по срокам и стоимости работ.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Ваше имя</label>
              <input id="name" type="text" placeholder="Введите имя" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Телефон</label>
              <input id="phone" type="tel" placeholder="+375 (___) ___-__-__" required />
            </div>

            <div className={styles.fieldFull}>
              <label htmlFor="message">Комментарий</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Квартира, дом или коммерческий объект. Кратко опишите задачу."
              />
            </div>

            <button type="submit" className={styles.button}>
              Отправить заявку
            </button>

            {isSent && (
              <p className={styles.note}>Заявка подготовлена. Осталось подключить отправку на почту или в CRM.</p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Request;
