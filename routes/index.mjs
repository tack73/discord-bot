import express from 'express';
import discordRouter from './discord.mjs';

const router = express.Router();
router.use('/discord', discordRouter);

export default router;