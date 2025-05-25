import { IconName } from '~/types/types.js';
import GithubIcon from '/src/assets/images/icons/github.svg?react';
import LinkedinIcon from '/src/assets/images/icons/linkedin.svg?react';
import EmailIcon from '/src/assets/images/icons/email.svg?react';
import KeyIcon from '/src/assets/images/icons/key.svg?react';
import EyeIcon from '/src/assets/images/icons/eye.svg?react';
import StrikedEyeIcon from '/src/assets/images/icons/striked-eye.svg?react';
import UserIcon from '/src/assets/images/icons/user.svg?react';

const iconNameToSvgMap: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  'github': GithubIcon,
  'linkedin': LinkedinIcon,
  'email': EmailIcon,
  'key': KeyIcon,
  'eye': EyeIcon,
  'strikedEye': StrikedEyeIcon,
  'user': UserIcon,
};

export { iconNameToSvgMap };
