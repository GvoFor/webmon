import { HTTPCode } from '~/enums/enums.js';
import { MonitorScriptExecutorsError } from './errors/errors.js';
import { repository } from './repository.js';
import {
  ScriptExecutorModel,
  ScriptExecutorRequestDTO,
  ScriptExecutorResponseDTO,
} from './types/types.js';
import { scriptExecutorModelToResponseDto } from './helpers/script-executor-model-to-response-dto.helper.js';

const getByScriptId = async (
  scriptId: number,
): Promise<ScriptExecutorResponseDTO> => {
  const executor = await repository.getByScriptId(scriptId);

  if (!executor) {
    throw new MonitorScriptExecutorsError(
      'Script executor not found',
      HTTPCode.NOT_FOUND,
    );
  }

  return scriptExecutorModelToResponseDto(executor);
};

const createOrPatch = async (
  requestDto: ScriptExecutorRequestDTO,
): Promise<ScriptExecutorResponseDTO> => {
  let executor: ScriptExecutorModel | undefined;

  try {
    await getByScriptId(requestDto.scriptId);
    executor = await repository.patch(requestDto);
  } catch {
    executor = await repository.create(requestDto);
  }

  if (!executor) {
    throw new MonitorScriptExecutorsError(
      'Failed to create or patch report',
      HTTPCode.BAD_REQUEST,
    );
  }

  return scriptExecutorModelToResponseDto(executor);
};

const service = {
  getByScriptId,
  createOrPatch,
};

export { service };
