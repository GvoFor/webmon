import { type BaseModel } from '~/types/types.js';
import { type ScriptModel } from './script-model.type.js';

type ScriptCreateRequestDTO = Omit<ScriptModel, keyof BaseModel | 'isActive'>;

export { type ScriptCreateRequestDTO };
