import styles from './styles.module.scss';

const App: React.FC = () => {
  return (
    <>
      <p className={styles['hello']}>
        Hello <span className={styles['world']}>World</span>
      </p>
    </>
  );
};

export default App;
