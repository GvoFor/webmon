import styles from './styles.module.scss';

type Properties = {
  label: string;
  value: string;
};

const Output = ({ label, value }: Properties): React.JSX.Element => {
  return (
    <div className={styles['output-container']}>
      <p className={styles['output-label']}>{label}</p>
      <input className={styles['output-value']} value={value} readOnly={true} />
    </div>
  );
};

export { Output };
