// src/server.ts
import express from 'express';
import { startCronJobs } from './jobs';
import logger from './utils/logger';

const app = express();
const PORT = process.env.PORT || 3000;

// Start cron job
startCronJobs();

app.get('/', (_, res) => {
	res.send('🚀 Cron job is running in the background!');
});

app.listen(PORT, () => {
	logger.info(`🌐 Server is listening on port ${PORT}`);
});
