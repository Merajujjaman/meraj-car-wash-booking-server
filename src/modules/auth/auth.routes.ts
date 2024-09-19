import validationRequest from '../../middleware/validationRequest';
import { userValidations } from '../user/user.validation';
import { authControllers } from './auth.controller';
import express from 'express';

const router = express.Router()

router.post('/signup', validationRequest(userValidations.createUserValidationSchema), authControllers.signup)

export const authRoutes = router;