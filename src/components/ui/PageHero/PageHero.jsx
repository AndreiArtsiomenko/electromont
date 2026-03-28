import Container from '../Container/Container';
import styles from './PageHero.module.css';

export default function PageHero({ title, description, image, imageAlt }) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div className={styles.heroImageBox}>
            <div className={styles.heroImageWrap}>
              <img src={image} alt={imageAlt} className={styles.heroImage} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}