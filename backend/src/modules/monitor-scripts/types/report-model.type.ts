import { type BaseModel } from '~/types/types.js';

type ReportModel = BaseModel & {
  userId: number;
  scriptName: string;
  scriptAvatarUrl?: string | undefined;
  previewImageUrl?: string | undefined;
  href: string;
  title: string;
  description: string;
  isMarkedAsChecked: boolean;
  isNew: boolean;
};

export { type ReportModel };
