import { Router } from 'express';

import WorldCupController from './controller/worldCupController';

const worldCupController = new WorldCupController();

const router = Router();

router.get('/', worldCupController.getWorldCups);
router.get('/:year', worldCupController.getWorldCupByYear);
router.post('/', worldCupController.insertWorldCup);
router.put('/:year', worldCupController.updateWorldCup);
router.delete('/:year', worldCupController.deleteWorldCup);

export default router;