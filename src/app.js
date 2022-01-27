import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaLogger from 'koa-logger';
import session from 'koa-session';

import { SESSION_SECRET_KEY } from './config/index.js';
//import errorHandler from './middlewares/errors';
import router from './routes/index.js';
// import { setupSwagger } from './setupSwagger';
//import 'utils/initApiClient';

import { logger } from './utils/logger/index.js';

const app = new Koa();
app.use(koaLogger());
//app.use(errorHandler);

app.use(
  bodyParser({
    enableTypes: ['json', 'form', 'text'],
  }),
);

app.keys = [SESSION_SECRET_KEY];
app.use(session(app));

// if (process.env.SWAGGER === 'true') {
//   setupSwagger(app);
// }

app.use(router.routes()).use(router.allowedMethods());

process.on('uncaughtException', (err) => {
  logger.error(err.message);
});

export default app;
