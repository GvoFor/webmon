import { loggerService } from '~/modules/logger/logger.js';
import { monitorScriptsService } from '~/modules/monitor-scripts/monitor-scripts.js';
import {
  fetchHrefs,
  findHrefsToReport,
  hrefToScriptReport,
} from '../helpers/helpers.js';
import { service } from '../service.js';

const monitorAll = async () => {
  const scripts = await monitorScriptsService.getAllScripts();
  for (const script of scripts) {
    if (!script.isActive) {
      continue;
    }

    try {
      const hrefs = await fetchHrefs(script.monitorUrl, script.monitorSelector);
      if (hrefs.length === 0) {
        loggerService.warn(
          `[monitorAll] Could not find any href in '${script.monitorUrl}' for '${script.monitorSelector}' selector`,
        );
        continue;
      }

      let hrefsToReport = [hrefs[0]!];

      try {
        const { firstHref, lastHref } = await service.getByScriptId(script.id);
        hrefsToReport = findHrefsToReport(hrefs, firstHref, lastHref);
        if (hrefsToReport.length === 0) {
          continue;
        }
      } catch {}

      const reports = await Promise.all(
        hrefsToReport.map((href) => hrefToScriptReport(script, href)),
      );

      for (const report of reports.reverse()) {
        await monitorScriptsService.createReport(report);
      }

      const firstHref = hrefs[0]!;
      const lastHref = hrefs[hrefs.length - 1]!;

      await service.createOrPatch({
        scriptId: script.id,
        firstHref,
        lastHref,
      });
    } catch (error) {
      if (error instanceof Error) {
        loggerService.error(
          `[monitorAll] Failied to monitor ${script.monitorUrl}: ${error.message}`,
        );
      }
    }
  }
};

export { monitorAll };
