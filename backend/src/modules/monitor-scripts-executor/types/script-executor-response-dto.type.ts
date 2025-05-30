import { type ScriptExecutorModel } from './script-executor-model.type.js';

type ScriptExecutorResponseDTO = Omit<
  ScriptExecutorModel,
  'createdAt' | 'updatedAt'
>;

export { type ScriptExecutorResponseDTO };
