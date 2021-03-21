
import * as controller from './controller';
import { Router } from 'express';
const router = new Router()

router.post('/contact', controller.addContact);
router.get('/contact',controller.getContactList);
router.put('/contact',controller.updateContact);
router.get('/contact/:id',controller.getContactById);
router.post('/message',controller.sendMessage);
router.get('/message',controller.getMessage)
export default router;