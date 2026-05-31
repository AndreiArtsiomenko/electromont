import styles from './Logo.module.css';
import logoImage from '../../../assets/images/logo-header.svg';

const Logo = ({ className = '', variant = 'dark' }) => {
  const classNames = [styles.logo, styles[variant], className].filter(Boolean).join(' ');

  return (
    <span className={classNames}>
      <img src={logoImage} alt="Ток в Дом" className={styles.image} />
    </span>
  );
};

export default Logo;
