import express, { Request, Response } from 'express';
import { OK } from '@utils/constants';
import { getLogger } from '@utils/logger';

const mainLogger = getLogger('main');
const testLogger = getLogger('test');

const app = express();

app.get('/', (_req: Request, res: Response) => {
  testLogger.info('get /');
  res.status(OK).send('Hello World!!!');
});

app.listen(3000, () => mainLogger.info('Listening on port 3000'));
