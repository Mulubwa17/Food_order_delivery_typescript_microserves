import { Response, Request, NextFunction } from 'express';
// import { nextTick } from 'process';


// const redis = require('redis');
// const client = redis.createClient({ socket: { port: 6379 } });
// client.on('error', (err: any) => console.log('Redis Client Error', err));
// client.connect();

import { createClient } from 'redis';

export const isCached =  async (req: Request, res: Response, next: NextFunction) => {
  const client = createClient();

  await client.connect();

  // Create an index.
  try {
    const id  = req.params._id;

  await client  .get(id)
  .then((data: any) => {
    if (data) {
      res.send(data);

    } else {
     next()
    }
  });
  } catch (e) {
    console.log(e);
  }


}

export const isCachedList =  async (req: Request, res: Response, next: NextFunction) => {
  const client = createClient();

  await client.connect();

  // Create an index.
  try {
    let payload = res.locals.payload;

  await client.get(payload)
  .then((data: any) => {
    if (data) {
      res.send(data);

    } else {
     next()
    }
  });
  } catch (e) {
    console.log(e);
  }


}
