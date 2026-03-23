import Container from '../../ui/Container/Container';
import styles from './Contacts.module.css';

const ContactsSection = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1>Контакты</h1>
            <p>
              Свяжитесь с нами, чтобы обсудить сроки, стоимость и состав работ.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.contactsSection}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>Контактная информация</h2>

              <div className={styles.items}>
                <div className={styles.item}>
                  <span className={styles.label}>Телефон</span>
                  <a href="tel:+375293315305" className={styles.phone}>
                    +375 (29) 331-53-05
                  </a>
                </div>

                <div className={styles.item}>
                  <span className={styles.label}>Время работы</span>
                  <p>Пн-Вс, 9.00–18.00</p>
                </div>

                <div className={styles.item}>
                  <span className={styles.label}>Адрес</span>
                  <p>246030, г. Гомель, ул. Леонова 16/89</p>
                </div>
              </div>
            </div>

            <div className={styles.formCard}>
              <h2>Оставить заявку</h2>
              <p className={styles.formText}>
                Заполните форму, и мы свяжемся с вами, чтобы обсудить задачу.
              </p>

              <form className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Ваше имя</label>
                  <input id="name" type="text" placeholder="Введите имя" />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Телефон</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+375 (__) ___-__-__"
                  />
                </div>

                <div className={styles.fieldFull}>
                  <label htmlFor="message">Комментарий</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Кратко опишите задачу"
                  />
                </div>

                <button type="submit" className={styles.button}>
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.legalSection}>
        <Container>
          <div className={styles.legalCard}>
            <h2>Сведения о регистрации</h2>
            <p className={styles.legalTitle}>
              Индивидуальный предприниматель Артёменко Андрей Олегович
            </p>
            <div className={styles.legalBlock}>
              <p>
                Свидетельство о государственной регистрации № 491238846 от
                24.02.2021, выданное Гомельским городским исполнительным
                комитетом, администрацией Железнодорожного района г. Гомеля
              </p>
              <p>
                Свидетельство о включении в государственный информационный ресурс
                &quot;Реестр бытовых услуг Республики Беларусь&quot; № 100753 от
                24.03.2025
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ContactsSection;