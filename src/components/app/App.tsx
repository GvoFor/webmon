import { Footer, Header } from '../components';
import styles from './styles.module.scss';

const App: React.FC = () => {
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

export default App;
