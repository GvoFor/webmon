import {
  Button,
  Icon,
  IconButton,
  Input,
  Link,
  NavLink,
} from '~/components/components.js';

import styles from './styles.module.scss';
import { useCallback, useForm, useState } from '~/hooks/hooks.js';
import {
  signUpValidationSchema,
  SignUpRequestDTO,
  DEFAULT_SIGN_UP_PAYLOAD,
} from '~/modules/auth/auth.js';
import { AppRoutes } from '~/enums/app-routes.enum.js';

type Properties = {
  onSubmit: (payload: SignUpRequestDTO) => void;
};

const SignUpForm = ({ onSubmit }: Properties): React.JSX.Element => {
  const { control, errors, handleSubmit } = useForm<SignUpRequestDTO>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: signUpValidationSchema,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit((formData: SignUpRequestDTO) => {
        onSubmit(formData);
      })(event_);
    },
    [handleSubmit, onSubmit],
  );

  const handleTogglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((previousState) => !previousState);
  }, []);

  const handleToggleConfirmPasswordVisibility = useCallback(() => {
    setIsConfirmPasswordVisible((previousState) => !previousState);
  }, []);

  return (
    <form
      className={styles['form-container']}
      noValidate
      onSubmit={handleFormSubmit}
    >
      <h2 className={styles['form-title']}>Sign Up</h2>

      <div className={styles['form-body']}>
        <Input
          autoComplete="username"
          control={control}
          errors={errors}
          label="Email"
          name="email"
          placeholder="Email"
          leftIcon={<Icon name="email" width={32} />}
          type="email"
          isLabelHidden={true}
        />
        <Input
          autoComplete="one-time-code"
          control={control}
          errors={errors}
          label="Password"
          name="password"
          placeholder="Password"
          leftIcon={<Icon name="key" width={32} />}
          rightIcon={
            <IconButton
              iconName={isPasswordVisible ? 'strikedEye' : 'eye'}
              label={isPasswordVisible ? 'Hide password' : 'Show password'}
              width={32}
              onClick={handleTogglePasswordVisibility}
            />
          }
          type={isPasswordVisible ? 'text' : 'password'}
          isLabelHidden={true}
        />
        <Input
          autoComplete="one-time-code"
          control={control}
          errors={errors}
          label="Password"
          name="confirmPassword"
          placeholder="Confirm password"
          leftIcon={<Icon name="key" width={32} />}
          rightIcon={
            <IconButton
              iconName={isConfirmPasswordVisible ? 'strikedEye' : 'eye'}
              label={
                isConfirmPasswordVisible ? 'Hide password' : 'Show password'
              }
              width={32}
              onClick={handleToggleConfirmPasswordVisibility}
            />
          }
          type={isConfirmPasswordVisible ? 'text' : 'password'}
          isLabelHidden={true}
        />

        <Button label="Sign Up" type="submit" />
      </div>

      <p>
        Have an account? Sign in <Link to={AppRoutes.SIGN_IN}>here</Link>.
      </p>
    </form>
  );
};

export { SignUpForm };
