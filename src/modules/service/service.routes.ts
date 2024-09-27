import express from 'express';
import { serviceControllers } from './service.controller';
import authAllowedFor from '../../middleware/authAllowedFor';
import validationRequest from '../../middleware/validationRequest';
import { serviceValidations } from './service.validation';


const router = express.Router()

router.post('/', authAllowedFor('admin'), validationRequest(serviceValidations.createServiceValidationSchema), serviceControllers.createService)
router.get('/', serviceControllers.getAllServices)
router.get('/:id', serviceControllers.getSingleService)
router.put('/:id', authAllowedFor('admin'), validationRequest(serviceValidations.updateServiceValidationSchema), serviceControllers.updateService)
router.delete('/:id', authAllowedFor('admin'), serviceControllers.deleteService)

export const serviceRoutes = router;