import { type BaseModel } from '~/types/types.js';

type ScriptExecutorModel = BaseModel & {
  scriptId: number;
  firstHref: string;
  lastHref: string;
};

export { type ScriptExecutorModel };
