import { ToastContainer as LibraryToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.scss';

const ToastContainer = (): React.JSX.Element => {
  return (
    <div className="toast-container-1">
      <LibraryToastContainer
        autoClose={5000}
        className={styles['toast-container'] as string}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-center"
        rtl={false}
        theme="dark"
        toastClassName={styles['notification'] as string}
      />
    </div>
  );
};

export { ToastContainer };
