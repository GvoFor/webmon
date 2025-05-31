import { load as parseHTML } from 'cheerio';

const fetchHrefs = async (url: string, selector: string): Promise<string[]> => {
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

  const hrefs: string[] = [];

  $(selector).each((_, element) => {
    const href = $(element).attr('href');
    if (href) {
      const absoluteHref = href.startsWith(url)
        ? href
        : new URL(href, url).toString();
      hrefs.push(absoluteHref);
    }
  });

  return hrefs;
};

export { fetchHrefs };
