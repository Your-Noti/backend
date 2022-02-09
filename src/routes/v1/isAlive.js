import Router from '@koa/router';

const router = new Router();

import { isAliveController } from '../../controllers/index.js';

router.get('getStatus', '/getStatus', isAliveController.getStatus);

export default router;
