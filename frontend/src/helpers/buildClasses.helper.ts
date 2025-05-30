import { ClassValue, clsx } from 'clsx';

const buildClasses = (...classes: ClassValue[]) => clsx(...classes);

export { buildClasses };
