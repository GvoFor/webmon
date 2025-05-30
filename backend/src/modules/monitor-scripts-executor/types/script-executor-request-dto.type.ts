import { type BaseModel } from '~/types/types.js';
import { type ScriptExecutorModel } from './script-executor-model.type.js';

type ScriptExecutorRequestDTO = Omit<ScriptExecutorModel, keyof BaseModel>;

export { type ScriptExecutorRequestDTO };
