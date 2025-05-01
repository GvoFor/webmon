import { Footer } from '../components';
import styles from './styles.module.scss';

const App: React.FC = () => {
  return (
    <>
      <p className={styles['hello']}>
        Hello <span className={styles['world']}>World</span>
      </p>
      <Footer />
    </>
  );
};

export default App;
