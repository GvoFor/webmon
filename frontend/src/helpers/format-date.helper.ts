import { formatDate as libraryFormatDate } from 'date-fns';

const formatDate = (date: Date, format: string) => {
  return libraryFormatDate(date, format);
};

export { formatDate };
