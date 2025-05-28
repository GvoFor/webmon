import { useCallback, useState } from '~/hooks/hooks.js';

import DEFAULT_PREVIEW_SRC from '~/assets/images/monitor-card-preview-image-placeholder.svg';

type Properties = {
  src?: string | undefined;
  alt: string;
  className?: string | undefined;
};

const PreviewImage = ({
  src,
  alt,
  className,
}: Properties): React.JSX.Element => {
  const [srcToRender, setSrcToRender] = useState(src || DEFAULT_PREVIEW_SRC);

  const handleError = useCallback(() => {
    setSrcToRender(DEFAULT_PREVIEW_SRC);
  }, [setSrcToRender]);

  return (
    <img
      src={srcToRender}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export { PreviewImage };
