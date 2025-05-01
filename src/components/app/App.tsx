import { Footer, Header } from '../components';
import styles from './styles.module.scss';

const App = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <p className={styles['hello']}>
        Hello <span className={styles['world']}>World</span>
      </p>
      <Footer />
    </>
  );
};

export { App };
