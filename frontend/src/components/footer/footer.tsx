import { AppRoutes } from '~/enums/enums.js';
import { Icon, NavLink } from '~/components/components.js';
import styles from './styles.module.scss';
import logo from '~/assets/images/logo.svg';

const Footer = (): React.JSX.Element => {
  return (
    <footer className={styles['footer']}>
      <NavLink to={AppRoutes.ROOT}>
        <img className={styles['logo-image']} src={logo} alt="Webmon logo" />
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
      <NavLink className={styles['copyright'] as string} to={AppRoutes.ROOT}>
        &copy; 2025 All rights reserved
      </NavLink>
    </footer>
  );
};

export { Footer };
