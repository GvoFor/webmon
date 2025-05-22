import { AppRoutes } from '../../enums/enums';
import { Icon, NavLink } from '../components';
import styles from './styles.module.scss';

const Footer = (): React.JSX.Element => {
  return (
    <footer className={styles['footer']}>
      <NavLink to={AppRoutes.ROOT}>
        <img
          className={styles['logo-image']}
          src="/src/assets/images/logo.svg"
          alt="Webmon logo"
        />
      </NavLink>
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
      <NavLink className={styles['copyright']} to={AppRoutes.ROOT}>
        &copy; 2025 All rights reserved
      </NavLink>
    </footer>
  );
};

export { Footer };
