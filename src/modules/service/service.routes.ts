import express from 'express';
import { serviceControllers } from './service.controller';
import authAllowedFor from '../../middleware/authAllowedFor';
import validationRequest from '../../middleware/validationRequest';
import { serviceValidations } from './service.validation';
import { slotValidations } from '../slot/slot.validation';
import { slotControllers } from '../slot/slot.controller';


const router = express.Router()

router.post('/', authAllowedFor('admin'), validationRequest(serviceValidations.createServiceValidationSchema), serviceControllers.createService)
router.get('/', serviceControllers.getAllServices)
router.get('/:id', serviceControllers.getSingleService)
router.put('/:id', authAllowedFor('admin'), validationRequest(serviceValidations.updateServiceValidationSchema), serviceControllers.updateService)
router.delete('/:id', authAllowedFor('admin'), serviceControllers.deleteService)

// for creating slots according service
router.post('/slots',authAllowedFor('admin'), validationRequest(slotValidations.createSlotValidationSchema), slotControllers.createSlot)
export const serviceRoutes = router;