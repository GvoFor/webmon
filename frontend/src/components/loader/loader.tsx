import styles from './styles.module.scss';

const Loader = (): React.JSX.Element => {
  return <div className={styles['spinner']}></div>;
};

export { Loader };
