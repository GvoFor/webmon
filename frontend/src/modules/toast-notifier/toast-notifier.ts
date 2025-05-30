import { toast } from 'react-toastify';

const showSuccess = (message: string) => {
  toast.success(message);
};

const showInfo = (message: string) => {
  toast.info(message);
};

const showWarning = (message: string) => {
  toast.warn(message);
};

const showError = (message: string) => {
  toast.error(message);
};

const notifier = {
  showSuccess,
  showInfo,
  showWarning,
  showError,
};

export { notifier as toastNotifier };
