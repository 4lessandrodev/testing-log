import globalLog from './log';
import express, { Request, Response } from 'express';
import ServiceA from './services/service-01';
import ServiceB from './services/service-02';

const app = express();
const serviceA = new ServiceA();
const serviceB = new ServiceB();

app.get('/sample', async (req: Request, res: Response): Promise<Response> => {
    serviceA.execute();
    serviceB.execute();
    globalLog.print();
    await globalLog.writeLocal();
    const log = globalLog.clone('stateless');
    globalLog.clear();
    return res.status(200).json({ log });
});

const log = (): void => console.log('running on http://localhost:3000');
app.listen(3000, log);
