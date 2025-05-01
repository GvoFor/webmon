import { NavLink } from '../../components/components';
import { AppRoutes } from '../../enums/enums';
import { NavigationBar, NavigationLink } from './components/components';
import styles from './styles.module.scss';

type Properties = {
  withNav?: boolean;
};

const Header = ({ withNav = true }: Properties): React.JSX.Element => {
  return (
    <header className={styles['header']}>
      <NavLink to={AppRoutes.ROOT}>
        <img
          className={styles['logo-image']}
          src="/src/assets/images/logo.svg"
          alt="Webmon logo"
        />
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
