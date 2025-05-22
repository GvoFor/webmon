import { Footer, Header, Outlet } from '~/components/components.js';
import styles from './styles.module.scss';

const App = (): React.JSX.Element => {
  return (
    <div className={styles['page-layout']}>
      <Header />
      <main className={styles['main-wrapper']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { App };
