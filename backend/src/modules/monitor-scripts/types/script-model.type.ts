import { type BaseModel } from '~/types/types.js';

type ScriptModel = BaseModel & {
  userId: number;
  avatarUrl?: string | undefined;
  name: string;
  description: string;
  monitorUrl: string;
  monitorSelector: string;
  isActive: boolean;
};

export { type ScriptModel };
