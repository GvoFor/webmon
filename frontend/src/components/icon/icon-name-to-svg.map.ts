import { IconName } from './types.js';
import GithubIcon from '/src/assets/images/icons/github.svg?react';
import LinkedinIcon from '/src/assets/images/icons/linkedin.svg?react';

const iconNameToSvgMap: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  'github': GithubIcon,
  'linkedin': LinkedinIcon,
};

export { iconNameToSvgMap };
