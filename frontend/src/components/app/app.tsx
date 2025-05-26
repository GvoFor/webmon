import {
  Footer,
  Header,
  Outlet,
  ToastContainer,
} from '~/components/components.js';
import styles from './styles.module.scss';
import { useStore } from '~/store/store.js';
import { useEffect } from '~/hooks/hooks.js';

const App = (): React.JSX.Element => {
  const { getUser } = useStore(({ auth }) => auth);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className={styles['page-layout']}>
      <Header />
      <main className={styles['main-wrapper']}>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export { App };
