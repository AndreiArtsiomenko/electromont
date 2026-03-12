import Container from '../components/ui/Container/Container';
import styles from './Blog.module.css';

const posts = [
  {
    id: 1,
    category: 'Электромонтаж',
    date: '12 марта 2026',
    title: 'Как понять, что проводку в квартире пора менять',
    excerpt:
      'Разбираем основные признаки изношенной электропроводки: перегрев, запах, старые автоматы и нестабильное напряжение.',
  },
  {
    id: 2,
    category: 'Освещение',
    date: '8 марта 2026',
    title: 'Как правильно спланировать освещение в частном доме',
    excerpt:
      'Что учитывать при проектировании света: сценарии освещения, нагрузка, расположение выключателей и запас по мощности.',
  },
  {
    id: 3,
    category: 'Безопасность',
    date: '3 марта 2026',
    title: 'Зачем нужен отдельный электрощит и как его собрать грамотно',
    excerpt:
      'Объясняем, как распределяются линии, зачем нужны УЗО и автоматы и как избежать типичных ошибок при сборке щита.',
  },
  {
    id: 4,
    category: 'Советы',
    date: '27 февраля 2026',
    title: '5 ошибок при электромонтаже, которые потом дорого исправлять',
    excerpt:
      'Собрали частые ошибки на объектах: плохие соединения, отсутствие маркировки, неверный расчёт нагрузки и не только.',
  },
];

const Blog = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.kicker}>БЛОГ</span>
            <h1>Новости, статьи и полезные материалы</h1>
            <p>
              Делимся практическими советами по электромонтажу, обзорами решений,
              новостями компании и материалами по безопасности.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.postsSection}>
        <Container>
          <div className={styles.grid}>
            {posts.map((post) => (
              <article key={post.id} className={styles.card}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.date}>{post.date}</span>
                </div>

                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>

                <button className={styles.readMore}>Читать статью</button>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Blog;