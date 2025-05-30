import { IconName } from '~/types/types.js';
import GithubIcon from '/src/assets/images/icons/github.svg?react';
import LinkedinIcon from '/src/assets/images/icons/linkedin.svg?react';
import EmailIcon from '/src/assets/images/icons/email.svg?react';
import KeyIcon from '/src/assets/images/icons/key.svg?react';
import EyeIcon from '/src/assets/images/icons/eye.svg?react';
import StrikedEyeIcon from '/src/assets/images/icons/striked-eye.svg?react';
import UserIcon from '/src/assets/images/icons/user.svg?react';
import CheckLineIcon from '/src/assets/images/icons/check-line.svg?react';
import TrashCanIcon from '/src/assets/images/icons/trash-can.svg?react';
import ArrowDownIcon from '/src/assets/images/icons/arrow-down.svg?react';
import EditIcon from '/src/assets/images/icons/edit.svg?react';
import PlusIcon from '/src/assets/images/icons/plus.svg?react';
import CrossIcon from '/src/assets/images/icons/cross.svg?react';
import PowerIcon from '/src/assets/images/icons/power.svg?react';

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
  'checkLine': CheckLineIcon,
  'trashCan': TrashCanIcon,
  'arrowDown': ArrowDownIcon,
  'edit': EditIcon,
  'plus': PlusIcon,
  'cross': CrossIcon,
  'power': PowerIcon,
};

export { iconNameToSvgMap };
