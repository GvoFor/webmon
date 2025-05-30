import {
  type ReportCreateRequestDTO,
  type ScriptResponseDTO,
} from '~/modules/monitor-scripts/monitor-scripts.js';
import { fetchMetadata } from './fetch-metadata.helper.js';

const hrefToScriptReport = async (
  script: ScriptResponseDTO,
  href: string,
): Promise<ReportCreateRequestDTO> => {
  const { ogTitle, ogDescription, ogImage } = await fetchMetadata(href);
  const title = ogTitle || script.name;
  const description = ogDescription || script.description;

  return {
    title,
    description,
    previewImageUrl: ogImage,
    href,
    userId: script.userId,
    scriptName: script.name,
    scriptAvatarUrl: script.avatarUrl,
  };
};

export { hrefToScriptReport };
