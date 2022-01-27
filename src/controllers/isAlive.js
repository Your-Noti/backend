import { isAliveService } from '../../src/services/index.js';

const getStatus = async (ctx) => {
  return isAliveService.getStatus(ctx);
};

const isAliveController = { getStatus };

export default isAliveController;
