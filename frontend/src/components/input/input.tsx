import {
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { buildClasses } from '~/helpers/buildClasses.helper.js';

import styles from './styles.module.scss';
import { useFormController } from '~/hooks/hooks.js';

type Properties<T extends FieldValues> = {
  autoComplete?: string;
  control: Control<T, null>;
  errors: FieldErrors<T>;
  isLabelHidden?: boolean;
  isReadOnly?: boolean;
  label: string;
  leftIcon?: React.JSX.Element;
  name: FieldPath<T>;
  placeholder?: string;
  rightIcon?: React.JSX.Element;
  type?: 'email' | 'password' | 'text';
  rowsN?: number;
  variant?: 'solid' | 'outlined';
};

const Input = <T extends FieldValues>({
  autoComplete,
  control,
  errors,
  isLabelHidden = false,
  isReadOnly = false,
  label,
  leftIcon,
  name,
  placeholder = '',
  rightIcon,
  type = 'text',
  rowsN,
  variant = 'solid',
}: Properties<T>): React.JSX.Element => {
  const { field } = useFormController({ control, name });

  const error = errors[name]?.message;
  const hasError = Boolean(error);
  const hasLeftIcon = Boolean(leftIcon);
  const hasRightIcon = Boolean(rightIcon);
  const isTextArea = Boolean(rowsN);

  return (
    <label className={styles['input-wrapper']}>
      <div
        className={buildClasses(
          styles['input-container'],
          !isLabelHidden && styles['with-label'],
          styles[`variant-${variant}`],
        )}
      >
        {hasLeftIcon && (
          <div
            className={buildClasses(
              styles['input-icon'],
              styles['input-icon-left'],
            )}
          >
            {leftIcon}
          </div>
        )}

        <span
          className={buildClasses(
            styles['input-label-text'],
            isLabelHidden && 'visually-hidden',
          )}
        >
          {label}
        </span>

        {isTextArea ? (
          <textarea
            autoComplete={autoComplete}
            className={styles['input-text-area']}
            name={field.name}
            onChange={field.onChange}
            placeholder={placeholder}
            readOnly={isReadOnly}
            value={field.value}
            rows={rowsN}
          />
        ) : (
          <input
            autoComplete={autoComplete}
            className={styles['input-field']}
            name={field.name}
            onChange={field.onChange}
            placeholder={placeholder}
            readOnly={isReadOnly}
            type={type}
            value={field.value}
          />
        )}

        {hasRightIcon && (
          <div
            className={buildClasses(
              styles['input-icon'],
              styles['input-icon-right'],
            )}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {hasError && (
        <span className={styles['input-error']}>{error as string}</span>
      )}
    </label>
  );
};

export { Input };
