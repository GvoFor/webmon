import {
  Button,
  Icon,
  IconButton,
  Input,
  Link,
} from '~/components/components.js';

import styles from './styles.module.scss';
import { useCallback, useForm, useState } from '~/hooks/hooks.js';
import {
  signInValidationSchema,
  SignInRequestDTO,
  DEFAULT_SIGN_IN_PAYLOAD,
} from '~/modules/auth/auth.js';
import { AppRoutes } from '~/enums/app-routes.enum.js';

type Properties = {
  onSubmit: (payload: SignInRequestDTO) => void;
};

const SignInForm = ({ onSubmit }: Properties): React.JSX.Element => {
  const { control, errors, handleSubmit } = useForm<SignInRequestDTO>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: signInValidationSchema,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit((formData: SignInRequestDTO) => {
        onSubmit(formData);
      })(event_);
    },
    [handleSubmit, onSubmit],
  );

  const handleTogglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((previousState) => !previousState);
  }, []);

  return (
    <form
      className={styles['form-container']}
      noValidate
      onSubmit={handleFormSubmit}
    >
      <h2 className={styles['form-title']}>Sign In</h2>

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

        <Button label="Sign In" type="submit" />
      </div>

      <p>
        Don&apos;t have an account? Sign up{' '}
        <Link to={AppRoutes.SIGN_UP}>here</Link>.
      </p>
    </form>
  );
};

export { SignInForm };
