import { load as parseHTML } from 'cheerio';
import { loggerService } from '~/modules/logger/logger.js';

interface Metadata {
  ogTitle?: string | undefined;
  ogDescription?: string | undefined;
  ogImage?: string | undefined;
}

const fetchMetadata = async (url: string): Promise<Metadata> => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      throw new Error(`Invalid content-type: ${contentType}`);
    }

    const html = await res.text();
    const $ = parseHTML(html);

    const getMeta = (name: string) =>
      $(`meta[property="${name}"]`).attr('content') ||
      $(`meta[name="${name}"]`).attr('content');

    const metadata: Metadata = {
      ogTitle: getMeta('og:title'),
      ogDescription: getMeta('description') || getMeta('og:description'),
      ogImage: getMeta('og:image'),
    };

    return metadata;
  } catch (error) {
    if (error instanceof Error) {
      loggerService.error(`[fetchMetadata]: ${error.message}`);
    }
    return {};
  }
};

export { fetchMetadata };
