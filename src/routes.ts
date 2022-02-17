import { Router } from 'express';

import worldCupController from './controller/worldCupController';

const router = Router();

router.get('/', worldCupController.getWorldCups);
router.get('/:year', worldCupController.getWorldCupByYear);
router.post('/', worldCupController.insertWorldCup);
router.put('/:year', worldCupController.updateWorldCup);
router.delete('/:year', worldCupController.deleteWorldCup);

export default router;