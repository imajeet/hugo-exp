import * as AnalyzedController from '../controllers/analyzed.controller';
import { Router } from 'express';
const router = new Router();


/**
 * Example endpoint
 * /api/analyzed/?name=hugoce17&limit=20
 */
router.route('/analyzed').get(AnalyzedController.getAnalyzedData);

module.exports = router;
