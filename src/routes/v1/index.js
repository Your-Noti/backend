import Router from '@koa/router';

// import { responseHandler } from '../../middlewares/responseHandler';

import isAlive from './isAlive.js';

const router = new Router({ prefix: '/v1' });
// router.use(responseHandler);

router.use(isAlive.routes());

export default router;
