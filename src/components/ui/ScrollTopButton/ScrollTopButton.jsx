import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './ScrollTopButton.module.css';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${isVisible ? styles.visible : ''}`}
      aria-label="Подняться вверх страницы"
      title="Наверх"
      onClick={scrollToTop}
    >
      <ArrowUp className={styles.icon} aria-hidden="true" />
    </button>
  );
};

export default ScrollTopButton;
