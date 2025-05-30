import cron from 'node-cron';
import { monitorAll } from './tasks/tasks.js';
import { loggerService } from '~/modules/logger/logger.js';
import { config } from '~/config/config.js';

const startMonitoring = (monitorOnStartup: boolean): cron.ScheduledTask => {
  if (monitorOnStartup) {
    monitorAll();
  }

  return cron.schedule(config.MONITOR_SCHEDULE, async () => {
    loggerService.info('[Scheduler] Running task at');
    try {
      await monitorAll();
    } catch (error) {
      loggerService.error(`[Scheduler] Error running task: ${error}`);
    }
  });
};

export { startMonitoring };
