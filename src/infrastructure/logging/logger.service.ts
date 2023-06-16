import { ConsoleLogger, Injectable } from '@nestjs/common';
import type { ILogger } from '@domain';

// you can use this logger in services and etc
@Injectable()
export class LoggerService extends ConsoleLogger implements ILogger {
  override debug(context: string, message: string) {
    if (process.env['NODE_ENV'] !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
    }
  }

  override log(context: string, message: string) {
    super.log(`[INFO] ${message}`, context);
  }

  override error(context: string, message: string, trace?: string) {
    super.error(`[ERROR] ${message}`, trace, context);
  }

  override warn(context: string, message: string) {
    super.warn(`[WARN] ${message}`, context);
  }

  override verbose(context: string, message: string) {
    if (process.env['NODE_ENV'] !== 'production') {
      super.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
