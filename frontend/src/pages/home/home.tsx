import styles from './styles.module.scss';

const Home = (): React.JSX.Element => {
  return (
    <>
      <section className={styles['intro-section']}>
        <p>
          Keep track your favourite video-content with{' '}
          <span className={styles['accent']}>Webmon</span> easily.
        </p>
        <ol className={styles['steps']}>
          <li className={styles['step']}>
            <p>
              Create and setup <span className={styles['accent']}>script</span>
            </p>
          </li>
          <li className={styles['step']}>
            <p>Be reported if new content available </p>
          </li>
        </ol>
        <div className={styles['showcase-container']}>
          {/* TODO: replace with real showcase-video */}
          <div className={styles['showcase-video']}>Showcase</div>
        </div>
      </section>
    </>
  );
};

export { Home };
