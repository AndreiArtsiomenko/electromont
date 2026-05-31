import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import styles from './ScrollBottomButton.module.css';

const ScrollBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY;
      setIsVisible(distanceFromBottom > 420);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${isVisible ? styles.visible : ''}`}
      aria-label="Прокрутить страницу вниз"
      title="Вниз"
      onClick={scrollToBottom}
    >
      <ArrowDown className={styles.icon} aria-hidden="true" />
    </button>
  );
};

export default ScrollBottomButton;
