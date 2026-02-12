import { Router } from 'express';

import { getAllLaunches, addNewLaunch, abortLaunch } from '../controllers/launch.controller.js';

const router = Router();

router.get('/get-all-launches', getAllLaunches);
router.post('/add-new-launch', addNewLaunch);
router.delete('/abort-launch/:id', abortLaunch);

export default router;