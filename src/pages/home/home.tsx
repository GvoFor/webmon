type Properties = {};

import styles from './styles.module.scss';

const Home = ({}: Properties): React.JSX.Element => {
  return (
    <>
      <h1 className={styles['welcome']}>Welcome Home</h1>
    </>
  );
};

export { Home };
