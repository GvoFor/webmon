import { Icon } from '../components';
import styles from './styles.module.scss';

const Footer = (): React.JSX.Element => {
  return (
    <footer className={styles['footer']}>
      <a href="#">
        <img
          className={styles['logo-image']}
          src="/src/assets/images/logo.svg"
          alt="Webmon logo"
        />
      </a>
      <nav>
        <ul className={styles['socials-list']}>
          <li className={styles['socials-item']}>
            <a href="#">
              <Icon icon="github" width={48} height={48} />
            </a>
          </li>
          <li className={styles['socials-item']}>
            <a href="#">
              <Icon icon="linkedin" width={48} height={48} />
            </a>
          </li>
        </ul>
      </nav>
      <a className={styles['copyright']} href="#">
        &copy; 2025 All rights reserved
      </a>
    </footer>
  );
};

export { Footer };
