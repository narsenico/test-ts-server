import express, { Request, Response } from 'express';
import { OK } from '@utils/constants';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.status(OK).send('Hello World!!!');
});

app.listen(3000, () => console.log('Listening on port 3000'));
