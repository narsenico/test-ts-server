import winston from 'winston';
const { combine, timestamp, colorize, align, printf } = winston.format;

function createConfiguration(name: string) {
  return {
    level: 'debug',
    defaultMeta: {
      loggerName: name,
    },
    format: combine(
      colorize({ all: true }),
      timestamp(),
      align(),
      printf(
        (info) =>
          `[${info.timestamp}] ${info.loggerName} - ${info.level}: ${info.message}`
      )
    ),
    transports: [new winston.transports.Console()],
  };
}

winston.loggers.add('main', createConfiguration('main'));

export function getLogger(id: string = 'main') {
  if (!winston.loggers.has(id)) {
    return winston.loggers.add(id, createConfiguration(id));
  }
  return winston.loggers.get(id);
}
