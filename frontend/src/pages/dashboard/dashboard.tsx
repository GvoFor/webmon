import styles from './styles.module.scss';

const Dashboard = (): React.JSX.Element => {
  return (
    <>
      <section className={styles['section']}>
        <h2 className={styles['section-title']}>To Check</h2>
        <div>Card</div>
      </section>
    </>
  );
};

export { Dashboard };
