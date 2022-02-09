import Router from '@koa/router';

// import swaggerRouter from './swagger';
import v1Router from './v1/index.js';

const router = new Router({ prefix: process.env.API_PREFIX });

router.get('/', (ctx) => {
  ctx.body = 'Your-Noti';
});

router.use(v1Router.routes());
// router.use(swaggerRouter.routes());

export default router;
