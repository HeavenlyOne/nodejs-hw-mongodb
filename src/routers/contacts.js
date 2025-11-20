import { Router } from 'express';
import {
  createNewContact,
  getAllContacts,
  getContactById,
  updateSomeContact,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/api/contacts', ctrlWrapper(getAllContacts));
router.get('/api/contacts/:id', ctrlWrapper(getContactById));
router.post('/api/contacts', ctrlWrapper(createNewContact));
router.patch('/api/contacts/:id', ctrlWrapper(updateSomeContact));

export default router;
