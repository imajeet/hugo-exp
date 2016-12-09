import { Router } from 'express';
import * as ContactController from '../controllers/contact.controller';

const router = new Router();

router.route('/add-contact').post(ContactController.addNewContact);

export default router;
