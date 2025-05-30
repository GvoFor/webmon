import {
  Button,
  IconButton,
  Input,
  MonitorScriptAvatar,
} from '~/components/components.js';
import styles from './styles.module.scss';
import { useCallback, useForm } from '~/hooks/hooks.js';
import {
  createScriptValidationSchema,
  DEFAULT_CREATE_SCRIPT_PAYLOAD,
  type CreateScriptRequestDTO,
} from '~/modules/monitor-scripts/monitor-scripts.js';

type Properties = {
  onCollapseClick: () => void;
  onSubmit: (payload: CreateScriptRequestDTO) => void;
};

const CreateScriptForm = ({
  onSubmit,
  onCollapseClick,
}: Properties): React.JSX.Element => {
  const { control, errors, handleSubmit } = useForm<CreateScriptRequestDTO>({
    defaultValues: DEFAULT_CREATE_SCRIPT_PAYLOAD,
    validationSchema: createScriptValidationSchema,
  });

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit((formData: CreateScriptRequestDTO) => {
        onSubmit(formData);
      })(event_);
    },
    [handleSubmit, onSubmit],
  );

  return (
    <form
      className={styles['form-container']}
      noValidate={true}
      onSubmit={handleFormSubmit}
    >
      <div className={styles['form-header']}>
        {/* TODO: Replace with avatar input component */}
        <MonitorScriptAvatar
          scriptName={''}
          scriptAvatarUrl={''}
          color="light"
        />
        <div className={styles['collapse-button-container']}>
          <IconButton
            iconName="cross"
            label="collapse"
            width={32}
            onClick={onCollapseClick}
          />
        </div>
      </div>
      <div className={styles['form-body']}>
        <div className={styles['script-name']}>
          <Input
            control={control}
            errors={errors}
            label="name"
            name="name"
            placeholder="Script's name"
            isLabelHidden={true}
          />
        </div>
        <Input
          control={control}
          errors={errors}
          label="description"
          name="description"
          placeholder="Script's description"
          rowsN={2}
          isLabelHidden={true}
        />
        <Input
          control={control}
          errors={errors}
          label="URL"
          name="monitorUrl"
          placeholder="https://www.monitor-me.com"
        />
        <Input
          control={control}
          errors={errors}
          label="Selector"
          name="monitorSelector"
          placeholder=".css-selector"
        />
      </div>
      <div className={styles['form-footer']}>
        <Button label="Create" type="submit" variant="outlined" />
      </div>
    </form>
  );
};

export { CreateScriptForm };
