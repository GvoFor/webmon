import { NavLink } from '~/components/components.js';
import { AppRoutes } from '~/enums/enums.js';
import {
  NavigationBar,
  NavigationLink,
  Profile,
} from './components/components.js';
import styles from './styles.module.scss';
import logo from '~/assets/images/logo.svg';
import { useIsAuthorized, useLocation } from '~/hooks/hooks.js';

const Header = (): React.JSX.Element => {
  const isAuthorized = useIsAuthorized();
  const { pathname } = useLocation();

  const withNav = !(
    pathname === AppRoutes.SIGN_IN || pathname === AppRoutes.SIGN_UP
  );

  return (
    <header className={styles['header']}>
      <NavLink to={AppRoutes.ROOT}>
        <img className={styles['logo-image']} src={logo} alt="Webmon logo" />
      </NavLink>
      {withNav && (
        <NavigationBar>
          <NavigationLink href={AppRoutes.ROOT} text="Home" />
          {isAuthorized ? (
            <Profile />
          ) : (
            <NavigationLink
              href={AppRoutes.SIGN_IN}
              text="Sign In"
              variant="button"
            />
          )}
        </NavigationBar>
      )}
    </header>
  );
};

export { Header };
