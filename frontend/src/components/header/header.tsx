import { NavLink } from '~/components/components.js';
import { AppRoutes } from '~/enums/enums.js';
import { NavigationBar, NavigationLink } from './components/components.js';
import styles from './styles.module.scss';
import logo from '~/assets/images/logo.svg';

type Properties = {
  withNav?: boolean;
};

const Header = ({ withNav = true }: Properties): React.JSX.Element => {
  return (
    <header className={styles['header']}>
      <NavLink to={AppRoutes.ROOT}>
        <img className={styles['logo-image']} src={logo} alt="Webmon logo" />
      </NavLink>
      {withNav ? (
        <NavigationBar>
          <NavigationLink href={AppRoutes.ROOT} text="Home" />
          <NavigationLink
            href={AppRoutes.AUTH}
            text="Sign In"
            variant="button"
          />
        </NavigationBar>
      ) : (
        <></>
      )}
    </header>
  );
};

export { Header };
