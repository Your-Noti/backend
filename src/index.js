import 'dotenv/config'
import http from 'http';

import app from './app.js';

import { logger } from './utils/logger/index.js';

const { PORT } = process.env;

const server = http.createServer(app.callback());
server.listen(PORT);

logger.info(`App is listening on http://localhost:${PORT}`);
