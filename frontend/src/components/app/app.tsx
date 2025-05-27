import {
  Footer,
  Header,
  Loader,
  Outlet,
  ToastContainer,
} from '~/components/components.js';
import styles from './styles.module.scss';
import { useStore } from '~/store/store.js';
import { useEffect } from '~/hooks/hooks.js';

const App = (): React.JSX.Element => {
  const { getUser, isUserLoading } = useStore(({ auth }) => auth);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (isUserLoading) {
    return (
      <div className={styles['loader-container']}>
        <Loader />
      </div>
    );
  }

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
