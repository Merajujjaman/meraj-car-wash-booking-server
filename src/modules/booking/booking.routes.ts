import express from 'express';
import getCustomerId from '../../middleware/getCustomerId';
import { bookingControllers } from './booking.controller';
import authAllowedFor from '../../middleware/authAllowedFor';
import validationRequest from '../../middleware/validationRequest';
import { bookingValidations } from './booking.validation';


const router = express.Router()

router.post('/', authAllowedFor('user'), getCustomerId, validationRequest(bookingValidations.createBookingValidationSchema), bookingControllers.booking )

export const bookingRoutes = router;