import { NavigationBar, NavigationLink } from './components/components';
import styles from './styles.module.scss';

type Properties = {
  withNav?: boolean;
};

const Header = ({ withNav = true }: Properties): React.JSX.Element => {
  return (
    <header className={styles['header']}>
      <a href="/">
        <img
          className={styles['logo-image']}
          src="/src/assets/images/logo.svg"
          alt="Webmon logo"
        />
      </a>
      {withNav ? (
        <NavigationBar>
          <NavigationLink href="/" key="/" text="Home" />
          <NavigationLink
            href="/auth"
            key="/auth"
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
